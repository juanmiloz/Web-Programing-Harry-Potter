import {useDispatch} from "react-redux";
import {login} from "../firebase/firebase.jsx";
import {Link, useNavigate} from "react-router-dom";
import {loginDispatch} from "../redux/reducers/authSlice.js"
import Swal from "sweetalert2";
import MyForm from "../components/MyForm.jsx";

const Login = () => {

    const navigate = useNavigate();
    //const [email, setEmail] = useState("");
    //const [password, setPassword] = useState("");
    const dispatch = useDispatch()

    // const changeEmail = (e) => {
    //     if (e.target.id === "emailTextField") {
    //         setEmail(e.target.value)
    //     } else if (e.target.id === "passwordTextField") {
    //         setPassword(e.target.value)
    //     }
    // }

    const fields = ["email", "password"]

    const submitInfo = ({email, password}) => {
        login(email, password).then((res) => {
            dispatch(loginDispatch({email: res.email, token: res.accessToken}))
            navigate("/home/characters")
        }).catch(() => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'check the fields you have entered!'
            })
        })
    }


    return (
        <div className={"flex justify-center items-center w-screen h-screen bg-center bg-cover"}
             style={{backgroundImage: `url('images/LoginImage.jpg')`}}>
            <div className={'bg-[#F2D49B] p-4 rounded-2xl'}>
                <MyForm onSubmit={submitInfo} fields={fields} nameBtn={"login"} title={'Login'}/>
                <Link to="/SignUp" className={'text-blue-400 flex justify-center mt-1'}>
                    <u>Register</u>
                </Link>
            </div>
        </div>
    );
};

export default Login;