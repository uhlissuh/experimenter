import jQuery from "jquery"
import bootstrap from "bootstrap"
import bsSelect from "bootstrap-select"
import popper from "popper.js"
import React from "react";
import ReactDOM from "react-dom";

window.jQuery = jQuery
window.$ = jQuery


const variantsFormset = document.getElementById("react-formset-variants")

class BranchForm extends React.Component {
  constructor(props) {
      super(props);

      this.addBranch = this.addBranch.bind(this)
      this.updateSize = this.updateSize.bind(this)

      this.state = {branches: [{size: "", name: "", description: ""}]}

  }

  addBranch(e) {
    e.preventDefault();
    this.setState({branches: this.state.branches.concat({size: "", name: "", description: ""})})
  }

  updateSize(e) {
    console.log(e.target);
    // this.setState(this.state.branches[e.target.dataset.index].size = e.target.value)

    var stateCopy = Object.assign({}, this.state.branches);
    stateCopy.items = stateCopy.items.slice();
    stateCopy.items[e.target.dataset.index] = Object.assign({}, stateCopy.items[e.target.dataset.index]);
    stateCopy.items[e.target.dataset.index].size = e.target.value;
    this.setState(stateCopy)
  }

  updateName(e) {
    console.log(e);
  }

  updateSubscription(e) {
    console.log(e);
  }

  render() {
    return <div>
      {
        this.state.branches.map((branch, index) =>
          <div key={index}>
            <label>
              Branch Size
              <input data-index={index} type="text" name={"size-"+index} onChange={this.updateSize} value={branch.size}/>
            </label>
            <label>
              Name
              <input data-index={index} type="text" name={"name-"+index} onChange={this.updateName} value={branch.name}/>
            </label>
            <label>
              Description
              <input data-index={index} type="text" name={"description-"+index} onChange={this.updateSubscription} value={branch.description}/>
            </label>
          </div>
        )
      }
      <button onClick={this.addBranch}>Add a Branch</button>
    </div>;
  }
}

if (variantsFormset) {
  ReactDOM.render(<BranchForm />,variantsFormset);
}
