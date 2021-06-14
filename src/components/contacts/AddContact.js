import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { addContact } from '../../store'

const AddContact = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const craeteContact = (e) => {
        e.preventDefault();
        console.log(name, phone, email)
        const new_contact = {
            name: name,
            phone: phone,
            email: email,
        };
        dispatch(addContact(new_contact));
    };

    return (
        <div className="card border-0 shadow">
            <div className="card-header">Add a Contact</div>
            <div className="card-body">
                <form onSubmit={(e) => craeteContact(e)}>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Your Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Your Phone Number"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Your E-mail Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="pt-2">
                        <button className="btn btn-primary" type="submit">
                            Create Contact
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddContact
