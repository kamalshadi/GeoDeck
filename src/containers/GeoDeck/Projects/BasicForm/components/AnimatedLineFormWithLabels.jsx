/* eslint-disable react/no-children-prop */
import React, { useState } from "react";
import PropTypes from "prop-types";
import { Card, CardBody, Col, Button, ButtonToolbar } from "reactstrap";
import { Field, reduxForm } from "redux-form";
import { withTranslation } from "react-i18next";
import MenuItem from "@material-ui/core/MenuItem";
import EyeIcon from "mdi-react/EyeIcon";
import KeyVariantIcon from "mdi-react/KeyVariantIcon";
import validate from "../../validateNewProject";
import MaterialTextField from "../../../../../shared/components/form/material/MaterialTextField";
import PasswordFieldMaterial from "../../../../../shared/components/form/material/PasswordFieldMaterial";
import MaterialSelectField from "../../../../../shared/components/form/material/MaterialSelectField";
// import renderField from "../../../../../shared/components/form/InputField";  

const AnimatedLineFormWithLabels = (props) => {

  const onSubmit = (formValues) => {
    console.log(formValues);
  };

  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault(); //<===== This stops the form from being submitted
    }
  };
  const { handleSubmit } = props

  return (
    <Col md={12} lg={12}>
      <Card>
        <CardBody>
          <form
            className="material-form"
            onSubmit={handleSubmit(onSubmit)}
            onKeyPress={onKeyPress}
            id="new-project-form"
          >
            <div>
              <Field
                name="username"
                component={MaterialTextField}
                placeholder="title"
                label="Project Title"
              />
            </div>
            <div>
              <Field
                name="url"
                component={MaterialTextField}
                placeholder="https://petrolern.com"
                label="Data Endpoint URL"
                type="url"
              />
            </div>
            <div>
              <PasswordFieldMaterial />
              {/* {renderPassowrd()} */}

              {/* <Field
                name="password"
                component={MaterialTextField}
                type="password"
                label="Password"
              /> */}
            </div>
            <div>
              <Field
                name="select"
                // component={MaterialSelectField}
                component={MaterialTextField}
                select
                label="Collaboration Group"
              >
                <MenuItem className="material-form__option" value="one">
                  Lab Internal
                </MenuItem>
                <MenuItem className="material-form__option" value="two">
                  SMART Group
                </MenuItem>
              </Field>
            </div>
            <div>
              <Field
                name="description"
                component={MaterialTextField}
                placeholder="Type description here"
                multiline
                rowsMax="4"
                label="Description"
              />
            </div>
            
          </form>
        </CardBody>
      </Card>
    </Col>
  );
};

AnimatedLineFormWithLabels.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
};

export default reduxForm({
  form: "newProjectForm", // a unique identifier for this form
  validate,
})(withTranslation("common")(AnimatedLineFormWithLabels));
