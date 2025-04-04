import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import css from "./SendForm.module.css";
import icons from "../../../public/doc-icons.svg";
import { useRef } from "react";
import { ToastContainer, toast } from 'react-toastify';

const initialState = {
  name: "",
  email: "",
  bookingDate: "",
  comment: "",
};

const sendSchema = Yup.object({
  name: Yup.string()
    .required("Required")
    .min(3, "Name is too Short!")
    .max(50, "Name is too Long!"),

  email: Yup.string().required("Required").email("Invalid email format"),

  bookingDate: Yup.date().required("Required").nullable().typeError("Invalid date"),

  comment: Yup.string().required("Required").max(500, "Comment is too long!"),
});

const SendForm = () => {
  const dateInputRef = useRef(null); 
  const notify = () => toast('Application successfully submitted!');

  const handleSubmit = (values, actions) => {
    notify();
    actions.resetForm();
   actions.setFieldValue("bookingDate", "");
  };

  return (
    <div className={css.formBox}>
      <div className={css.textBox}>
        <h3>Book your campervan now</h3>
        <p>Stay connected! We are always ready to help you.</p>
      </div>
      <Formik
        initialValues={initialState}
        validationSchema={sendSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <label>
            
            <Field
              className={css.inputData}
              type="text"
              name="name"
              placeholder="Name"
            />
            
            <ErrorMessage
              className={css.message}
              component="span"
              name="name"
            ></ErrorMessage>
          </label>
          <label>
            
            <Field
              className={css.inputData}
              type="email"
              name="email"
              placeholder="Email"
            />
           
            <ErrorMessage
              className={css.message}
              component="span"
              name="email"
            ></ErrorMessage>
          </label>
          
          <label>
            <div className={css.iconWrapper}>
              <Field
                className={css.inputData}
                type="date"
                name="bookingDate"
                placeholder="Booking date"
                innerRef={dateInputRef}
                onClick={() => dateInputRef.current?.showPicker()}
              />
              <span className={css.customIcon} >
                <svg className={css.calendar} width="20" height="20">
                  <use href={`${icons}#icon-calendar`} />
                </svg>
              </span>
            </div>
            
            <ErrorMessage
              className={css.message}
              component="span"
              name="bookingDate"
            />
          </label>

          <label>
           
            <Field
  as="textarea"
  name="comment"
  className={css.inputComment}
  placeholder="Comment"
  rows="3"
  style={{ resize: "none", overflow: "hidden" }}

/>
            <ErrorMessage
              className={css.message}
              component="span"
              name="comment"
            />
          </label>
          <button className={css.sendBtn} type="submit">
            Send
          </button>
          <ToastContainer />
        </Form>
      </Formik>
    </div>
  );
};

export default SendForm;
