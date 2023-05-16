import { useState } from "react";
import { connect } from "react-redux";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { bindActionCreators } from "redux";
import { login } from "../actions/User";

function Login(props) {
    const navigate = useNavigate();
    const location = useLocation();
    const [loginDetails, setLoginDetails] = useState({
        username: "",
        password: "",
    })

    if (props.token) {
        // console.log("i am in dashboard")
        console.log(" login token : ", props.token);
        navigate("/dahsboard");
    }

    const updateValues = (event) => {
        var value = event.target.value;
        var name = event.target.name;
        setLoginDetails({ ...loginDetails, [name]: value })
    }
    const loginUser = (event) => {
        event.preventDefault();
        console.log(loginDetails);
        props.login(loginDetails)
    }
    return (
        <>
            <div className="container mt-3">
                <div className='row'>
                    <div className="col col-md-3 mt-3"></div>

                    <div className='col col-md-6 border border-info p-5 rounded-5 shadow p-4 mb-4 bg-white'>
                        <h2 className="text-primary">Login Here</h2>
                        <form className=" ">
                            <div className="alert alert-warning">
                                <strong>Hey :  </strong> {location.state != null ? location.state.message : ""}
                            </div>

                            <div className="mb-3 mt-3">
                                <label for="username" className=""><strong>Username:</strong></label>
                                <input onChange={updateValues} type="text" className="form-control" id="username" placeholder="Enter User Name" name="username" />
                            </div>
                            <div className="mb-3">
                                <label for="pwd" className=""><strong>Password:</strong></label>
                                <input onChange={updateValues} type="password" className="form-control" id="pwd" placeholder="Enter Password" name="password" />
                            </div>
                            <div className="form-check mb-3">
                                <label className="form-check-label pe-3 ">
                                    <input className="form-check-input" type="checkbox" name="remember" /> Remember me
                                </label>
                                <label className="form-check-label ps-5">
                                    <a className="nav-link" onClick={() => navigate("/register")}>I Don't Have an Account : <b className="text-primary" style={{ cursor: "pointer" }}>SignUp Here</b></a>
                                </label>
                            </div>
                            <button onClick={loginUser} type="submit" className="btn btn-primary">Login</button>
                        </form>
                    </div>
                    <div className="col col-md-3 mt-3"></div>
                </div>
            </div>
        </>
    )
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ login: login }, dispatch)
}
function mapStateToProps(appState) {
    console.log("App state call : ", appState);
    return { token: appState.accessToken };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);