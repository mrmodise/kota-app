import React, {Component} from 'react';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        }
    };

    render() {
        return (
            <div className={"col-lg-6 col-md-offset-3"}>
                <h4>Enter your details below</h4>
                <form action="" >
                    <div className={"form-group"}>
                        <label htmlFor="name">Name</label>
                        <input type="text" name={"name"} className={"form-control"} placeholder={"name"}/>
                    </div>
                    <div className={"form-group"}>
                        <label htmlFor="Email">Email</label>
                        <input type="email" name={"email"} className={"form-control"} placeholder={"email"}/>
                    </div>
                    <div className={"form-group"}>
                        <label htmlFor="address">Address</label>
                        <input type="text" name={"address"} className={"form-control"} placeholder={"address"}/>
                    </div>
                    <div className={"form-group"}>
                        <label htmlFor="postalCode">Postal Code</label>
                        <input type="text" name={"postalCode"} className={"form-control"} placeholder={"postal code"}/>
                    </div>
                    <div className={"form-group"}>
                        <button className={"btn btn-primary"}>Submit</button>
                    </div>
                </form>

            </div>
        );
    }
}

export default ContactData;
