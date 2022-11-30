import "../assets/styles/App.css"
import {MDBCard, MDBCardBody, MDBCardTitle, MDBCol, MDBInput, MDBRow, MDBTypography} from "mdb-react-ui-kit";

export default function Registration(): any {
    return (
        <MDBCard>
            <MDBCardBody className="pt-5 pl-5 pr-5">
                <MDBCardTitle>Create your Placeholder Account</MDBCardTitle>
                <br/>
                <MDBRow id="personal-register">
                    <MDBCol size='7'>
                        <form name="register" autoComplete="off">
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
                                       onClick={pwd}></i>
                                </MDBCol>
                                <MDBCol size='4'>
                                    <MDBInput id="password_confirm"
                                              type="password"
                                              maxLength={30}
                                              size="sm"
                                              label="Confirm"
                                              className="form-control">
                                        <i className="far fa-eye-slash postfix text-muted passwd-img"
                                           onClick={pwd}></i>
                                    </MDBInput>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow>
                                <MDBCol size='8'>
                                    <MDBTypography tag="strong" className="fsize11">&nbsp;Use 8 or more characters with
                                        a mix of letters, numbers & symbols.</MDBTypography>
                                </MDBCol>
                            </MDBRow>
                        </form>
                    </MDBCol>
                </MDBRow>
            </MDBCardBody>
        </MDBCard>
    )
};

function pwd(event: any) {
    event.currentTarget.classList.toggle('fa-eye');
}