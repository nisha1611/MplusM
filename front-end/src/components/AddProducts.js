import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import '../styles/style.css'
import Navbar from './Navbar';
import SideBarPharmacy from './SideBarPharmacy';
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
const AddProducts = () => {

    const { state } = useLocation();
    console.warn("product " + state.id);

    // const [productName, setProductName] = useState("");
    // const [productDescription, setProductDescription] = useState("");
    // const [quantity, setProductQuantity] = useState("");
    // const [brand, setProductBrand] = useState("");  

    //const ProductArray = new Array({ ProductName: "", ProductDescription: "", ProductQuantity: "", ProductBrand: "" });
    //console.warn(typeof(ProductArray))
    const [productList, setProductList] = useState([{ productName: "", productDescription: "", quantity: "", brand: "" }]);
    console.warn(typeof (productList))

    const handleChange = (e) => {
        //product.productName=e.target.value
        e.target.name = e.target.value;
        setProductList([...productList])

    }
    // function handleChange(product){
    //     product.productName=e.target.value

    // }
    const collectData = async (e) => {
        console.log("inside collect data")
        e.preventDefault();
        // valid = false
        //console.warn(name, password)
        // console.warn(valid)

        setProductList([...productList, { productName: "", productDescription: "", quantity: "", brand: "", price: "" }])
        //setProductList([...productList,{[e.target.name]:e.target.value}])
        let result = await fetch("http://localhost:9000/mplusm/products/addProducts", {
            method: 'post',
            body: JSON.stringify(productList[0]),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        result = await result.json();
        console.warn("result" + result)

    }


    return (
        <div>
            <Navbar />
            <SideBarPharmacy />
            <main id="main" class="main">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="row">
                            <div class="col-xxl-6 col-md-12">
                                <div class="card">
                                    <h5 class="card-title">Product Inventory</h5>
                                    <div class="card-body pt-3">
                                        <table class="table table-hover">
                                            <thead>
                                                <th>Product Name</th>
                                                <th>View Details</th>
                                            </thead>
                                            <tbody>
                                                {productList.map((product, index) => (

                                                    productList.length - 1 > index && (
                                                        // <div class="row">
                                                        //     <div class="col-lg-3 col-md-4 label">Name</div>
                                                        //     <div class="col-lg-9 col-md-8">{product.ProductName}</div>
                                                        // </div>
                                                        <tr >
                                                            {/*data-toggle="collapse" data-target="#accordion" class="clickable" */}
                                                            <td>{product.productName}</td>
                                                            <td><Link to="/ProductDetails" state={product}><button class="btn btn-success">View</button></Link></td>
                                                        </tr>
                                                        // {/* <tr>
                                                        //     <td colspan="3">
                                                        //         <div id="accordion" class="collapse">Hidden by default</div>
                                                        //     </td>
                                                        // </tr> */}

                                                    )


                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xxl-6 col-md-12">
                                <div class="card">
                                    <h5 class="card-title">Add new Product</h5>
                                    <div class="card-body pt-3">
                                        <form>
                                            {productList.map((product, index) => (
                                                <div>
                                                    {productList.length - 1 === index && (
                                                        <div>
                                                            <div class="row mb-3">
                                                                <label for="productName" class="col-md-4 col-lg-3 col-form-label">Product Name</label>
                                                                <div class="col-md-8 col-lg-9">
                                                                    <input name="productName" type="text" class="form-control" id="productName" onChange={(e) => { product.productName = e.target.value; setProductList([...productList]) }} />
                                                                </div>
                                                            </div>

                                                            <div class="row mb-3">
                                                                <label for="ProductDescription" class="col-md-4 col-lg-3 col-form-label">Product Description</label>
                                                                <div class="col-md-8 col-lg-9">
                                                                    <textarea name="productDescription" type="text" class="form-control" id="ProductDescription" onChange={(e) => { product.productDescription = e.target.value; setProductList([...productList]) }} />
                                                                </div>
                                                            </div>

                                                            <div class="row mb-3">
                                                                <label for="ProductQuantity" class="col-md-4 col-lg-3 col-form-label">Product Quantity</label>
                                                                <div class="col-md-8 col-lg-9">
                                                                    <input name="quantity" type="text" class="form-control" id="ProductQuantity" onChange={(e) => { product.quantity = e.target.value; setProductList([...productList]) }} />
                                                                </div>
                                                            </div>

                                                            <div class="row mb-3">
                                                                <label for="ProductBrand" class="col-md-4 col-lg-3 col-form-label">Product Brand</label>
                                                                <div class="col-md-8 col-lg-9">
                                                                    <input name="brand" type="text" class="form-control" id="ProductBrand" onChange={(e) => { product.brand = e.target.value; setProductList([...productList]) }} />
                                                                </div>
                                                            </div>

                                                            <div class="row mb-3">
                                                                <label for="price" class="col-md-4 col-lg-3 col-form-label">Product Price</label>
                                                                <div class="col-md-8 col-lg-9">
                                                                    <input name="price" type="text" class="form-control" id="price" onChange={(e) => { product.price = e.target.value; setProductList([...productList]) }} />
                                                                </div>
                                                            </div>

                                                            {/* {ProductList.length - 1 === index && ( */}
                                                            <div class="text-center">
                                                                <button type="button"
                                                                    // onClick={() => setProductList([...productList, { productName: "", productDescription: "", quantity: "", brand: "" }])}
                                                                    onClick={collectData}
                                                                    class="btn btn-primary">Add Product</button>
                                                            </div>
                                                            {/* )} */}

                                                        </div>
                                                    )}
                                                </div>
                                            ))}

                                            {console.warn(productList)}

                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default AddProducts;


{/* <div class="row mb-3">
                                <label for="ProductName" class="col-md-4 col-lg-3 col-form-label">Product Name</label>
                                <div class="col-md-8 col-lg-9">
                                    <input name="ProductName" type="text" class="form-control" id="ProductName" onChange={(e) => setProductName(e.target.value)} />
                                </div>
                            </div> */}

{/* <div class="row mb-3">
                                <label for="ProductDescription" class="col-md-4 col-lg-3 col-form-label">Product Description</label>
                                <div class="col-md-8 col-lg-9">
                                    <textarea name="ProductDescription" type="text" class="form-control" id="ProductDescription" onChange={(e) => setProductDescription(e.target.value)} />
                                </div>
                            </div> */}

{/* <div class="row mb-3">
                                <label for="ProductQuantity" class="col-md-4 col-lg-3 col-form-label">Product Quantity</label>
                                <div class="col-md-8 col-lg-9">
                                    <input name="ProductQuantity" type="text" class="form-control" id="ProductQuantity" onChange={(e) => setProductQuantity(e.target.value)} />
                                </div>
                            </div> */}

{/* <div class="row mb-3">
                                <label for="ProductBrand" class="col-md-4 col-lg-3 col-form-label">Product Brand</label>
                                <div class="col-md-8 col-lg-9">
                                    <input name="ProductBrand" type="text" class="form-control" id="ProductBrand" onChange={(e) => setProductBrand(e.target.value)} />
                                </div>
                            </div> */}

{/* <div class="text-center">
                                <button type="submit" class="btn btn-primary">Add Product</button>
                        </div> */}