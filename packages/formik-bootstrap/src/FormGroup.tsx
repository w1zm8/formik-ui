import React from 'react';
import { Form } from 'react-bootstrap';
import { Props as FormControlProps, FormControl } from './FormControl';
import { getFieldErrorProps, getFieldFormFeedbackType } from './utils';
import { FormControlTag } from 'types';

export const FORM_GROUP_TEST_ID = 'form-group';
export const FORM_LABEL_TEST_ID = 'form-label';
export const FORM_FEEDBACK_TEST_ID = 'form-feedback';

export type Props = FormControlProps & {
  label?: string;
  tag?: React.ElementType;
  controlTag?: FormControlTag;
};

const FormGroup: React.FC<Props> = ({ label, tag, controlTag, ...props }) => {
  const { showError, fieldError } = getFieldErrorProps(props);

  return (
    <Form.Group data-testid={FORM_GROUP_TEST_ID} as={tag}>
      {label && (
        <Form.Label data-testid={FORM_LABEL_TEST_ID}>{label}</Form.Label>
      )}
      <FormControl {...props} tag={controlTag} />
      {showError && fieldError && (
        <Form.Control.Feedback
          type={getFieldFormFeedbackType(props)}
          data-testid={FORM_FEEDBACK_TEST_ID}
        >
          {fieldError}
        </Form.Control.Feedback>
      )}
    </Form.Group>
  );
};

FormGroup.displayName = 'FormGroup';

export { FormGroup };
