import "./Register.css";
import BasicTextField from "../../components/User/Register/BasicTextField";
import CrendetialsTextField from "../../components/User/Register/CredentialsTextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { NavLink } from "react-router-dom";

const Register = () => {
  return (
    <div className="register">
      <div className="register-content">
        <div className="boxTitleCodenected">
          <h1 className="textTitleCodenected">Lets Get You CodeNected!</h1>
        </div>

        <div className="boxFirstName">
          <BasicTextField name="First Name" />
        </div>

        <div className="boxLastName">
          <BasicTextField name="Last Name" />
        </div>

        <div className="boxGmail">
          <CrendetialsTextField name="Email" />
        </div>

        <div className="boxDOB" placeholder="MM/DD/YYYY">
          <CrendetialsTextField name="Date of Birth" />
        </div>

        <div className="boxPassword">
          <CrendetialsTextField name="Password" />
        </div>

        <div>
          <Box className="signUpButton" sx={{ "& button": { m: 1 } }}>
            <Button variant="contained" size="small" autoCapitalize="off">
              Create Account
            </Button>
          </Box>
        </div>

        <div>
          <h3 className="TextUserHasAccount"> Already have an Account? </h3>
        </div>

        <div className="TextMakeAcc" typeof="h3" component="button">
          <NavLink to="/login">Login Here!</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Register;
