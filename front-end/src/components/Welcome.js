import { Link } from "react-router-dom";
let Logo = require("../img/logo.jpeg")
let bg = require("../img/bg.png")
const Welcome = () => {
    return (
        <div>
            <header id="header" class="header fixed-top d-flex align-items-center">
                <div class="d-flex align-items-center justify-content-between">
                    <a class="logo d-flex align-items-center">
                        <img src={Logo} alt="" />
                        <span class="d-none d-lg-block">Medicines Plus More</span>
                    </a>
                </div>
                <div class="social-links ms-auto me-4 d-none d-md-flex align-items-center">
                    <a href="#" class="twitter"><i class="bi bi-twitter"></i></a>
                    <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
                    <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
                    <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a>
                </div>

            </header>
            <div id="mainpage" class="mainpage pt-3 mt-5 ">
                <div class="row ">
                     <div class="col-lg-12 " >

                        <div class="card">
                            <div class="row g-0">
                                <div class="col-md-4">
                                    <img src={bg} class="img-fluid rounded-start" alt="..." />
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body ">
                                        <h5 class="card-title">Welcome to Medicines Plus More</h5>
                                        <p class="card-text">Joining hands together to bring the pharmacies working independently and locally under one umbrella for common benefit
</p>
                                       <Link to="/PharmacyRegister"> <button class="btn btn-success">Register Your Pharmacy</button> </Link> <Link to ="/Login"><button class="btn btn-secondary"

                                        >Login</button></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Welcome;

