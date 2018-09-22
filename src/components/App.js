import React, { Component } from "react";
import FormPage from "../components/containers/FormPage";

class App extends Component {
  submit = values => {
    console.log(values);
  };

  render() {
    return <FormPage onSubmit={this.submit} />;
  }
}

export default App;
