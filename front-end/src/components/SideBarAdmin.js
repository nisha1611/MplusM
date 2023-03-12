import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { Link } from 'react-router-dom';
const SideBarAdmin = () => {


    return (
        <div>
            <aside id="sidebar" class="sidebar">

                <ul class="sidebar-nav" id="sidebar-nav">

                    <li class="nav-item">
                        <Link to="/AdminHomePage"><a class="nav-link ">
                            <i class="bi bi-grid"></i>
                            <span>Dashboard</span>
                        </a>
                        </Link>
                    </li>


                    <li class="nav-item">
                    <Link to="/PharmacyApproval"><a class="nav-link collapsed" href="users-profile.html">
                            <i class="bi bi-person"></i>
                            <span>Pharmacy Management</span>
                        </a>
                        </Link>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link collapsed" href="pages-faq.html">
                            <i class="bi bi-question-circle"></i>
                            <span>Customer Management</span>
                        </a>
                    </li>

                </ul>

            </aside>
        </div>
    );
};

export default SideBarAdmin;