/** @jsx createElement */
import { createElement, Fragment } from "@bikeshaving/crank";
import { Navbar, Footer } from "../../components";
import { RegistrationForm } from "./RegistrationForm";

export function RegisterScreen() {
  return (
    <Fragment>
      <Navbar active="register" />
      <RegistrationForm />
      <Footer />
    </Fragment>
  );
}