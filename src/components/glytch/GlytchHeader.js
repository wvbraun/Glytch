import React, { PropTypes } from "react";
import { Link } from "react-router";
import { Button, Nav, NavItem } from "react-bootstrap";
import Dropzone from "react-dropzone";

const GlytchHeader = ({ onDrop }) => {
  return (
    <div className="fixed-elements">
      <header id="glytch-header">
        <div className="fixed-header">
          <Link to="/">Glytch</Link>
          <div className="nav-actions">
            <div className="nav-action">
              <Button type="submit" bsStyle="primary" bsSize="small">
                <Dropzone
                  accept="image/*"
                  className="dropzone"
                  multiple={false}
                  onDrop={onDrop}>
                  Upload
                </Dropzone>
              </Button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

GlytchHeader.PropTypes = {
  onDrop: PropTypes.func.isRequired
}

export default GlytchHeader;
