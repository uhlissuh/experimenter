import jQuery from "jquery";
import bootstrap from "bootstrap";
import bsSelect from "bootstrap-select";
import popper from "popper.js";
import React from "react";
import ReactDOM from "react-dom";

import DesignForm from "experimenter/components/DesignForm";

window.jQuery = jQuery;
window.$ = jQuery;
window.bsSelect = bsSelect;
window.bootstrap = bootstrap;
window.popper = popper;

const branchesDiv = document.getElementById("react-branches-form");

if (branchesDiv) {
  const slug = branchesDiv.dataset.experimentSlug;
  const expType = branchesDiv.dataset.experimentType;

  ReactDOM.render(<DesignForm slug={slug} expType={expType} />, branchesDiv);
}
