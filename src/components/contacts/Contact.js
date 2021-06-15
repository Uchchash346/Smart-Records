import React from 'react'
import Avatar from "react-avatar";
import './Contact.css'
import { Link } from "react-router-dom";

const Contact = ({ contact }) => {
    const { name, phone, email, id } = contact;
    return (
        <tr>
            <td>
                <div className="custom-control custom-checkbox">
                    <input
                        id="selectAll"
                        type="checkbox"
                        className="custom-control-input"
                    />
                    <label
                        className="custom-control-label"
                    ></label>
                </div>
            </td>
            <td>
                <Avatar className="mr-2 avatar-icon" name={name} size="45" round={true} />{name}
            </td>
            <td>{phone}</td>
            <td>{email}</td>
            <td className="actions">
                <Link to={`/contacts/edit/${id}`}>
                    <span className="material-icons edit-icon-area ">
                        edit
                    </span>
                </Link>
                <Link to="#">
                    <span
                        className="material-icons text-danger">
                        remove_circle
                    </span>
                </Link>
            </td>
        </tr>
    )
}

export default Contact
