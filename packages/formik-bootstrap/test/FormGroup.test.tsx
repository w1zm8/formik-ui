import * as React from 'react';
import { Formik, Field } from 'formik';
import { Col } from 'react-bootstrap';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {
  FormGroup,
  FORM_GROUP_TEST_ID,
  FORM_LABEL_TEST_ID,
  FORM_FEEDBACK_TEST_ID,
  FORM_CONTROL_TEST_ID,
} from '../src';
import {
  FIELD_TEST_LABEL_TEXT,
  FIELD_TEST_ERROR_TEXT,
  FIELD_TEST_NAME,
  FIELD_TEST_VALUE,
} from './constants';

describe('FormGroup', () => {
  it('renders without crashing', () => {
    const { getByTestId } = render(
      <Formik onSubmit={() => {}} initialValues={{}}>
        <Field component={FormGroup} />
      </Formik>
    );

    expect(getByTestId(FORM_GROUP_TEST_ID)).toBeTruthy();
    expect(getByTestId('form-control')).toBeTruthy();
  });
  it('renders label text', () => {
    const { getByTestId } = render(
      <Formik onSubmit={() => {}} initialValues={{}}>
        <Field label={FIELD_TEST_LABEL_TEXT} component={FormGroup} />
      </Formik>
    );

    expect(getByTestId(FORM_LABEL_TEST_ID).textContent).toBe(
      FIELD_TEST_LABEL_TEXT
    );
  });
  it('renders invalid feedback', () => {
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
        <Field
          label={FIELD_TEST_LABEL_TEXT}
          name={FIELD_TEST_NAME}
          component={FormGroup}
        />
      </Formik>
    );

    const feedback = getByTestId(FORM_FEEDBACK_TEST_ID);
    expect(feedback).toBeTruthy();
    expect(feedback).toHaveClass('invalid-feedback');
    expect(feedback.textContent).toBe(FIELD_TEST_ERROR_TEXT);
  });
  it('renders as specific tag', () => {
    const { getByTestId } = render(
      <Formik onSubmit={() => {}} initialValues={{}}>
        <Field tag="span" name={FIELD_TEST_NAME} component={FormGroup} />
      </Formik>
    );

    const feedback = getByTestId(FORM_GROUP_TEST_ID);
    expect(feedback.tagName).toBe('SPAN');
  });
  it('renders as UI component', () => {
    const { getByTestId } = render(
      <Formik onSubmit={() => {}} initialValues={{}}>
        <Field tag={Col} name={FIELD_TEST_NAME} component={FormGroup} />
      </Formik>
    );

    const feedback = getByTestId(FORM_GROUP_TEST_ID);
    expect(feedback.tagName).toBe('DIV');
    expect(feedback).toHaveClass('col');
  });
  it('renders control as select', () => {
    const { getByTestId, container } = render(
      <Formik onSubmit={() => {}} initialValues={{}}>
        <Field
          tag={Col}
          controlTag="select"
          name={FIELD_TEST_NAME}
          component={FormGroup}
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </Field>
      </Formik>
    );

    const formControl = getByTestId(FORM_CONTROL_TEST_ID) as HTMLElement;

    expect(formControl.tagName).toBe('SELECT');
    expect(container.querySelectorAll('option').length).toBe(3);
  });
});
