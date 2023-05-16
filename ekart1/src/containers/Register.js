import { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { bindActionCreators } from "redux";
import { register } from "../actions/User";
// import { useFormik } from 'formik';

function Register(props) {
    const navigate = useNavigate()
    const [registerDetails, setRegisterDetails] = useState(
        {
            username: "",
            password: "",
            email: ""
        }
    );
    // calling dash board  directly  here need ask doubt
    if (props.token) {
        // console.log("i am in dashboard")
        console.log(props.token);
        navigate("/dahsboard");
    }
    
    const updateValues = (event) => {
        var value = event.target.value;
        var name = event.target.name;
        console.log("update Data",);
        setRegisterDetails({ ...registerDetails, [name]: value });
    }
    const registerUser = (event) => {
        event.preventDefault();
        console.log(registerDetails);
        props.register(registerDetails);
    }
    return (
        <>
            <div className="container mt-3">
                <div className='row'>
                    <div className="col col-md-3 mt-3"></div>

                    <div className='col col-md-6 border border-info p-5 rounded-5 '>
                        <h2 className="text-primary">Register Here</h2>
                        <form className=" ">
                            <div className="mb-3 mt-3">
                                <label for="username">UserName:</label>
                                <input onChange={updateValues} type="text" className="form-control" id="username" placeholder="Enter User Name" name="username" required />
                            </div>
                            <div className="mb-3 mt-3">
                                <label for="email">Email:</label>
                                <input onChange={updateValues} type="email" className="form-control" id="email" placeholder="Enter Email" name="email" required />
                            </div>
                            <div className="mb-3">
                                <label for="pwd">Password:</label>
                                <input onChange={updateValues} type="password" className="form-control" id="pwd" placeholder="Enter Password" name="password" required />
                            </div>
                            <div className="form-check mb-3">
                                <label className="form-check-label">
                                    <h5 className="nav-link" onClick={() => navigate("/login")}>I Have an Account : <b className="text-primary" style={{ cursor: "pointer" }}>Login Here</b></h5>
                                </label>
                            </div>
                            <button onClick={registerUser} type="submit" className="btn btn-primary">Register</button>
                        </form>
                    </div>

                    <div className="col col-md-3 mt-3"></div>
                </div>
            </div>
        </>
    )
}
//export default Register;
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ register: register }, dispatch);
}
function mapStateToProps(appState) {
    console.log("AppState Token ", appState);
    return { token: appState.accessToken }
}
export default connect(mapStateToProps, mapDispatchToProps)(Register);

// export default connect((appState) => {
//     console.log("appState", appState);
//     return { token: appState.accessToken };
// }, mapDispatchToProps)(Register);