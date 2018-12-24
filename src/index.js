"use strict";

import "./app.css";
import HelpBox from "./components/help-box";
import BikerForm from "./components/biker-form";
import Breadcrumb from "./components/breadcrumb";
import Navbar from "./components/navbar";
import TableList from "./components/table-list";
import Footer from "./components/footer";


const customElementPrefix = "panda-";

customElements.define(`${customElementPrefix}help-box`, HelpBox);
customElements.define(`${customElementPrefix}biker-form`, BikerForm);
customElements.define(`${customElementPrefix}breadcrumb`, Breadcrumb);
customElements.define(`${customElementPrefix}navbar`, Navbar);
customElements.define(`${customElementPrefix}table-list`, TableList);
customElements.define(`${customElementPrefix}footer`, Footer);

(function() {
  document.body.appendChild(
    document.createElement(`${customElementPrefix}navbar`)
  );
  document.body.appendChild(
    document.createElement(`${customElementPrefix}breadcrumb`)
  );
  document.body.appendChild(
    document.createElement(`${customElementPrefix}help-box`)
  );
  document.body.appendChild(
    document.createElement(`${customElementPrefix}biker-form`)
  );
  document.body.appendChild(
    document.createElement(`${customElementPrefix}table-list`)
  );
  document.body.appendChild(
    document.createElement(`${customElementPrefix}footer`)
  );
})();
