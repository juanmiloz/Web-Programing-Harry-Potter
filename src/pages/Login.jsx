import {Button, TextField} from "@mui/material";

import {useState} from "react";
import {login} from "../firebase/firebase.jsx";
import {useNavigate} from "react-router-dom";

const Login = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const changeEmail = (e) => {
        if(e.target.id === "emailTextField"){
            setEmail(e.target.value)
        }else if(e.target.id === "passwordTextField"){
            setPassword(e.target.value)
        }
    }

    const submitInfo = () => {
        login(email, password).then((res)=>{
            //TODO Implementar la logica del logueado
            if(res){
                console.log("logueado")
                navigate("/home/characters")
            }else{
                console.log("malo")
            }
        })

    }


    return (
        <div className={"flex justify-center items-center w-screen h-screen bg-center bg-cover"} style={{ backgroundImage: `url('images/LoginImage.jpg')` }}>
            <div className={'flex flex-col bg-[#F2DE79] rounded-lg p-5'}>
                <div className="flex justify-center font-bold text-[#0D0C0C]">
                    Login
                </div>
                <div className={'mt-5'}>
                    <TextField
                        required
                        id="emailTextField"
                        label="Email"
                        onChange={changeEmail} 
                    />
                </div>
                <div className={'mt-5'}>
                    <TextField
                        id="passwordTextField"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        onChange={changeEmail}
                    />
                </div>
                <div className={'flex justify-center mt-4'}>
                    <Button variant="contained" onClick={submitInfo}>login</Button>
                </div>

            </div>
        </div>
    );
};

export default Login;