import React, { useEffect, useState } from 'react'
import axios from "axios"
import CityData from './cityData';

const navbar = () => {

    const [city, setCity] = useState("");
    const [userData, setUserData] = useState([])

    useEffect(() => {
        const fetchData = async () => {

            try {

                if (city.length === 0) {
                    const response = await axios.get(`http://localhost:3000/student_details`, {
                        headers: {
                            "content-type": "application/json"
                        }
                    });
                    setUserData(response.data)
                }
                else {

                    const response = await axios.get(`http://localhost:3000/student_details/${city}`, {
                        headers: {
                            "content-type": "application/json"
                        }
                    });
                    setUserData(response.data)
                }
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, [city]);


    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <li className="nav-item dropdown">

                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    CityName
                                </a>

                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" onClick={() => { setCity("Gorakhpur") }}>Gorakhpur</a></li>
                                    <li><a className="dropdown-item" onClick={() => { setCity("Ahmedabad") }}>Ahmedabad</a></li>
                                    <li><a className="dropdown-item" onClick={() => { setCity("Mumbai") }}>Mumbai</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <CityData userData={userData} />
        </div>
    )
}

export default navbar