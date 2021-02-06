import React, {useState} from 'react';
import {Card, Col} from "react-bootstrap";
import {ToastContainer, toast} from 'react-toastify'
import {Link} from "react-router-dom";
import axios from "axios";

const ForgotPassword = () => {

    const [formData, setFormData] = useState({
        email: "",
        textChange: "Find password"
    })

    const {email, textChange} = formData;

    const handleChange = text => e => {
        setFormData({...formData, [text]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault();

        if (email) {
            axios
                .post("http://localhost:5000/account/forgot-password", {email, textChange: "Submitting"})
                .then(res => {
                    setFormData({
                        ...formData,
                        email: "",
                        textChange: "Find password"
                    })

                    toast.success(res.data)
                })
                .catch(err => {
                    setFormData({
                        ...formData,
                        email: "",
                        textChange: "Find password"
                    })
                    toast.error("Please check your email for password reset")
                })
        }

        else {
            toast.error("Please fill email fields")
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
                                Find Password
                            </h1>
                            <form
                                className="ml-auto mr-auto w-75 mt-4"
                                onSubmit={handleSubmit}
                            >
                                <div>
                                    <input
                                        className="w-100 p-2 mt-3"
                                        placeholder="Email"
                                        type="email"
                                        onChange={handleChange("email")}
                                        value={email}
                                    />

                                    <button
                                        className="w-100 p-2 border-0 mt-3"
                                        type="submit"
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
                                            If you know your password, Sign In with email or social log in
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

export default ForgotPassword;
