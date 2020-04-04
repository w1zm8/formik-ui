import React from 'react';
import Control, { FormControlProps } from 'react-bootstrap/FormControl';
import { FieldProps } from 'formik';
import { FormControlExtendedProps } from './types';
import { getFieldFormControlProps } from './utils';

export const FORM_CONTROL_TEST_ID = 'form-control';

export type Props = FieldProps & FormControlProps & FormControlExtendedProps;

const FormControl: React.FC<Props> = ({ children, ...props }) => {
  return (
    <Control
      {...getFieldFormControlProps(props)}
      data-testid={FORM_CONTROL_TEST_ID}
    >
      {children}
    </Control>
  );
};

FormControl.displayName = 'FormControl';

export { FormControl };
