/** @jsx createElement */
import { createElement, Fragment } from "@bikeshaving/crank";
import { Navbar, Footer } from "../../components";

export function HomeScreen() {
  return (
    <Fragment>
      <Navbar active="home"/>
      <div>
        content goes here
      </div>
      <Footer />
    </Fragment>
    
  );
}