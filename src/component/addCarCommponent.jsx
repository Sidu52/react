import React, { useState } from 'react'

function addCarCommponent({ addCarDetail }) {
    const [form, setForm] = useState({ name: "", model: "", quantity: null });

    //Add Car Details
    const addData = (e) => {
        e.preventDefault();
        addCarDetail(form);
        setForm({ name: '', model: '', quantity: 0 });
    };
    return (
        <div>
            <h1>Add Car Form</h1>
            <form onSubmit={(e) => addData(e)}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" name='name' value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
                </div>
                <div>
                    <label htmlFor="model">Model</label>
                    <input type="text" name='model' value={form.model} onChange={(e) => setForm({ ...form, model: e.target.value })} required />
                </div>
                <div>
                    <label htmlFor="number">Quantity</label>
                    <input type="number" name='number' value={form.quantity} onChange={(e) => setForm({ ...form, quantity: e.target.value })} required />
                </div>
                <button type='Submit'>Submit</button>
            </form>
        </div>
    )
}
export default addCarCommponent