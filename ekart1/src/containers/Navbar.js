import { Link, BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import Dashboard from './Dashboard';
import Login from './Login';
import Register from './Register';
import Contact from '../components/Contact';
import { connect } from 'react-redux';
import { logout } from '../actions/User';
import { bindActionCreators } from 'redux';
import Home from '../components/Home';
import Products from '../components/Products';
import ProductDetails from '../components/ProductDetails';
import Signup from '../components/Signup';
import '../components/Navbar.css';
import Cart from '../components/Cart';

function Navbar(props) {
    const navigate = useNavigate();
    console.log("Navbar Token avilable ", props.token);
    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">EKart-1</Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="mynavbar">
                        <ul className="navbar-nav me-auto">

                            {/* here we are written contional statement for disply and hide  */}

                            {props.token ? <><li className='nav-item'>
                                <Link className='nav-link' onClick={logout}>Logout</Link></li>
                                <li className='nav-item'><Link className='nav-link' to="/cart"><i className='fa  fa-shopping-cart v-cartIcon'></i></Link></li></> : <>

                                <li className="nav-item">
                                    <Link className="nav-link" to="/login">Login</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/register">Register</Link>
                                </li>   </>}

                            {/* condition end */}
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact_us">Contact Us</Link>
                            </li>
                            {/* <li className="nav-item">
                                    <Link className="nav-link" to="/add_product">Add Product</Link>
                                </li> */}
                            {/* <li className="nav-item">
                                    <Link className="nav-link" to="/signup">SignUp</Link>
                                </li> */}
                        </ul>
                        
                        {/* <form className="d-flex">
                            <input className="form-control me-2" type="text" placeholder="Search"></input>
                            <button className="btn btn-primary" type="button">Search</button>
                        </form> */}
                    </div>
                </div>
            </nav>

            <Routes>
                <Route path='/' element={<Home></Home>}></Route>
                <Route path='/register' element={<Register></Register>}></Route>
                <Route path='/login' element={<Login></Login>}></Route>
                <Route path='/contact_us' element={<Contact></Contact>}></Route>
                <Route path='/dahsboard' element={<Dashboard></Dashboard>}></Route>
                <Route path='/productdetails' element={<ProductDetails></ProductDetails>}></Route>
                <Route path='/cart' element={<Cart></Cart>}></Route>

                {/* <Route path='/logout' element={<Logout></Logout>}></Route> */}
                {/* <Route path='/add_product' element={<Products></Products>}></Route> */}
                {/* <Route path='/signup' element={<Signup></Signup>}></Route> */}
            </Routes>

        </>
    )
}

export default connect((appState) => {
    console.log("appState", appState);
    return { token: appState.accessToken }
}, (dispatch) => {
    return bindActionCreators({ logout: logout }, dispatch)
})(Navbar);