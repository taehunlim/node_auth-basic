import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {Col, Card} from 'react-bootstrap';
import {ToastContainer, toast} from 'react-toastify'
import axios from 'axios';

const Authenticate = ({history}) => {

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        textChange: "Sing In"
    })

    const {email, password, textChange} = formData;

    const handleChange = text => e => {
        setFormData({...formData, [text]: e.target.value})
    }


    const handleSubmit = e => {
        e.preventDefault();

        if(email && password) {
            setFormData({...formData, textChange: "SUBMITTING"})
            axios
                .post("http://localhost:5000/account/authenticate", {
                    email, password
                })
                .then(res => {
                    setFormData({
                        ...formData,
                        email: '',
                        password: "",
                        textChange: "SUBMITTED"
                    })
                    window.setTimeout(() => {
                        history.push('/')
                    })
                })
                .catch(err => {
                    setFormData({
                        ...formData,
                        email: "",
                        password: "",
                        textChange: "Sign In"
                    })
                    toast.error("Email or Password is incorrect")
                })
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
                                SIGN IN
                            </h1>
                            <form
                                className="ml-auto mr-auto w-75 mt-4"
                                onSubmit={handleSubmit}
                            >
                                <div>
                                    <div>
                                        <div>
                                            <button
                                                className="w-100 p-2 border-0 mt-3"
                                                type="submit"
                                            >
                                                <i className='fab fa-google p-2'/>
                                                <span>Sign In with Google</span>
                                            </button>
                                        </div>

                                        <div>
                                            <button
                                                className="w-100 p-2 border-0 mt-3"
                                                type="submit"
                                            >
                                                <i className='fab fa-facebook p-2'/>
                                                <span>Sign In with Facebook</span>
                                            </button>
                                        </div>

                                        <div className="w-100 p-2 border-0 mt-3 bg-primary">
                                            <Link
                                                to="/register"
                                                className="text-light"
                                            >
                                                <i className='fas fa-user-plus p-2'/>
                                                <span>Join In</span>
                                            </Link>
                                        </div>
                                    </div>



                                    <div className='d-block border-bottom mt-5 mb-5'>
                                        <div
                                            className="bg-white m-auto"
                                            style={{
                                                transform: "translateY(50%)",
                                                width: "60%"
                                            }}
                                        >
                                            Or Join In with email or social login
                                        </div>
                                    </div>



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

                                    <button
                                        className="w-100 p-2 border-0 mt-5 mb-5"
                                        type="submit"
                                    >
                                        <i className='fas fa-sign-in-alt p-2'/>
                                        <span>{textChange}</span>
                                    </button>


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

export default Authenticate;
