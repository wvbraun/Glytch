import React, { PropTypes } from "react";
import { Link } from "react-router";
import { Button, Nav, NavItem } from "react-bootstrap";
import Dropzone from "react-dropzone";

const GlytchHeader = () => {
  return (
    <div className="fixed-elements">
      <header id="glytch-header">
        <div className="fixed-header">
          <Link to="/">Glytch</Link>
          <div className="nav-actions">
            <div className="nav-action">
              <Button type="submit" bsStyle="primary" bsSize="small">
                <Dropzone
                  className="dropzone"
                  accept="image/*"
                  multiple={false}>
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

export default GlytchHeader;
