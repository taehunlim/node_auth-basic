import React, {useState} from 'react';
import {Col} from 'react-bootstrap';

const Register = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        textChange: "JOIN"
    });

    const {name, email, password, confirmPassword, textChange} = formData;

    const handleChange = text => e => {
        setFormData({...formData, [text]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log(name, email, password, confirmPassword)
    }

    console.log(formData)

    return (
        <div>
            <div className="d-flex">
                <Col className="text-center">
                    <h1>
                        JOIN IN
                    </h1>

                    <form
                        onSubmit={handleSubmit}
                    >
                        <div>
                            <input
                                className="w-100 p-2"
                                placeholder="Name"
                                type="text"
                                onChange={handleChange('name')}
                                value={name}
                            />
                            <input
                                className="w-100 p-2 mt-3"
                                placeholder="Email"
                                type="email"
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

                            <button
                                className="w-100 p-2 mt-3 border-0"
                                type="submit"
                            >
                                {textChange}
                            </button>
                        </div>
                    </form>


                </Col>

                <Col
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
