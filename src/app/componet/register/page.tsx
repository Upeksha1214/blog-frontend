'use client';
import React, { ChangeEvent, useState } from 'react'
import { register } from '../../services/registerService'
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";




export default function page() {

    const [fullName, setFullName,] = useState("");
    const [userName, setUserName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");



    const registerHandler = async () => {

        const signUpData = {
            fullName: fullName,
            username: userName,
            phoneNumber: phoneNumber,
            email: email,
            password: password
          };
      
          try {
            const response = await register(signUpData);
            // Handle the response as needed
            console.log(response);
      
            // Clear the input fields after successful registration
            setFullName('');
            setUserName('');
            setPhoneNumber('');
            setEmail('');
            setPassword('');
          } catch (error) {
            // Handle the registration error
            console.error(error);
          }
        
    }

    console.log(userName)
    console.log(userName)

    return (
        <div>
            <section className="vh-100 bg-image">
                <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                    <div className="container h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                                <div className="card border-radius: 15px;">
                                    <div className="card-body p-5">
                                        <h2 className="text-uppercase text-center mb-5">Create an account</h2>

                                        <form>

                                            <div className="form-outline mb-4">
                                                <input type="text" id="form3Example1cg" className="form-control form-control-lg"
                                                    value={fullName} onChange={(e) => setFullName(e.target.value)} 
                                                    pattern='/^[a-zA-Z0-9_]{3,}$/' title='The name is invalid'/>
                                                <label className="form-label" >Your Name</label>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <input type="text" id="form3Example1cg" className="form-control form-control-lg"
                                                    value={userName} onChange={(e) => setUserName(e.target.value)}
                                                    pattern='/^[a-zA-Z0-9_]{3,}$/' title='The name is invalid'   />
                                                <label className="form-label">User Name</label>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <input type="email" id="form3Example3cg" className="form-control form-control-lg"
                                                    value={email} onChange={(e) => setEmail(e.target.value)} 
                                                    pattern='/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]+$/'
                                                    title='The email is invalid'/>
                                                <label className="form-label" >Your Email</label>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <input  id="form3Example3cg" className="form-control form-control-lg"
                                                    value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} 
                                                    pattern='^(\+94)?[0-9]{9}$' title='The phonenumber is invalid' />
                                                <label className="form-label" >Phone Number</label>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <input type="password" id="form3Example4cg" className="form-control form-control-lg"
                                                    value={password} onChange={(e) => setPassword(e.target.value)}
                                                    pattern="[a-z0-9]{1,15}" title="Password should be digits (0 to 9) or alphabets (a to z)." />
                                                <label className="form-label" >Password</label>
                                            </div>

                                            {/* <div className="form-outline mb-4">
                                                <input type="password" id="form3Example4cdg" className="form-control form-control-lg"
                                                value={password} onChange={(e) => setPassword(e.target.value)} />
                                                <label className="form-label" >Repeat your password</label>
                                            </div> */}

                                            {/* <div className="form-check d-flex justify-content-center mb-5">
                                                <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3cg" />
                                                <label className="form-check-label" >
                                                    I agree all statements in <a href="#!" className="text-body"><u>Terms of service</u></a>
                                                </label>
                                            </div> */}

                                            <div className="d-flex justify-content-center">
                                                <button type="submit"
                                                    className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                                                    onClick={registerHandler}>Register</button>
                                                {/* <ToastContainer
                                                    position="top-center"
                                                    autoClose={6000}
                                                    hideProgressBar={false}
                                                    newestOnTop={false}
                                                    closeOnClick
                                                    rtl={false}
                                                    pauseOnFocusLoss
                                                    draggable
                                                    pauseOnHover
                                                    theme="light"
                                                /> */}

                                            </div>

                                            <p className="text-center text-muted mt-5 mb-0">Have already an account? <a href="http://localhost:3000/"
                                                className="fw-bold text-body"><u>Login here</u></a></p>

                                        </form>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

