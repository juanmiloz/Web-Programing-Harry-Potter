import React from 'react';
import MyForm from "../components/MyForm.jsx";
import {Link} from "react-router-dom";
import {signUp} from "../firebase/firebase.jsx";
import Swal from "sweetalert2";

const SignUp = () => {

    const fields = ["email", "password"]
    const submitInfo = ({email, password}) => {
        signUp(email, password).then((res) => {
            console.log(res)
            Swal.fire({
                icon: 'success',
                title: 'Your work has been saved',
                showConfirmButton: false,
                timer: 1500
            })
        }).catch((error)=>{
            console.log(error)
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Error while registering, please check that the data entered are correct.'
            })
        })
    }

    return (
        <div className={"flex justify-center items-center w-screen h-screen bg-center bg-cover"}
            style={{backgroundImage: `url('images/castle.jpg')`}}>
            <div className={'bg-[#EDF2E9] p-4 rounded-2xl'}>
                <MyForm onSubmit={submitInfo} fields={fields} nameBtn={"Sign Up"} title={'Sign Up'}/>
                <Link to="/" className={'text-blue-400 flex justify-center mt-1'}>
                    <u>Login</u>
                </Link>
            </div>
        </div>
    );
};

export default SignUp;
