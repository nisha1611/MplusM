import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import '../styles/style.css'
import Navbar from './Navbar';
import OrderChart from './OrderChart';
import SalesChart from './SalesChart';
import SideBarAdmin from './SideBarAdmin';
//import "./helper"


const AdminHome = () => {

    return (
        <div>
            <Navbar />
            {/* <div> */}
            {/* <div class="hero">

                <div class="container position-relative">
                    <div class="row gy-5" data-aos="fade-in">
                        <div class="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center text-center text-lg-start">
                            <h2>Welcome Administrator</h2>
                            <p>Batao kya likhna hai yaha</p>
                            <div class="d-flex justify-content-center justify-content-lg-start">
                                <a href="#about" class="btn-get-started">Get Started</a>
                                <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" class="glightbox btn-watch-video d-flex align-items-center"><i class="bi bi-play-circle"></i><span>Watch Video</span></a>
                            </div>
                        </div>
                        <div class="col-lg-6 order-1 order-lg-2">
                            <img src="../img/hero-img.svg" class="img-fluid" alt="here" data-aos="zoom-out" data-aos-delay="100" /> 
                        </div>
                    </div>
                </div>
                <div class="icon-boxes position-relative center">
                    <div class="container position-relative">
                        <div class="row gy-3 mt-5">

                            <div class="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay="100">
                                <div class="icon-box">
                                    <div class="icon"><i class="bi bi-easel"></i></div>
                                    <h4 class="title"><a href="" class="stretched-link">Lorem Ipsum</a></h4>
                                </div>
                            </div>

                            <div class="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay="200">
                                <div class="icon-box">
                                    <div class="icon"><i class="bi bi-gem"></i></div>
                                    <h4 class="title"><a href="" class="stretched-link">Sed ut perspiciatis</a></h4>
                                </div>
                            </div>


                            <div class="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay="300">
                                <div class="icon-box">
                                    <div class="icon"><i class="bi bi-geo-alt"></i></div>
                                    <h4 class="title"><a href="" class="stretched-link">Magni Dolores</a></h4>
                                </div>
                            </div>


                            <div class="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay="500">
                                <div class="icon-box">
                                    <div class="icon"><i class="bi bi-command"></i></div>
                                    <h4 class="title"><a href="" class="stretched-link">Nemo Enim</a></h4>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div> */}
            <SideBarAdmin/>
            <main id="main" class="main">
                <div class="pagetitle">
                    <h1>Dashboard</h1>
                    <nav>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                            <li class="breadcrumb-item active">Dashboard</li>
                        </ol>
                    </nav>
                </div>
                <section class="section dashboard">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="row">


                                <div class="col-xxl-3 col-md-6">
                                    <div class="card info-card sales-card">

                                        <div class="filter">
                                            <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
                                            <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                                <li class="dropdown-header text-start">
                                                    <h6>Filter</h6>
                                                </li>

                                                <li><a class="dropdown-item" href="#">Today</a></li>
                                                <li><a class="dropdown-item" href="#">This Month</a></li>
                                                <li><a class="dropdown-item" href="#">This Year</a></li>
                                            </ul>
                                        </div>

                                        <div class="card-body">
                                            <h5 class="card-title">Sales <span>| Today</span></h5>

                                            <div class="d-flex align-items-center">
                                                <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                                    <i class="bi bi-cart"></i>
                                                </div>
                                                <div class="ps-3">
                                                    <h6>145</h6>
                                                    <span class="text-success small pt-1 fw-bold">12%</span> <span class="text-muted small pt-2 ps-1">increase</span>

                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>


                                <div class="col-xxl-3 col-md-6">
                                    <div class="card info-card revenue-card">

                                        <div class="filter">
                                            <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
                                            <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                                <li class="dropdown-header text-start">
                                                    <h6>Filter</h6>
                                                </li>

                                                <li><a class="dropdown-item" href="#">Today</a></li>
                                                <li><a class="dropdown-item" href="#">This Month</a></li>
                                                <li><a class="dropdown-item" href="#">This Year</a></li>
                                            </ul>
                                        </div>

                                        <div class="card-body">
                                            <h5 class="card-title">Revenue <span>| This Month</span></h5>

                                            <div class="d-flex align-items-center">
                                                <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                                    <i class="bi bi-currency-dollar"></i>
                                                </div>
                                                <div class="ps-3">
                                                    <h6>$3,264</h6>
                                                    <span class="text-success small pt-1 fw-bold">8%</span> <span class="text-muted small pt-2 ps-1">increase</span>

                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>


                                <div class="col-xxl-3 col-md-6">

                                    <div class="card info-card customers-card">

                                        <div class="filter">
                                            <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
                                            <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                                <li class="dropdown-header text-start">
                                                    <h6>Filter</h6>
                                                </li>

                                                <li><a class="dropdown-item" href="#">Today</a></li>
                                                <li><a class="dropdown-item" href="#">This Month</a></li>
                                                <li><a class="dropdown-item" href="#">This Year</a></li>
                                            </ul>
                                        </div>

                                        <div class="card-body">
                                            <h5 class="card-title">Customers <span>| This Year</span></h5>

                                            <div class="d-flex align-items-center">
                                                <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                                    <i class="bi bi-people"></i>
                                                </div>
                                                <div class="ps-3">
                                                    <h6>1244</h6>
                                                    <span class="text-danger small pt-1 fw-bold">12%</span> <span class="text-muted small pt-2 ps-1">decrease</span>

                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                                <div class="col-xxl-3 col-md-6">

                                    <div class="card info-card customers-card">

                                        <div class="filter">
                                            <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
                                            <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                                <li class="dropdown-header text-start">
                                                    <h6>Filter</h6>
                                                </li>

                                                <li><a class="dropdown-item" href="#">Today</a></li>
                                                <li><a class="dropdown-item" href="#">This Month</a></li>
                                                <li><a class="dropdown-item" href="#">This Year</a></li>
                                            </ul>
                                        </div>

                                        <div class="card-body">
                                            <h5 class="card-title">Customers <span>| This Year</span></h5>

                                            <div class="d-flex align-items-center">
                                                <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                                    <i class="bi bi-people"></i>
                                                </div>
                                                <div class="ps-3">
                                                    <h6>1244</h6>
                                                    <span class="text-danger small pt-1 fw-bold">12%</span> <span class="text-muted small pt-2 ps-1">decrease</span>

                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="row">
                                <div class="col-xxl-6 col-md-12">
                                    <div class="card">
                                        <div class="filter">
                                            <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
                                            <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                                <li class="dropdown-header text-start">
                                                    <h6>Filter</h6>
                                                </li>

                                                <li><a class="dropdown-item" href="#">Today</a></li>
                                                <li><a class="dropdown-item" href="#">This Month</a></li>
                                                <li><a class="dropdown-item" href="#">This Year</a></li>
                                            </ul>
                                        </div>
                                        <div class="card-body">
                                            <h5 class="card-title">Order Summary <span>/Today</span></h5>

                                            <div id="donutChart"><OrderChart/></div>
                                            
                                        </div>
                                    </div>


                                </div>
                                <div class="col-xxl-6 col-md-12">
                                    <div class="card">
                                        <div class="filter">
                                            <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
                                            <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                                <li class="dropdown-header text-start">
                                                    <h6>Filter</h6>
                                                </li>

                                                <li><a class="dropdown-item" href="#">Today</a></li>
                                                <li><a class="dropdown-item" href="#">This Month</a></li>
                                                <li><a class="dropdown-item" href="#">This Year</a></li>
                                            </ul>

                                        </div>
                                        <div class="card-body">
                                            <h5 class="card-title">Sales Reports <span>/Today</span></h5>

                                            <div id="reportsChart"><SalesChart/></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default AdminHome;