/* eslint-disable react/no-children-prop */
import React from 'react';
import {
  Card, CardBody, Col, Button, ButtonToolbar,
} from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

const renderTextField = ({
  input, label, meta: { touched, error }, children, select, type, multiline,
}) => (
  <TextField
    className="material-form__field"
    label={label}
    type={type}
    error={touched && error}
    value={input.value}
    children={children}
    select={select}
    multiline={multiline}
    onChange={(e) => {
      e.preventDefault();
      input.onChange(e.target.value);
    }}
    InputLabelProps={{
     style: { color: '#F2AB1f' },
   }}
  />
);

renderTextField.propTypes = {
  input: PropTypes.shape().isRequired,
  label: PropTypes.string.isRequired,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string,
  }),
  select: PropTypes.bool,
  children: PropTypes.arrayOf(PropTypes.element),
  type: PropTypes.string,
  multiline: PropTypes.bool,
};

renderTextField.defaultProps = {
  meta: null,
  select: false,
  children: [],
  type: 'text',
  multiline: false,
};

const AnimatedLineFormWithLabels = ({ handleSubmit, reset, t }) => (
  <Col md={12} lg={12}>
    <Card>
      <CardBody>
        <form className="material-form" onSubmit={handleSubmit}>
          <div>
            <Field
              name="username"
              component={renderTextField}
              placeholder="title"
              label="Project Title"
            />
          </div>
          <div>
            <Field
              name="url"
              component={renderTextField}
              placeholder="https://petrolern.com"
              label="Data Endpoint URL"
              type="url"
            />
          </div>
          <div>
            <Field
              name="password"
              component={renderTextField}
              type="password"
              label="Password"
            />
          </div>
          <div>
            <Field
              name="select"
              component={renderTextField}
              select
              label="Collaboration Group"
            >
              <MenuItem className="material-form__option" value="one">Lab Internal</MenuItem>
              <MenuItem className="material-form__option" value="two">SMART Group</MenuItem>
            </Field>
          </div>
          <div>
            <Field
              name="textarea"
              component={renderTextField}
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

AnimatedLineFormWithLabels.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'floating_labels_form', // a unique identifier for this form
})(withTranslation('common')(AnimatedLineFormWithLabels));
