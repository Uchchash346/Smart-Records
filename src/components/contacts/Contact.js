import React from 'react'
import Avatar from "react-avatar";
import './Contact.css'

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
                <a href="#">
                    <span className="material-icons edit-icon-area ">
                        edit
                    </span>
                </a>
                <a href="#">
                    <span
                        className="material-icons text-danger">
                        remove_circle
                    </span>
                </a>
            </td>
        </tr>
    )
}

export default Contact