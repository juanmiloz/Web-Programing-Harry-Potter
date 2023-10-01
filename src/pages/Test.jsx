import MyForm from "../components/MyForm.jsx";

const Test = () => {

    const submitInfo = ({email, password, test, gio}) => {
        console.log(email, password, test, gio);
    }

    var fields = ["email", "password"]

    return (
        <div>
            <MyForm onSubmit={submitInfo} fields={fields}/>
        </div>
    );
};

export default Test;
