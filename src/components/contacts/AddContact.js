import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {addContact} from "../../actions/contactAction";
import {useHistory} from "react-router-dom";
import shortid from 'shortid'



const AddContact = () => {
    let history= useHistory();
    const dispatch = useDispatch();

    const [ name, setName]= useState("");
    const [ email, setEmail]= useState("");
    const [ phone, setPhone]= useState("");

    const createContact= e =>{
        e.preventDefault();
        const new_contact ={
            id:shortid.generate(),
            name:name,
            phone:phone,
            email:email,
        }
        dispatch(addContact(new_contact));
        history.push("/");
    };
    return (
        <div className="card border-0m shadow">
            <div className="card-header">Add a Contact </div>
            <div className="card-body">
                <form onSubmit={(e)=> createContact(e)}>
                    <div className="form-group">

                        <input type="text"
                        className="form-control"
                        placeholder="Enter Name" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <input type="text"
                        className="form-control"
                        placeholder="Enter Phone Number" 
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <input type="text"
                        className="form-control"
                        placeholder="Enter Email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <button className=" btn  btn-primary" type="submit"> Create Contact</button>
                </form>
            </div>
            
        </div>
    )
}

export default AddContact
