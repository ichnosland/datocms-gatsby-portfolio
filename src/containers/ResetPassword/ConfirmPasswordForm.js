/**
*
* ConfirmPasswordForm
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form/immutable';

import {
  CardForm,
  FormElement,
} from 'components/FormElements';
import renderedField from 'components/FormElements/Field';
import { Button } from 'components/Button';
import LogoPlatform from 'components/LogoPlatform';
import { Separator, SeparatorText } from 'components/Paragraph';
import { passwordSetValidator, required } from './validator';

export class ConfirmPassword extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { handleSubmit, invalid, product } = this.props;
    return (
      <CardForm
        onSubmit={handleSubmit}
      >
        <FormElement margin="0 auto 36px">
          <LogoPlatform
            product={product}
            formLogo
          />
        </FormElement>
        <Separator>
          <SeparatorText>Reimposta la tua password</SeparatorText>
        </Separator>
        <FormElement>
          <Field
            name="password_new_1"
            component={renderedField}
            type="password"
            label="nuova password"
            validate={[required]}
          />
        </FormElement>
        <FormElement>
          <Field
            name="password_new_2"
            component={renderedField}
            type="password"
            label="ripeti nuova password"
            validate={[required]}
          />
        </FormElement>
        <FormElement>
          <Button
            actioncolor="okay"
            full
            type="submit"
            disabled={invalid}
          >Invia
          </Button>
        </FormElement>
      </CardForm>
    );
  }
}

ConfirmPassword.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  invalid: PropTypes.bool,
  product: PropTypes.string,
};

const ConfirmPasswordForm = reduxForm({
  form: 'confirmPassword',
  validate: passwordSetValidator,
})(ConfirmPassword);

export default ConfirmPasswordForm;
