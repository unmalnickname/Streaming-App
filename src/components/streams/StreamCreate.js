import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamCreate extends React.Component {
  render() {
    console.log(this.props);

    return (
      <form action="">
        <Field name="title" />
        <Field name="Description" />
      </form>
    );
  }
}

export default reduxForm({
  form: "streamCreate"
})(StreamCreate);
