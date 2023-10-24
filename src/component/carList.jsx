import React from 'react'

export default function carList({ carData }) {
    return (
        <div>
            <h1>Car List</h1>
            {carData.map((item, index) => (
                <div style={{ marginTop: "20px" }} key={index}>
                    <p><strong>CarName:-</strong>{item.name}</p>
                    <p><strong>CarModel:-</strong>{item.model}</p>
                    <p><strong>CarQuantity:-</strong>{item.quantity}</p>
                </div>
            ))}

        </div>
    )
}
