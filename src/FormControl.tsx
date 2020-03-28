import React from 'react';
import RbFormControl, { FormControlProps } from 'react-bootstrap/FormControl';
import { FieldProps } from 'formik';
import { getFieldPropsForFormControl } from './utils';

export type Props = FieldProps & FormControlProps;

export const FormControl: React.FC<Props> = ({ children, ...props }) => {
  return (
    <RbFormControl
      {...getFieldPropsForFormControl(props)}
      aria-label="form-control"
    >
      {children}
    </RbFormControl>
  );
};
