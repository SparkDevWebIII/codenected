import "./Login.scss";
import CrendetialsTextField from "../../components/User/Register/CredentialsTextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";

const login = () => {
  return (
    <div>
      <div className="login">
        <div className="login-content">
          <h1 className="textTitleWelcomeBack">Welcome Back!</h1>
          <div className="boxLogginEmail">
            <CrendetialsTextField name="Email" />
          </div>

          <div className="boxLogginPassword">
            <CrendetialsTextField name="Password" />
          </div>

          <div>
            <Box className="loggingButton" sx={{ "& button": { m: 1 } }}>
              <Button variant="contained" size="small" autoCapitalize="off">
                Login
              </Button>
            </Box>
          </div>
          <div className="outLinks">
            <div className="TextLinkSignUp">
              <h3 className="TextUserDoesntAccount">
                {" "}
                Don't have an account?{" "}
              </h3>
              <NavLink to="/Register">Sign Up!</NavLink>
            </div>

            <div className="TextLinkGetHelp">
              <h3 className="TextUserLoggingProblem">
                Having trouble logging in?
              </h3>
              <NavLink>Get Help!</NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default login;
