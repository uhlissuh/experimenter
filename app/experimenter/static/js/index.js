import jQuery from "jquery"
import bootstrap from "bootstrap"
import bsSelect from "bootstrap-select"
import popper from "popper.js"
import React from "react";
import ReactDOM from "react-dom";
import { Button, Container, Row, Col, FormControl, FormLabel } from "react-bootstrap";

window.jQuery = jQuery
window.$ = jQuery


const variantsFormset = document.getElementById("react-formset-variants")
const totalForms = document.getElementById("id_variants-TOTAL_FORMS")

class BranchForm extends React.Component {
  constructor(props) {
      super(props);

      this.addBranch = this.addBranch.bind(this)
      this.removeBranch = this.removeBranch.bind(this)

      this.updateRatio = this.updateRatio.bind(this)
      this.updateName = this.updateName.bind(this)
      this.updateDescription = this.updateDescription.bind(this)
      this.updateValue = this.updateValue.bind(this)

      const jsonTextArea = document.getElementById("variants-data-json")

      this.state = {branches: JSON.parse(jsonTextArea.value)}

  }

  addBranch(e) {
    e.preventDefault();
    this.setState({branches: this.state.branches.concat({ratio: "", name: "", description: "", value:"", id:"", delete:"unchecked"})})
    totalForms.value = this.state.branches.length + 1;
  }

  removeBranch(e) {
    e.preventDefault();
    this.state.branches.splice(e.target.dataset.index, 1)

    this.setState({branches: this.state.branches})
    totalForms.value = this.state.branches.length;
    console.log(totalForms.value);

  }

  updateRatio(e) {
    var stateCopy = {...this.state.branches};
    stateCopy[e.target.dataset.index].ratio = e.target.value;

    this.setState(stateCopy)
  }

  updateName(e) {
    var stateCopy = {...this.state.branches};
    stateCopy[e.target.dataset.index].name = e.target.value;

    this.setState(stateCopy)
  }

  updateDescription(e) {
    var stateCopy = {...this.state.branches};
    stateCopy[e.target.dataset.index].description = e.target.value;

    this.setState(stateCopy)
  }

  updateValue(e) {
    var stateCopy = {...this.state.branches};
    stateCopy[e.target.dataset.index].value = e.target.value;

    this.setState(stateCopy)
  }

  render() {
    return <div>
      {
        this.state.branches.map((branch, index) =>
          <div key={index}>
            <Container>
              <FormControl data-index={index} type="hidden" name={"variants-" + index + "-id"} value={branch.id}/>
              <FormControl data-index={index} type="hidden" name={"id_variants-" + index +"-delete"} value={branch.delete}/>
              <Row className="mb-3">
                <Col md={{ span: 4, offset: 3 }}>
                  { index == 0 ? <h4>Control Branch</h4> : <h4>Branch {index}</h4>}
                </Col>
                <Col md={5} className="text-right">
                  { index != 0 ? <Button variant="danger" data-index={index} onClick={this.removeBranch}>X Remove Branch</Button> : null}
                </Col>
              </Row>
              <Row>
                <Col md={3} className="text-right mb-3">
                <FormLabel><strong>Branch Size</strong></FormLabel>
                <br/>
                <a href="/">help</a>
                </Col>
                <Col md={9}>
                  <FormControl data-index={index} type="text" name={"variants-"+ index + "-ratio"} onChange={this.updateRatio} value={branch.ratio}/>
                </Col>
              </Row>
              <Row>
                <Col md={3} className="text-right mb-3">
                <FormLabel><strong>Name</strong></FormLabel>
                <br/>
                <a href="/">help</a>
                </Col>
                <Col md={9}>
                  <FormControl data-index={index} type="text" name={"variants-" + index + "-name"} onChange={this.updateName} value={branch.name}/>
                </Col>
              </Row>
              <Row>
                <Col md={3} className="text-right mb-3">
                <FormLabel><strong>Description</strong></FormLabel>
                <br/>
                <a href="/">help</a>
                </Col>
                <Col md={9}>
                  <FormControl as="textarea" data-index={index} type="text" name={"variants-" + index + "-description"} onChange={this.updateDescription} value={branch.description}/>
                </Col>
              </Row>
              <Row>
                <Col md={3} className="text-right mb-3">
                <FormLabel><strong>Pref Value</strong></FormLabel>
                <br/>
                <a href="/">help</a>
                </Col>
                <Col md={9}>
                  <FormControl data-index={index} type="text" name={"variants-" + index + "-value"} onChange={this.updateValue} value={branch.value}/>
                </Col>
              </Row>
              <hr className="heavy-line my-5"/>
            </Container>
          </div>
        )
      }
      <Row>
        <Col className="text-right">
          <Button variant="success" className="mb-4" onClick={this.addBranch}>+ Add Branch</Button>
        </Col>
      </Row>
    </div>;
  }
}

if (variantsFormset) {
  ReactDOM.render(<BranchForm />,variantsFormset);
}
