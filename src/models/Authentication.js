import React, { useState } from 'react'
import { Link } from "react-router-dom";
import trackerApi from "../api/tracker";
import { useNavigate } from 'react-router-dom';

const Authentication = ({ name, type, url }) => {
    const [credentials, setCredentials] = useState({ email: "", password: "" });
    const { email, password } = credentials;
    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await trackerApi.post("/signup", { email, password })
        if (response.data.token) {
            localStorage.setItem("token", response.data.token)
            navigate("/hike")
        }
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    return (
        <div className='bimg'>

            <div className='container' id='dibba'>
                <form className='my-3' onSubmit={handleSubmit}>
                    <h3 className='my-3'>{name}</h3>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" onChange={onChange} id="email" name='email' aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" onChange={onChange} id="password" name='password' />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                <Link style={{ textDecoration: "none" }} to={url}>{type}</Link>

            </div>
        </div>
    )
}

export default Authentication