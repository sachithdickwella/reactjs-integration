import "../assets/styles/App.css"
import {MDBBtn, MDBCard, MDBCardBody, MDBCardTitle, MDBCol, MDBInput, MDBRow, MDBTypography} from "mdb-react-ui-kit";
import React from "react";

class Registration extends React.Component {

    /**
     * @param evt
     */
    passwordImage(evt: any) {
        evt.currentTarget.classList.toggle('fa-eye');
    }

    /**
     * @param id
     */
    passwordInput(id: string) {
        const inputElement = document.getElementById(id) as HTMLInputElement;
        if (inputElement.getAttribute('type') === 'password') inputElement.setAttribute('type', 'text');
        else inputElement.setAttribute('type', 'password');
    }


    next(evt: any) {
        
    }

    signin(evt: any) {

    }

    render() {
        return (
            <MDBCard>
                <MDBCardBody className="pt-5 pl-5 pr-5 pb-5">
                    <MDBRow id="personal-register">
                        <MDBCol size='7' className="ps-5">
                            <MDBCardTitle className="ps-sm-0">Create your Placeholder Account</MDBCardTitle>
                            <br/>
                            <MDBRow>
                                <MDBCol size='4'>
                                    <MDBInput id="fname"
                                              type="text"
                                              maxLength={20}
                                              size="sm"
                                              label="First name"
                                              className="form-control text-capitalize"/>
                                </MDBCol>
                                <MDBCol size='4'>
                                    <MDBInput id="lname"
                                              type="text"
                                              maxLength={30}
                                              size="sm"
                                              label="Last name"
                                              className="form-control text-capitalize"/>
                                </MDBCol>
                            </MDBRow>
                            <br/>
                            <MDBRow>
                                <MDBCol size='8'>
                                    <MDBInput id="email"
                                              type="text"
                                              maxLength={40}
                                              size="sm"
                                              label="Your email address"
                                              className="form-control"/>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow>
                                <MDBCol size='8'>
                                    <MDBTypography tag="strong" className="fsize11">&nbsp;You'll need to confirm
                                        that this email belongs to you.</MDBTypography>
                                </MDBCol>
                            </MDBRow>
                            <br/>
                            <MDBRow>
                                <MDBCol size='4'>
                                    <MDBInput id="password"
                                              type="password"
                                              maxLength={30}
                                              size="sm"
                                              label="Password"
                                              className="form-control"/>
                                    <i className="far fa-eye-slash postfix text-muted passwd-img"
                                       onClick={evt => {
                                           this.passwordImage(evt);
                                           this.passwordInput('password');
                                       }}></i>
                                </MDBCol>
                                <MDBCol size='4'>
                                    <MDBInput id="password-confirm"
                                              type="password"
                                              maxLength={30}
                                              size="sm"
                                              label="Confirm"
                                              className="form-control"/>
                                    <i className="far fa-eye-slash postfix text-muted passwd-img"
                                       onClick={evt => {
                                           this.passwordImage(evt);
                                           this.passwordInput('password-confirm');
                                       }}></i>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow>
                                <MDBCol size='8'>
                                    <MDBTypography tag="strong" className="fsize11">&nbsp;Use 8 or more characters with
                                        a mix of letters, numbers & symbols.</MDBTypography>
                                </MDBCol>
                            </MDBRow>
                            <br/><br/>
                            <MDBRow>
                                <MDBCol size='4'>
                                    <MDBBtn className='textstyle-unset' color='secondary' rippleColor='light'
                                            onClick={this.signin}>Sign in instead</MDBBtn>
                                </MDBCol>
                                <MDBCol size='4'>
                                    <MDBBtn className="align-right textstyle-unset" onClick={this.next}>Next</MDBBtn>
                                </MDBCol>
                            </MDBRow>
                        </MDBCol>
                        <MDBCol size='5'>
                            <img src="assets/imgs/account.png" alt="account" width={300}/>
                        </MDBCol>
                    </MDBRow>
                </MDBCardBody>
            </MDBCard>
        );
    }
}

export default Registration;