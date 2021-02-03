import React, {useState, useEffect} from 'react';
import {Col, Card} from 'react-bootstrap';
import {ToastContainer, toast} from 'react-toastify'
import axios from 'axios';

const Verification = ({match, history}) => {

    const [formData, setFormData] = useState({
        token: ""
    });

    useEffect(() => {
        let token = match.params.token;

        if(token) {
            setFormData({...formData, token})
        }
    }, [match.params])

    const {token} = formData;

    const handleSubmit = e => {
        e.preventDefault();
        axios
            .post("http://localhost:5000/account/verify-email", {
                token
            })
            .then(res => {
                setFormData({
                    ...formData
                })

                toast.success(res.data.message)
                window.setTimeout(() => {
                    history.push('/')
                }, 5500)
            })
            .catch(err => {
                toast.error("Verification failed")
            })
    }

    return (
        <div>
            <ToastContainer/>
            <div className="d-flex justify-content-center">
                <div className="text-center mt-5 w-75">
                    <Card>

                        <Card.Body>
                            <h1>
                                Welcome
                            </h1>
                            <form
                                className="mt-4"
                                onSubmit={handleSubmit}
                            >
                                <div>
                                    <button
                                        className="w-100 p-2 border-0"
                                        type="submit"
                                    >
                                        Activate your account
                                    </button>
                                </div>
                            </form>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Verification;
