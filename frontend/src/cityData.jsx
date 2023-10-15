import React from 'react'

const cityData = ({ userData }) => {

    let num = 0;

    return (
        <div className='container col-6'>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Sr.No</th>
                        <th scope="col">Name</th>
                        <th scope="col">City</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        userData.map((data) => (
                            <tr key={data.id}>
                                <th scope="row">{num = num + 1}</th>
                                <td>{data.name}</td>
                                <td>{data.city}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default cityData