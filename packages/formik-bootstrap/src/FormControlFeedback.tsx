import React from 'react';
import { FormControl } from 'react-bootstrap';
import { ErrorMessageProps } from 'formik';

export const FORM_FEEDBACK_TEST_ID = 'form-control-feedback';

type Props = ErrorMessageProps;

export const FormControlFeedback: React.FC<unknown> = props => {
  const { children, className } = props as Props;

  if (!children) return null;

  return (
    <FormControl.Feedback
      type="invalid"
      className={className}
      data-testid={FORM_FEEDBACK_TEST_ID}
    >
      {children}
    </FormControl.Feedback>
  );
};
