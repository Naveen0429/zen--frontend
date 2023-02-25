import { Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "../../global";

import "./login.css";


export function Login() {
    const navigate = useNavigate();
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[invalidErrorMessage, setInvalidErrorMessage] = useState("");

    const onEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const onPasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const onLogin = async (e) => {
        e.preventDefault();
        var data = [{
            email: email,
            password: password
        }];
        const result = await fetch(`${API}/users/login`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {"content-type": "application/json"}
        }).then(response => response.json()
        ).catch((error) => {
            console.log("error", error)
        })

        // console.log(result);

        if(result.message === "Successful Login") {
            localStorage.setItem("user", JSON.stringify({token: result.token, userName: result.name, userId : result.id}));
            navigate("/dashboard");
        } else {
            setInvalidErrorMessage(result.message);
        }
    };

    return (
      <div className="login">
        
        <form className="loginContent" onSubmit={(e) => onLogin(e)}>
            <div className="logo">
                <div className="logoText">
                    <span>ZEN DASHBOARD</span>
                    STUDENT
                </div>
            </div>
            {invalidErrorMessage && <div className="invalidErrorMessage">{invalidErrorMessage}</div>}
            <div className="emailWrapper">
                <label htmlFor="email">Email</label>
                <input id="email" type="text" onChange={(e) => onEmailChange(e)} required/>
            </div>
            <div className="passwordWrapper">
                <label htmlFor="password">Password</label>
                <input id="password" type="password" onChange={(e) => onPasswordChange(e)} required/>
            </div>
            <Button type="submit" variant="contained">Login</Button>
            <div className="noAccount">Don't have an account? <span onClick={() => navigate("/signup")}>&nbsp;SignUp</span></div>
            <div className="forgotPasswordLink"> 
                <span onClick={() => navigate("/forgotpassword")}>&nbsp;Forgotten Password ?</span>
            </div>
        </form>
        
        <img src="https://camo.githubusercontent.com/dfc3174c7638db2e456bbc0d98a920d5f7346726251d4c7be9ab181738cd890c/68747470733a2f2f74342e667463646e2e6e65742f6a70672f30312f33352f39322f38352f3336305f465f3133353932383539375f785535457a4b713676704f65585058357673624934387a6656566b53526c72462e6a7067" alt="" />
      </div>
    );
}