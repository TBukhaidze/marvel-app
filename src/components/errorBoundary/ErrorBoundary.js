import { Component } from "react";
import ErrorMessage from "../errorMesssage/ErrorMessage";

class ErrorBoundary extends Component {
  state = {
    error: false,
  };

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
    this.setState({
      error: true,
    });
  }

  render() {
    if (this.state.error) {
      return <ErrorMessage />;
    }

    return this.props.children;
  }
}

//etot komp. eto predoxranitel oshibki obernuv v ego prilojenia
//prodoljit rab. i dlia polzovatelia stranica vsioravno budet rabochaiaa
//
// predoxraniteli loviat oshibki tolko
// 1 v metode render
// 2 v metodax jiznenogo cikla i
// 3 v konstruktorax dochernix komponentov

// predoxraniteli ne loviat oshibki kotorie
// proizoshli v nutri obrabotchika sobiitii (napr onClick)
// v asinxronnom kode setevie zaprosi (predoxranitel ne znaet kogda kod proizoidiot)
// ne mojet poimat oshibku v samom predoxraniteli (vnutri sebia)
// servernii rendering
export default ErrorBoundary;
