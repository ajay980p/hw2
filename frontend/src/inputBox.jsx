import React, { useState } from 'react'

const inputBox = () => {

    const [name, setName] = useState("");
    const [city, setCity] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("working");
    }

    return (
        <div className='container mt-4 m-auto'>

            <div className='col-4 mx-auto'>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Name</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name" required onChange={(e) => setName(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">City</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Enter city" required onChange={(e) => setCity(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary" onClick={() => handleSubmit(e)}>Submit</button>
            </div>
        </div>
    )
}

export default inputBox;