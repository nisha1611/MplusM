import "../styles/style.css"
//import {} from "./helper"

import SideBarAdmin from './SideBarAdmin';
let Logo = require("../img/logo.jpeg")
let Profile = require("../img/profile icon.jpg")


const Navbar = () => {
    return (
        // <div class="header">
        //         <div class="container-fluid container-xl d-flex align-items-center justify-content-between">
        //             <a class="logo d-flex align-items-center">
        //                 <img src={Logo} alt="logo"/>
        //                 <h1>M plus M</h1>
        //             </a>
        //             <nav id="navbar" class="navbar">
        //                 <ul>
        //                     <li><a href="#hero">Home</a></li>
        //                     <li><a href="#about">About</a></li>
        //                     <li><a href="#services">Services</a></li>
        //                     <li><a href="#portfolio">Portfolio</a></li>
        //                     <li><a href="#team">Team</a></li>
        //                     <li><a href="blog.html">Blog</a></li>
        //                     <li class="dropdown"><a href="#"><span>Drop Down</span> <i class="bi bi-chevron-down dropdown-indicator"></i></a>
        //                         <ul>
        //                             <li><a href="#">Drop Down 1</a></li>
        //                             <li class="dropdown"><a href="#"><span>Deep Drop Down</span> <i class="bi bi-chevron-down dropdown-indicator"></i></a>
        //                                 <ul>
        //                                     <li><a href="#">Deep Drop Down 1</a></li>
        //                                     <li><a href="#">Deep Drop Down 2</a></li>
        //                                     <li><a href="#">Deep Drop Down 3</a></li>
        //                                     <li><a href="#">Deep Drop Down 4</a></li>
        //                                     <li><a href="#">Deep Drop Down 5</a></li>
        //                                 </ul>
        //                             </li>
        //                             <li><a href="#">Drop Down 2</a></li>
        //                             <li><a href="#">Drop Down 3</a></li>
        //                             <li><a href="#">Drop Down 4</a></li>
        //                         </ul>
        //                     </li>
        //                     <li><a href="#contact">Contact</a></li>
        //                 </ul>
        //             </nav>

        //             <i class="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
        //             <i class="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
        //         </div>
        //     </div>
        <header id="header" class="header fixed-top d-flex align-items-center">

            <div class="d-flex align-items-center justify-content-between">
                <a href="index.html" class="logo d-flex align-items-center">
                    <img src={Logo} alt="" />
                    <span class="d-none d-lg-block">Medicines Plus More</span>
                </a>
                <i class="bi bi-list toggle-sidebar-btn"></i>
            </div>

            <div class="search-bar">
                <form class="search-form d-flex align-items-center" method="POST" action="#">
                    <input type="text" name="query" placeholder="Search" title="Enter search keyword" />
                    <button type="submit" title="Search"><i class="bi bi-search"></i></button>
                </form>
            </div>

            <nav class="header-nav ms-auto">
                <ul class="d-flex align-items-center">

                    <li class="nav-item d-block d-lg-none">
                        <a class="nav-link nav-icon search-bar-toggle " href="#">
                            <i class="bi bi-search"></i>
                        </a>
                    </li>

                    <li class="nav-item dropdown">

                        <a class="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
                            <i class="bi bi-bell"></i>
                            <span class="badge bg-primary badge-number">4</span>
                        </a>

                        <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
                            <li class="dropdown-header">
                                You have 4 new notifications
                                <a href="#"><span class="badge rounded-pill bg-primary p-2 ms-2">View all</span></a>
                            </li>
                            <li>
                                <hr class="dropdown-divider" />
                            </li>

                            <li class="notification-item">
                                <i class="bi bi-exclamation-circle text-warning"></i>
                                <div>
                                    <h4>Lorem Ipsum</h4>
                                    <p>Quae dolorem earum veritatis oditseno</p>
                                    <p>30 min. ago</p>
                                </div>
                            </li>

                            <li>
                                <hr class="dropdown-divider" />
                            </li>

                            <li class="notification-item">
                                <i class="bi bi-x-circle text-danger"></i>
                                <div>
                                    <h4>Atque rerum nesciunt</h4>
                                    <p>Quae dolorem earum veritatis oditseno</p>
                                    <p>1 hr. ago</p>
                                </div>
                            </li>

                            <li>
                                <hr class="dropdown-divider" />
                            </li>

                            <li class="notification-item">
                                <i class="bi bi-check-circle text-success"></i>
                                <div>
                                    <h4>Sit rerum fuga</h4>
                                    <p>Quae dolorem earum veritatis oditseno</p>
                                    <p>2 hrs. ago</p>
                                </div>
                            </li>

                            <li>
                                <hr class="dropdown-divider" />
                            </li>

                            <li class="notification-item">
                                <i class="bi bi-info-circle text-primary"></i>
                                <div>
                                    <h4>Dicta reprehenderit</h4>
                                    <p>Quae dolorem earum veritatis oditseno</p>
                                    <p>4 hrs. ago</p>
                                </div>
                            </li>

                            <li>
                                <hr class="dropdown-divider" />
                            </li>
                            <li class="dropdown-footer">
                                <a href="#">Show all notifications</a>
                            </li>

                        </ul>

                    </li>

                    <li class="nav-item dropdown">

                        <a class="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
                            <i class="bi bi-chat-left-text"></i>
                            <span class="badge bg-success badge-number">3</span>
                        </a>

                        <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow messages">
                            <li class="dropdown-header">
                                You have 3 new messages
                                <a href="#"><span class="badge rounded-pill bg-primary p-2 ms-2">View all</span></a>
                            </li>
                            <li>
                                <hr class="dropdown-divider" />
                            </li>

                            <li class="message-item">
                                <a href="#">
                                    <img src="assets/img/messages-1.jpg" alt="" class="rounded-circle" />
                                    <div>
                                        <h4>Maria Hudson</h4>
                                        <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
                                        <p>4 hrs. ago</p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <hr class="dropdown-divider" />
                            </li>

                            <li class="message-item">
                                <a href="#">
                                    <img src="assets/img/messages-2.jpg" alt="" class="rounded-circle" />
                                    <div>
                                        <h4>Anna Nelson</h4>
                                        <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
                                        <p>6 hrs. ago</p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <hr class="dropdown-divider" />
                            </li>

                            <li class="message-item">
                                <a href="#">
                                    <img src="assets/img/messages-3.jpg" alt="" class="rounded-circle" />
                                    <div>
                                        <h4>David Muldon</h4>
                                        <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
                                        <p>8 hrs. ago</p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <hr class="dropdown-divider" />
                            </li>

                            <li class="dropdown-footer">
                                <a href="#">Show all messages</a>
                            </li>

                        </ul>

                    </li>

                    <li class="nav-item dropdown pe-3">

                        <a class="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
                            <img src={Profile} alt="Profile" class="rounded-circle" />
                            <span class="d-none d-md-block dropdown-toggle ps-2">Profile</span>
                        </a>
                        <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                            <li class="dropdown-header">
                                <h6>Kevin Anderson</h6>
                                <span>Web Designer</span>
                            </li>
                            <li>
                                <hr class="dropdown-divider" />
                            </li>

                            <li>
                                <a class="dropdown-item d-flex align-items-center" href="users-profile.html">
                                    <i class="bi bi-person"></i>
                                    <span>My Profile</span>
                                </a>
                            </li>
                            <li>
                                <hr class="dropdown-divider" />
                            </li>

                            <li>
                                <a class="dropdown-item d-flex align-items-center" href="users-profile.html">
                                    <i class="bi bi-gear"></i>
                                    <span>Account Settings</span>
                                </a>
                            </li>
                            <li>
                                <hr class="dropdown-divider" />
                            </li>

                            <li>
                                <a class="dropdown-item d-flex align-items-center" href="pages-faq.html">
                                    <i class="bi bi-question-circle"></i>
                                    <span>Need Help?</span>
                                </a>
                            </li>
                            <li>
                                <hr class="dropdown-divider" />
                            </li>

                            <li>
                                <a class="dropdown-item d-flex align-items-center" href="#">
                                    <i class="bi bi-box-arrow-right"></i>
                                    <span>Sign Out</span>
                                </a>
                            </li>

                        </ul>
                    </li>
                </ul>
            </nav>

        </header>
    )
}

export default Navbar;