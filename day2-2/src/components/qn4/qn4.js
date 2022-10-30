import React, { useState } from 'react'

const qn4 = () => {

    const [name, setName] = useState('')
    const [dob, setDob] = useState('')
    const [email, setEmail] = useState('')
    const [contact, setContact] = useState('')
    const [errArr, setErrArr] = useState([{
        nameErr: "",
        dobErr: "",
        emailErr: "",
        contactErr: "",
        aboutErr: ""
    }])

    const onChange = (e) => {
        if (e.target.id == "name") {
            checkName(e.target.value)
        }

        if (e.target.id == "dob") {
            checkDob(e.target.value)
        }

        if (e.target.id == "email") {
            checkEmail(e.target.value)
        }

        if (e.target.id == "contact") {
            checkContact(e.target.value)
        }
    }

    const checkName = (name) => {
        let nameErr = ""
        let pattern = /^([a-zA-Z ]){2,30}$/
        let valid = false

        if (name.trim() == "") {
            nameErr = "Please enter a name"
        } else if (!pattern.test(name)) {
            nameErr = "Please enter a valid name"
        } else {
            valid = true
        }

        setName(name)
        setErrArr({ ...errArr, nameErr })

        return valid
    }

    const checkDob = (dob) => {
        let dobErr = ""
        let valid = false

        if (dob == "") {
            dobErr = "Please enter a date"
        } else if (dob > new Date().toISOString().split("T")[0]) {
            dobErr = "Please enter a valid date"
        } else {
            valid = true
        }

        setDob(dob)
        setErrArr({ ...errArr, dobErr })

        return valid
    }

    const checkEmail = (email) => {
        let emailErr = ""
        let pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
        let valid = false

        if (email.trim() == "") {
            emailErr = "Please enter an email"
        } else if (!pattern.test(email)) {
            emailErr = "Please enter a valid email"
        } else {
            valid = true
        }

        setEmail(email)
        setErrArr({ ...errArr, emailErr })

        return valid
    }

    const checkContact = (contact) => {
        let contactErr = ""
        let pattern = /^\d{10}$/
        let valid = false

        if (contact.trim() == "") {
            contactErr = "Please enter a contact number"
        } else if (!pattern.test(contact)) {
            contactErr = "Please enter a valid contact number with 10 digits"
        } else {
            valid = true
        }

        setContact(contact)
        setErrArr({ ...errArr, contactErr })

        return valid
    }


    const onSubmit = (e) => {
        e.preventDefault()
        if (checkName(name) && checkDob(dob) && checkEmail(email) && checkContact(contact)) {
            alert('The form is submitted');
            setName("")
            setDob("")
            setContact("")
            setEmail("")

        } else {
            alert('Please check the fields again');
        }
    }

    return (
        <div>
            <h2>Qn4</h2>
            <form>
                <h3>Form</h3>
                <label>Name: </label>
                <input type="text" id="name" name="name" onChange={onChange} value={name} />
                <p>{errArr.nameErr}</p>

                <label>Date of Birth: </label>
                <input type="date" id="dob" name="dob" onChange={onChange} max={new Date().toISOString().split("T")[0]} value={dob} />
                <p>{errArr.dobErr}</p>

                <label>Email: </label>
                <input type="text" id="email" name="email" onChange={onChange} value={email} />
                <p>{errArr.emailErr}</p>

                <label>Contact Number: </label>
                <input type="text" id="contact" name="contact" onChange={onChange} value={contact} />
                <p>{errArr.contactErr}</p>

                <button onClick={onSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default qn4