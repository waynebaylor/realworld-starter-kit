/** @jsx createElement */
import { createElement, Fragment, Context } from "@bikeshaving/crank";
import { Navbar, Footer } from "../../components";
import { SettingsForm } from "./SettingsForm";

export function SettingsScreen() {
  return (
    <Fragment>
      <Navbar active="settings" />
      <SettingsForm />
      <Footer />
    </Fragment>
  );
}