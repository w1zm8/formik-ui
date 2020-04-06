import React from 'react';
import Control, { FormControlProps } from 'react-bootstrap/FormControl';
import { FieldProps } from 'formik';
import { FormControlExtendedProps } from './types';
import { getFieldFormControlProps } from './utils';
import { FormControlFeedback } from './FormControlFeedback';
import { FORM_CONTROL_TEST_ID } from './constants';

export type Props = FieldProps & FormControlProps & FormControlExtendedProps;

const FormControl: React.FC<Props> & {
  Feedback: typeof FormControlFeedback;
} = ({ children, ...props }) => {
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
FormControl.Feedback = FormControlFeedback;

export { FormControl };
