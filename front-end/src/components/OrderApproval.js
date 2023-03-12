import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/style.css'
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import SideBarAdmin from './SideBarAdmin';
import SideBarPharmacy from './SideBarPharmacy'
import { useLocation } from 'react-router-dom';
let Logo = require('../img/logo.jpeg');


const OrderApproval = () => {
  const {state} = useLocation();
  console.warn("order "+ state.id);  

  let myData = []
  const [SampleData, setSampleData] = useState([]);
  const [ApproveData, setApproveData] = useState([]);
  // const [DispatchData, setDispatchData] = useState([]);
  // const [DeliverData, setDeliverData] = useState([]);
  const [RejectData, setRejectData] = useState([]);

  useEffect(()=>{
    const asyncFn=async () => {
    await fetch('http://localhost:9000/mplusm/pharmacist/orderList',{
      body:state.id
    })
      .then((response) => response.json())
      .then((data) => {
        setSampleData((SampleData) => data.filter(i => i.status === "pending"))
        setApproveData((ApproveData) => data.filter(i => i.status === "approved"))
        setRejectData((RejectData) => data.filter(i => i.status === "rejected"))
      })}
      asyncFn();
  }, [])

  async function ApproveOrder(item) {
    console.warn(item.status)
    setApproveData((ApproveData) => [...ApproveData, item])
    setSampleData((SampleData).filter(i => i._id !== item._id))

    let result = await fetch("http://localhost:9000/mplusm/pharmacist/approveOrder", {
      method: 'post',
      body: JSON.stringify(item),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    result = await result.json();




  }

  async function DispatchOrder(item) {
    console.warn(item.status)
    setApproveData((ApproveData) => [...ApproveData, item])
    setSampleData((SampleData).filter(i => i._id !== item._id))

    let result = await fetch("http://localhost:9000/mplusm/pharmacist/dispatchOrder", {
      method: 'post',
      body: JSON.stringify(item),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    result = await result.json();




  }

  async function DeliverOrder(item) {
    console.warn(item.status)
    setApproveData((ApproveData) => [...ApproveData, item])
    setSampleData((SampleData).filter(i => i._id !== item._id))

    let result = await fetch("http://localhost:9000/mplusm/pharmacist/deliverOrder", {
      method: 'post',
      body: JSON.stringify(item),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    result = await result.json();




  }

  async function RejectOrder(item) {
    setRejectData((RejectData) => [...RejectData, item])
    setSampleData((SampleData).filter(i => i._id !== item._id))

    let result = await fetch("http://localhost:9000/mplusm/pharmacist/rejectOrder", {
      method: 'post',
      body: JSON.stringify(item),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    result = await result.json();
  }

  function openList(evt, tableName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tableName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  return (
    <div>
      <Navbar />
      <SideBarPharmacy state = {state}></SideBarPharmacy>
      <main id ="main" class="main">
      <div class="card">
        <div class="card-body">
          <div class="tab">
            <button class="tablinks" onClick={(e) => openList(e, 'Applications')}>Applications</button>
            <button class="tablinks" onClick={(e) => openList(e, 'Approved')}>Approved</button>
            <button class="tablinks" onClick={(e) => openList(e, 'Rejected')}>Rejected</button>
          </div>
          <div id="Applications" class="tabcontent">
            <h5 class="card-title">Order Applications</h5>
            <table class="table table-hover">
              {console.warn("here")}
              <thead>
                <tr>
                  <th scope="col">Customer Name</th>
                  {/* <th scope="col">Pharmacy Name</th> */}
                  <th scope="col">Product Name</th>
                  {/* <th scope="col">Qty</th> */}
                  <th scope="col">Approve/Reject</th>
                </tr>
              </thead>
              <tbody>
                {SampleData.map((item, index) => {
                  return (
                    <tr>
                      {/* <td>{item._id}</td> */}
                      {/* <td>  <Link to="/PharmacyDetails"  state={item}   >{item.pharmacyName}</Link></td> */}
                      <td><Link to={'/OrderDetails'}
                        state={item}
                        // onClick={() => window.location.href("/PharmacyDetails")}
                        >{item.customerName}</Link></td>
                      {/* onClick={() => window.location.href("/PharmacyDetails")} */}
                      <td>{item.products}</td>
                      {/* <td>{item.prescription}</td> */}
                      {/* <td>{item.products.qty}</td> */}
                      <td><button class="btn btn-success" onClick={(e) => ApproveOrder(item)}>Approve</button>  <button class="btn btn-danger" onClick={(e) => RejectOrder(item)}>Reject</button></td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div id="Approved" class="tabcontent">
            <h5 class="card-title">Approved orders</h5>

            <table class="table table-hover">
              <thead>
                <tr>
                  <th scope="col">Customer Name</th>
                  <th scope="col">Product Name</th>
                  {/* <th scope="col">Qty</th> */}
                </tr>
              </thead>
              <tbody>
                {ApproveData.map((item, index) => {
                  return (
                    <tr>
                      <td>{item.customerName}</td>
                      <td>{item.products}</td>
                      {/* <td>{item.products.qty}</td> */}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div id="Rejected" class="tabcontent">
            <h5 class="card-title">Rejected Orders</h5>

            <table class="table table-hover">
              <thead>
                <tr>
                  <th scope="col">Customer Name</th>
                  <th scope="col">Product Name</th>
                  {/* <th scope="col">Qty</th> */}
                </tr>
              </thead>
              <tbody>
                {RejectData.map((item, index) => {
                  return (
                    <tr>
                      <td>{item.customerName}</td>
                      <td>{item.products}</td>
                      {/* <td>{item.products.qty}</td> */}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      </main>
    </div>
  )
}

export default OrderApproval;