import {
  FormControlProps as ControlProps,
  // FormCheckProps as CheckProps,
} from 'react-bootstrap';
import { getIn } from 'formik';
import { Props as FormControlProps } from './FormControl';
import { Props as FormCheckProps } from './FormCheck';
import { BsPrefixProps } from 'react-bootstrap/helpers';

export const getFieldErrorProps = ({
  field,
  form,
  isTouchRequired,
}: Pick<FormControlProps, 'field' | 'form' | 'isTouchRequired'>): {
  fieldError: string | undefined;
  showError: boolean;
} => {
  const fieldError = field.name ? getIn(form.errors, field.name) : '';
  const showError =
    (isTouchRequired && getIn(form.touched, field.name) && !!fieldError) ||
    (!isTouchRequired && !!fieldError);

  return {
    fieldError,
    showError,
  };
};

export const getFieldFormControlProps = ({
  disabled,
  field,
  tag,
  isInvalid,
  isTouchRequired = true,
  form,
  ...props
}: FormControlProps): ControlProps & BsPrefixProps<React.ElementType> => {
  const { showError } = getFieldErrorProps({
    field,
    form,
    isTouchRequired,
  });

  return {
    ...field,
    ...props,
    isInvalid: isInvalid ?? showError,
    disabled: disabled || form.isSubmitting,
    as: tag,
  };
};

export const getFieldFormCheckProps = ({
  disabled,
  field,
  isInvalid,
  isTouchRequired = true,
  form,
  ...props
}: FormCheckProps): any => {
  const { showError, fieldError } = getFieldErrorProps({
    field,
    form,
    isTouchRequired,
  });

  return {
    ...field,
    ...props,
    isInvalid: isInvalid ?? showError,
    feedback: fieldError,
    disabled: disabled || form.isSubmitting,
  };
};

export const getFieldFormFeedbackType = ({
  field,
  isInvalid,
  isTouchRequired = true,
  form,
}: FormControlProps): 'valid' | 'invalid' => {
  const { showError } = getFieldErrorProps({
    field,
    form,
    isTouchRequired,
  });

  return isInvalid ?? showError ? 'invalid' : 'valid';
};
