import {Button} from "@mui/material";
import {Field, Form, Formik} from "formik";
import PropTypes from "prop-types";
import MyField from "./MyField.jsx";

const MyForm = ({onSubmit, fields, nameBtn, title}) => {

    const initialsValues = {}
    fields.forEach((field) => {
        initialsValues[field] = '';
    })


    return (
        <div>
            <Formik initialValues={initialsValues}
                    onSubmit={(values) => {
                        onSubmit(values)
                    }}>{() => (
                <Form>
                    <div className="flex justify-center font-bold text-[#0D0C0C]">
                        {title}
                    </div>
                    <div>
                        {fields.map((field, index) => {
                            const isPassword = field === 'password';
                            return (
                                <div key={index} className={'mt-5'}>
                                    <Field name={field} placeholder={field} component={MyField} label={field} isPassword={isPassword}/>
                                </div>
                            )
                        })}
                        <div className={'flex justify-center mt-4'}><Button type={'submit'} variant="contained">{nameBtn}</Button></div>
                    </div>
                </Form>
            )}</Formik>
        </div>
    );
};

MyForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    fields: PropTypes.array.isRequired,
    nameBtn: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}

export default MyForm
