import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
const SideBarAdmin = () => {

    const {state} = useLocation();
    console.warn("sidebar "+state.id);
    return (
        <div>
            <aside id="sidebar" class="sidebar">

                <ul class="sidebar-nav" id="sidebar-nav">

                    <li class="nav-item">
                        <Link to="/PharmacyHomePage" state = {state}><a class="nav-link ">
                            <i class="bi bi-grid"></i>
                            <span>Dashboard</span>
                        </a>
                        </Link>
                    </li>


                    <li class="nav-item">
                    <Link to="/OrderApproval" state = {state}><a class="nav-link collapsed" href="users-profile.html">
                            <i class="bi bi-person"></i>
                            <span>Order Management</span>
                        </a>
                        </Link>
                    </li>

                    <li class="nav-item">
                     <Link to ="/AddProducts" state = {state}>   <a class="nav-link collapsed" href="pages-faq.html">
                            <i class="bi bi-question-circle"></i>
                            <span>Product Management</span>
                        </a>
                        </Link>
                    </li>

                </ul>

            </aside>
        </div>
    );
};

export default SideBarAdmin;