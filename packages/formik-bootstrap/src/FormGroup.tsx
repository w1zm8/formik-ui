import React from 'react';
import { Form } from 'react-bootstrap';
import { Props as FormControlProps, FormControl } from './FormControl';
import { getFieldErrorProps, getFieldFormFeedbackType } from './utils';
import { FormControlTag } from 'types';
import {
  FORM_GROUP_TEST_ID,
  FORM_LABEL_TEST_ID,
  FORM_GROUP_FEEDBACK_TEST_ID,
} from './constants';

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
          data-testid={FORM_GROUP_FEEDBACK_TEST_ID}
        >
          {fieldError}
        </Form.Control.Feedback>
      )}
    </Form.Group>
  );
};

FormGroup.displayName = 'FormGroup';

export { FormGroup };
