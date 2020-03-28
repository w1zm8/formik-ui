import * as React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Formik, Field } from 'formik';
import { FormControl } from '../src';
import {
  FIELD_TEST_NAME,
  FIELD_TEST_TYPE_EMAIL,
  FIELD_TEST_ID,
  FIELD_TEST_CLASS_NAME,
  FIELD_TEST_SIZE_SM,
  FIELD_TEST_VALUE,
  FIELD_TEST_PLACEHOLDER,
} from './constants';

describe('FormControl', () => {
  it('renders without crashing', () => {
    const { getByLabelText } = render(
      <Formik onSubmit={() => {}} initialValues={{}}>
        <Field component={FormControl} />
      </Formik>
    );

    expect(getByLabelText('form-control')).toBeTruthy();
  });
  it("renders with general Field's attributes", () => {
    const { getByLabelText } = render(
      <Formik onSubmit={() => {}} initialValues={{}}>
        <Field
          name={FIELD_TEST_NAME}
          type={FIELD_TEST_TYPE_EMAIL}
          id={FIELD_TEST_ID}
          className={FIELD_TEST_CLASS_NAME}
          placeholder={FIELD_TEST_PLACEHOLDER}
          component={FormControl}
        />
      </Formik>
    );

    const formControl = getByLabelText('form-control');

    expect(formControl.getAttribute('name')).toBe(FIELD_TEST_NAME);
    expect(formControl.getAttribute('type')).toBe(FIELD_TEST_TYPE_EMAIL);
    expect(formControl.id).toBe(FIELD_TEST_ID);
    expect(formControl.className).toMatch(FIELD_TEST_CLASS_NAME);
    expect(formControl.getAttribute('placeholder')).toBe(
      FIELD_TEST_PLACEHOLDER
    );
  });
  it('renders with additional FormControl options', () => {
    const { getByLabelText } = render(
      <Formik onSubmit={() => {}} initialValues={{}}>
        <Field
          disabled
          name={FIELD_TEST_NAME}
          size={FIELD_TEST_SIZE_SM}
          component={FormControl}
        />
      </Formik>
    );

    const formControl = getByLabelText('form-control') as HTMLElement;

    expect(formControl.className).toMatch(`form-control-${FIELD_TEST_SIZE_SM}`);
    expect(formControl).toHaveAttribute('disabled');
  });
  it('renders value', () => {
    const { getByLabelText } = render(
      <Formik
        onSubmit={() => {}}
        initialValues={{
          [FIELD_TEST_NAME]: FIELD_TEST_VALUE,
        }}
      >
        <Field name={FIELD_TEST_NAME} component={FormControl} />
      </Formik>
    );

    const formControl = getByLabelText('form-control') as HTMLElement;

    expect(formControl.getAttribute('value')).toBe(FIELD_TEST_VALUE);
  });
  it('renders select and options', () => {
    const { getByLabelText, container } = render(
      <Formik
        onSubmit={() => {}}
        initialValues={{
          [FIELD_TEST_NAME]: FIELD_TEST_VALUE,
        }}
      >
        <Field tag="select" name={FIELD_TEST_NAME} component={FormControl}>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </Field>
      </Formik>
    );

    const formControl = getByLabelText('form-control') as HTMLElement;

    expect(formControl.tagName).toBe('SELECT');
    expect(container.querySelectorAll('option').length).toBe(3);
  });
  it('renders textarea', () => {
    const { getByLabelText } = render(
      <Formik
        onSubmit={() => {}}
        initialValues={{
          [FIELD_TEST_NAME]: FIELD_TEST_VALUE,
        }}
      >
        <Field tag="textarea" name={FIELD_TEST_NAME} component={FormControl} />
      </Formik>
    );

    const formControl = getByLabelText('form-control') as HTMLElement;

    expect(formControl.tagName).toBe('TEXTAREA');
    expect(formControl.textContent).toBe(FIELD_TEST_VALUE);
  });
  it('renders invalid validation view', () => {
    const { getByLabelText } = render(
      <Formik
        onSubmit={() => {}}
        initialValues={{
          [FIELD_TEST_NAME]: FIELD_TEST_VALUE,
        }}
      >
        <Field isInvalid name={FIELD_TEST_NAME} component={FormControl} />
      </Formik>
    );

    const formControl = getByLabelText('form-control') as HTMLElement;

    expect(formControl.className).toMatch('is-invalid');
  });
});
