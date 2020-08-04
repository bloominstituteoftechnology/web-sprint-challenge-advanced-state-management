import React from "react";
import { connect } from "react-redux";
import { Formik, Form, Field } from "formik";
import { addSmurf, postNewSmurf } from "../actions/index";
import axios from "axios";

const SmurfForm = (props) => {
  // const handleSubmit = (values) => {
  //   console.log(values);
  //   postNewSmurf({ ...values, id: Date.now() });
  // };

  const handleSubmit = (values) => {
    axios
      .post("http://localhost:3333/smurfs", values)
      .then((res) => console.log(res))
      .catch((err) => console.log(err.message));
  };

  return (
    <Formik
      initialValues={{ name: "", age: "", height: "", id: 0 }}
      onSubmit={(values, { resetForm }) => {
        handleSubmit(values);
        resetForm();
      }}>
      <Form>
        <Field name="name" placeholder="name" />
        <Field name="age" placeholder="age" />
        <Field name="height" placeholder="height" />

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default connect(null, { postNewSmurf })(SmurfForm);
