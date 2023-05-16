import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  const [registerDetails, setRegisterDetails] = useState({
    username: '',
    email: '',
    password: ''
  })
  
  const [error, setError] = useState(false)

  const updateValues = (e) => {
    var value = e.target.value;
    var name = e.target.name;
    setRegisterDetails({ ...registerDetails, [name]: value });
  }
  const registerUser = (event) => {
    event.preventDefault();

    if (registerDetails.username.length === 0 || registerDetails.email.length === 0 || registerDetails.password.length === 0) {
      setError(true)
    } else {
      console.log("signup form ", registerDetails);
    }
  }
  return (
    <>
      <div className="container mt-3">
        <div className='row'>
          <div className="col col-md-3 mt-3"></div>
          <div className='col col-md-6 border border-info p-5 rounded-5 '>
            <h2 className="text-primary">Signup Here</h2>
            <form>
              <div className="mb-3 mt-3">
                <label for="username"><b>UserName: <span className='text-danger'>*</span></b></label>
                <input onChange={updateValues} type="text" className="form-control" id="username" placeholder="Enter User Name" name="username" />
                {error && registerDetails.username.length <= 5 ? <label className='text-danger pt-2'>Username can not be less then 5 characters</label> : ""}

              </div>
              <div className="mb-3 mt-3">
                <label for="email"><b>Email: <span className='text-danger'>*</span></b></label>
                <input onChange={updateValues} type="email" className="form-control" id="email" placeholder="Email: abcd@gmail.com" name="email" />
                {error && registerDetails.email.length <= 5 ? <label className='text-danger pt-2'>Please Enter Valid Email, Ex: abcd@gmail.com</label> : ""}
              </div>
              <div className="mb-3">
                <label for="pwd"><b>Password: <span className='text-danger'>*</span></b></label>
                <input onChange={updateValues} type="password" className="form-control" id="pwd" placeholder="Enter Password" name="password" />
                {error && registerDetails.password.length <= 5 ? <label className='text-danger pt-2'>password can not be less then 5 characters</label> : ""}
              </div>
              <div className="form-check mb-3">
                <label className="form-check-label">
                  <Link className="nav-link" to="/login">I Have an Account : <b className="text-primary" style={{ cursor: "pointer" }}>Login Here</b></Link>
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

export default Signup
