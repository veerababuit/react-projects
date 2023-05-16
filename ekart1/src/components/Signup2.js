import { useFormik } from 'formik'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Signup2 = () => {
  const [registerDetails, setRegisterDetails] = useState({
    username: '',
    email: '',
    password: ''
  })
  const [error, setError] = useState(false)

  const updateValues = (e) => {
    var value = e.target.value;
    var name = e.target.name;
    setRegisterDetails({ ...registerDetails, [name]: value })
  }

  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: ''
    },
    validate: (values) => {
      let errors = {}
      if (!values.username) {
        errors.username = "Username is Required";
      }
      if (!values.email) {
        errors.email = " Email id is Required";
      }
      if (!values.password) {
        errors.password = "Password is Required"
      }
      return errors;
    }
  })

  const registerUser = (event) => {
    event.preventDefault();
    if (registerDetails.username.length <= 5) {
      alert(" User name must be 5 characters")
    }
    else if (registerDetails.password.length <= 5) {
      alert("Password must be 5 characters")
    }
    else {
      console.log("Signup ", registerDetails);
    }

    if ((updateValues.username).length == 0) {
      setError(true)
    }
    console.log("signup form ", registerDetails);

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
                <label for="username">UserName:</label>
                <input onChange={updateValues} type="text" className="form-control" id="username" placeholder="Enter User Name" name="username" />
                {formik.username <= 5 ? <p className='text-bg-danger'>UserName name must be 5 characters </p> : null}
              </div>
              <div className="mb-3 mt-3">
                <label for="email">Email:</label>
                <input onChange={updateValues} type="email" className="form-control" id="email" placeholder="Enter Email" name="email" />
                {formik.errors.email ? <div>{formik.errors.email}</div> : null}
              </div>
              <div className="mb-3">
                <label for="pwd">Password:</label>
                <input onChange={updateValues} type="password" className="form-control" id="pwd" placeholder="Enter Password" name="password" />
                {formik.errors.password ? <div>{formik.errors.password}</div> : null}
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

export default Signup2
