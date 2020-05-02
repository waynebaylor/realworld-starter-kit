/** @jsx createElement */
import { createElement, Fragment } from "@bikeshaving/crank";
import { Navbar, Footer } from "../../components";
import { Banner } from "./Banner";
import { Feeds } from "./Feeds";
import { Sidebar } from "./Sidebar";

export function HomeScreen() {
  return (
    <Fragment>
      <Navbar active="home"/>
      
      <div class="home-page">
        <Banner/>

        <div class="container page">
          <div class="row">
            <div class="col-md-9">
              <Feeds/>
            </div>
            <div class="col-md-3">
              <Sidebar/>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </Fragment>
    
  );
}