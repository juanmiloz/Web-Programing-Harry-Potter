import {Button, FormControl, TextField} from "@mui/material";
import {useDispatch} from "react-redux";
import {useState} from "react";
import {login} from "../firebase/firebase.jsx";
import {useNavigate} from "react-router-dom";
import {loginDispatch} from "../redux/reducers/authSlice.js"

const Login = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch()

    const changeEmail = (e) => {
        if(e.target.id === "emailTextField"){
            setEmail(e.target.value)
        }else if(e.target.id === "passwordTextField"){
            setPassword(e.target.value)
        }
    }

    const submitInfo = (e) => {
        e.preventDefault()
        login(email, password).then((res)=>{
            if(res){
                dispatch(loginDispatch({email: res.email, token: res.accessToken}))
                navigate("/home/characters")
            }else{
                console.log("malo")
            }
        })
    }


    return (
        <div className={"flex justify-center items-center w-screen h-screen bg-center bg-cover"} style={{ backgroundImage: `url('images/LoginImage.jpg')` }}>
            <form onSubmit={submitInfo  } style={{display: 'flex', flexDirection: 'column', backgroundColor: '#F2DE79', borderRadius: '0.5rem', padding: '1.25rem'}}>
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
                    <Button type='submit' variant="contained" >login</Button>
                </div>
            </form>
        </div>
    );
};

export default Login;