import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Formik, ErrorMessage } from 'formik';
import { FormControl, FORM_FEEDBACK_TEST_ID } from '../src';
import {
  FIELD_TEST_NAME,
  FIELD_TEST_ERROR_TEXT,
  FIELD_TEST_VALUE,
} from './constants';

describe('FormControlFeedback', () => {
  it('renders without issues', () => {
    const { getByTestId } = render(
      <Formik
        onSubmit={() => {}}
        initialValues={{
          [FIELD_TEST_NAME]: FIELD_TEST_VALUE,
        }}
        initialErrors={{
          [FIELD_TEST_NAME]: FIELD_TEST_ERROR_TEXT,
        }}
        initialTouched={{
          [FIELD_TEST_NAME]: true,
        }}
      >
        <ErrorMessage name={FIELD_TEST_NAME} component={FormControl.Feedback} />
      </Formik>
    );

    const errorMessage = getByTestId(FORM_FEEDBACK_TEST_ID);

    expect(errorMessage).toBeTruthy();
    expect(errorMessage.textContent).toBe(FIELD_TEST_ERROR_TEXT);
    expect(errorMessage).toHaveClass('invalid-feedback');
  });
});
