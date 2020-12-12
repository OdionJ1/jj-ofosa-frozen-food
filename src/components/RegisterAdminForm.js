import React, { Component } from 'react'
import './css/registerAdminForm.scss'

import { auth, createAdminProfileDocument } from '../firebase/firebaseUtils'

export default class RegisterAdminForm extends Component {
    constructor(){
        super()
        this.state= {
            name: "",
            email: "",
            phoneNumber: "",
            password: "",
            confirmPassword: "",
            registered: false
        }
    }

    handleChange = (event) =>{
        let {name, value} = event.target;
        this.setState({ [name]: value})
    }

    handleSubmit = async (event) =>{
        event.preventDefault()
        let {name, email, phoneNumber, password, confirmPassword} = this.state;

        if(password !== confirmPassword){
            alert("Passwords don't match");
            return;
        }

        try{
            const { user } = await auth.createUserWithEmailAndPassword(email, password)

            await createAdminProfileDocument(user, {name, phoneNumber})
            this.setState({registered: true})
            this.setState({
                name: "",
                email: "",
                phoneNumber: "",
                password: "",
                confirmPassword: ""
            })
        } catch(error){
            console.log(error)
        }
        
    }

    render() {
        let {name, email, phoneNumber, password, confirmPassword} = this.state;
        return (
            <form className="registerAdminForm" onSubmit={this.handleSubmit}>
                <div className="group">
                    <input className="form-input" value={name} name="name" type="text" onChange={this.handleChange} required/>
                    <label className={`${name.length? 'shrink':''} form-input-label `}>Name</label>
                </div>
                <div className="group">
                    <input className="form-input" value={email} name="email" type="email" onChange={this.handleChange} required/>
                    <label className={`${email.length? 'shrink':''} form-input-label `}>Email</label>
                </div>
                <div className="group">
                    <input className="form-input" value={phoneNumber} name="phoneNumber" type="number" onChange={this.handleChange} required/>
                    <label className={`${phoneNumber.length? 'shrink':''} form-input-label`}>Phone Number</label>
                </div>
                <div className="group">
                    <input className="form-input" value={password} name="password" type="password" onChange={this.handleChange} required/>
                    <label className={`${password.length? 'shrink':''} form-input-label`}>Password</label>
                </div>
                <div className="group">
                    <input className="form-input" value={confirmPassword} name="confirmPassword" type="password" onChange={this.handleChange} required/>
                    <label className={`${confirmPassword.length? 'shrink':''} form-input-label`}>Confirm Password</label>
                </div>
                {this.state.registered?
                    <button className="registeredButton" disabled>Registered</button>
                    :
                    <button className="registerButton">Register</button>
                }
                
            </form>
        )
    }
}
