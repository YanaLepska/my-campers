import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import css from "./SendForm.module.css";
import icons from "../../../public/doc-icons.svg";

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
  const handleSubmit = (values, actions) => {
    const finalData = { ...values };
    actions.resetForm();
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
              />
              <span className={css.customIcon}>
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
              className={css.inputComment}
              type="text"
              name="comment"
              placeholder="Comment"
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
        </Form>
      </Formik>
    </div>
  );
};

export default SendForm;
