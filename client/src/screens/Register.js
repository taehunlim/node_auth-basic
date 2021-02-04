import React, {useState} from 'react';
import {Col, Card} from 'react-bootstrap';
import {ToastContainer, toast} from 'react-toastify'
import axios from 'axios';
import {Link} from "react-router-dom";

const Register = () => {

    const [formData, setFormData] = useState({
        title: "",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        acceptTerms: false,
        textChange: "JOIN"
    });
    const [agree, setAgree] = useState(false)

    const {title, firstName, lastName, email, password, confirmPassword, acceptTerms, textChange} = formData;

    const handleChange = text => e => {
        setFormData({...formData, [text]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault();

        if( title && firstName && lastName && email && password ) {
            if( password === confirmPassword ) {
                setFormData({...formData, textChange: "SUBMITTING"})
                axios
                    .post("http://localhost:5000/account/register", {
                        title, firstName, lastName, email, password, confirmPassword, acceptTerms:true
                    })
                    .then(res => {
                        setFormData({
                            ...formData,
                            title: "",
                            firstName: "",
                            lastName: "",
                            email: "",
                            password: "",
                            confirmPassword: "",
                            acceptTerms: false,
                            textChange: "SUBMITTED"
                        })
                        toast.success(res.data.message)
                    })
                    .catch(err => {
                        setFormData({
                            ...formData,
                            title: "",
                            firstName: "",
                            lastName: "",
                            email: "",
                            password: "",
                            confirmPassword: "",
                            acceptTerms: false,
                            textChange: "JOIN"
                        })
                    })
            }
            else {
                toast.error("Please Check the Confirm Password")
            }
        }
        else {
            toast.error("Please fill all fields ")
        }
    }

    return (

        <div>
            <ToastContainer/>
            <div className="d-flex">
                <Col className="text-center mt-5">
                    <Card>

                        <Card.Body className="mt-5">
                            <h1>
                                JOIN IN
                            </h1>
                            <form
                                className="ml-auto mr-auto w-75 mt-4"
                                onSubmit={handleSubmit}
                            >
                                <div>
                                    <input
                                        className="w-100 p-2"
                                        placeholder="Title"
                                        type="text"
                                        onChange={handleChange('title')}
                                        value={title}
                                    />
                                    <input
                                        className="w-100 p-2 mt-3"
                                        placeholder="First Name"
                                        type="text"
                                        onChange={handleChange('firstName')}
                                        value={firstName}
                                    />
                                    <input
                                        className="w-100 p-2 mt-3"
                                        placeholder="Last Name"
                                        type="text"
                                        onChange={handleChange('lastName')}
                                        value={lastName}
                                    />
                                    <input
                                        className="w-100 p-2 mt-3"
                                        placeholder="Email"
                                        type='email'
                                        onChange={handleChange('email')}
                                        value={email}
                                    />
                                    <input
                                        className="w-100 p-2 mt-3"
                                        placeholder="Password"
                                        type="password"
                                        onChange={handleChange('password')}
                                        value={password}
                                    />
                                    <input
                                        className="w-100 p-2 mt-3"
                                        placeholder="Confirm Password"
                                        type="password"
                                        onChange={handleChange('confirmPassword')}
                                        value={confirmPassword}
                                    />

                                    <div className="d-flex align-items-center mt-3 mb-3">

                                        <input
                                            type="checkbox"
                                            onClick={() => setAgree(!agree)}
                                        />
                                        <label className="mb-0 ml-2">Accept privacy policy and terms</label>
                                    </div>


                                    <button
                                        className="w-100 p-2 border-0"
                                        type="submit"
                                        disabled={!agree}
                                    >
                                        <i className='fas fa-user-plus p-2'/>
                                        <span>{textChange}</span>
                                    </button>

                                    <div className='d-block border-bottom mt-4 mb-4'>
                                        <div
                                            className="bg-white m-auto"
                                            style={{
                                                transform: "translateY(50%)",
                                                width: "60%"
                                            }}
                                        >
                                            Or Sign In with email or social login
                                        </div>
                                    </div>

                                    <div className="w-100 p-2 border-0 mt-5 mb-5 bg-primary">
                                        <Link
                                            to="/authenticate"
                                            className="text-light"
                                        >
                                            <i className='fas fa-sign-in-alt p-2'/>
                                            <span>Sign In</span>
                                        </Link>
                                    </div>
                                </div>
                            </form>
                        </Card.Body>
                    </Card>
                </Col>

                <Col
                    className="d-lg-block d-none"
                    style={{
                        backgroundColor: "black",
                    }}
                >

                </Col>
            </div>
        </div>
    );
};

export default Register;
