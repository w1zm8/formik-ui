import { FormControlProps } from 'react-bootstrap/FormControl';
import { FieldProps } from 'formik';

export const getFieldPropsForFormControl = ({
  disabled,
  field,
  form: { isSubmitting },
  ...props
}: FormControlProps & FieldProps): FormControlProps => {
  return {
    ...field,
    ...props,
    disabled: disabled || isSubmitting,
  };
};
