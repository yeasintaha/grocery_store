import React from 'react'
import Header from "./Header"

function Complaint_form() {
    return (
        <div className="complaint_form">
            <Header/>
            <div>
                <div className="statement">
                    <h3>Complaint Form</h3>
                    <br/>
                    <p> Please send us details about the incident you would like to report. Our Complaint Center will analyze your complaint and take the appropriate measures in order that the reported situation will not occur at any other time in the future. Please note that- Complaint must be submitted within 24hrs of receiving your products. </p>
                    <br/>

                </div>
                <form action="" method="POST">
                    <div className="date_of_complaints">
                        <label htmlFor="Date of Complaints">Date of complaint</label>
                        <input type="date" placeholder="dd-mm-yyyy" required/>
                    </div>
                    <div className="name">
                        <label htmlFor="Name">Name</label>
                        <input type="text" maxlength="30" required/>
                    </div>
                    <div className="order_info">
                        <label htmlFor="order info">Order Information</label>
                        <input type="text" maxlength="50" required/> 
                    </div>
                    <div className="contact_no">
                        <label htmlFor="contact no">Contact No</label>
                        <input type="number" maxlength="11" required /> 
                    </div>
                    <div className="email_id">
                        <label htmlFor="email">Email ID</label>
                        <input type="email" maxlength="50" required/> 
                    </div>
                    <div className="issue_type">
                        <label htmlFor="issue type">Issue Type</label>
                        <select name="issue" className="issue" required>
                            <option value="0">Choose an Item </option>
                            <option value="1">Product Quality</option>
                            <option value="2">Product Missing</option>
                            <option value="3">Wrong Product Delivered</option>
                            <option value="4">Billing Issue</option>
                            <option value="5">Delivery Other Issue</option>
                            <option value="6">Other</option>
                        </select>
                    </div>
                    <div className="order_location" required>
                        <label htmlFor="order location">Order Location</label>
                        <input type="text"/>
                    </div>
                    <div className="complaint_details">
                        <label htmlFor="complaint details">Complaints Details</label>
                        <input type="text"/>
                    </div>
                    <div className="feedback">
                        <label htmlFor="feedback">Feedback</label>
                        <input type="text"/>
                    </div>
                    <div className="submit">
                        <input type="submit" value="Submit" id="Submit"/>
                    </div>
                </form>

                <div className="terms">
                    <p>Terms & Conditions</p>
                    <ul>
                        <li> We take complaints very seriously and aim to respond to your complaints within 3 working days.</li>
                        <li> All complaints should be addressed to our hotline #16469/This Form should be filled up with all the necessary information.</li>
                        <li>Complaint must be submitted within 24hrs of receiving your products.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Complaint_form;
