import React from "react";
import { Row, Col, FormControl, FormLabel } from "react-bootstrap";
import { boundClass } from "autobind-decorator";
import PropTypes from "prop-types";

import Error from "experimenter/components/Error";
import HelpBox from "experimenter/components/HelpBox";

@boundClass
class DesignInput extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      help_showing: false,
    };
  }

  toggleHelp(e) {
    e.preventDefault();
    this.setState({ help_showing: !this.state.help_showing });
  }

  render() {
    return (
      <Row className={this.props.margin}>
        <Col md={3} className="text-right mb-3">
          <FormLabel>
            <strong>{this.props.label}</strong>
          </FormLabel>
          <br />
          <a
            href="#"
            name={this.props.name}
            data-index={this.props.index}
            onClick={this.toggleHelp}
          >
            Help
          </a>
        </Col>
        <Col md={9}>
          <FormControl
            as={this.props.as}
            rows={this.props.rows}
            data-index={this.props.index}
            id={this.props.id}
            type="text"
            name={this.props.name}
            onChange={event => {
              this.props.onChange(event.target.value);
            }}
            value={this.props.value}
            className={this.props.error ? "is-invalid" : ""}
          >
            {this.props.children}
          </FormControl>
          {this.props.error ? <Error error={this.props.error} /> : ""}
          <HelpBox showing={this.state.help_showing}>
            {this.props.helpContent}
          </HelpBox>
        </Col>
      </Row>
    );
  }
}

DesignInput.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  margin: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  index: PropTypes.number,
  as: PropTypes.string,
  rows: PropTypes.string,
  id: PropTypes.string,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  children: PropTypes.array,
  helpContent: PropTypes.object,
  onChange: PropTypes.func,
};

export default DesignInput;
