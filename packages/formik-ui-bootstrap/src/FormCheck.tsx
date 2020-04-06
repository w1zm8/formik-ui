import React from 'react';
import { FieldProps } from 'formik';
import { FormCheckProps, Form } from 'react-bootstrap';
import { getFieldFormCheckProps } from './utils';
import { FORM_CHECK_TEST_ID } from './constants';

export type Props = FieldProps &
  FormCheckProps & {
    isTouchRequired?: boolean;
  };

const FormCheck: React.FC<Props> = props => {
  return (
    <Form.Check
      {...getFieldFormCheckProps(props)}
      data-testid={FORM_CHECK_TEST_ID}
    />
  );
};

export { FormCheck };
