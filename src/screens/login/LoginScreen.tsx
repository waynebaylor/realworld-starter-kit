/** @jsx createElement */
import { createElement, Fragment } from "@bikeshaving/crank";
import { Navbar, Footer } from "../../components";
import { LoginForm } from "./LoginForm";

export function LoginScreen() {
  return (
    <Fragment>
      <Navbar active="login" />
      <LoginForm/>
      <Footer />
    </Fragment>
  );
}