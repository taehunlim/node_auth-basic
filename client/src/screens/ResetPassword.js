import React, {useState, useEffect} from 'react';
import {ToastContainer, toast} from "react-toastify";
import {Card, Col} from "react-bootstrap";
import {Link} from "react-router-dom";
import axios from "axios";

const ResetPassword = ({match}) => {

    const [formData, setFormData] = useState({
        password: "",
        confirmPassword: "",
        token: "",
        textChange: "Reset Password"
    })

    useEffect(() => {
        let token = match.params.token;

        if(token) {
            setFormData({...formData, token})
        }
    }, [match.params])

    const {token, password, confirmPassword, textChange} = formData;

    const handleChange = text => e => {
        setFormData({...formData, [text]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault();

        if(password && confirmPassword) {
            if(password === confirmPassword) {
                axios
                    .put("http://localhost:5000/account/reset-password", {
                        password, confirmPassword, token, textChange
                    })
                    .then(res => {
                        setFormData({
                            ...formData,
                            password: "",
                            confirmPassword: "",
                            token: ""
                        })
                        toast.success("successful change password, you can now log in")
                    })
                    .catch(err => {
                        setFormData({
                            ...formData,
                            password: "",
                            confirmPassword: "",
                            token: ""
                        })
                        toast.error('Invalid token')
                    })
            }
            else{
                toast.error("Please check confirm password")
            }
        }
        else{
            toast.error("Please fill all field")
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
                                        placeholder="New Password"
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


                                    <button
                                        className="w-100 p-2 border-0 mt-3"
                                        type="submit"
                                    >
                                        <i className='fas fa-user-plus p-2'/>
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

export default ResetPassword;
