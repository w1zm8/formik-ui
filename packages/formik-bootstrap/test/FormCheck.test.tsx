import * as React from 'react';
import { Formik, Field, Form } from 'formik';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { FormCheck, FORM_CHECK_TEST_ID } from '../src';
import {
  FIELD_TEST_LABEL_TEXT,
  FIELD_TEST_TITLE,
  FIELD_TEST_NAME,
  FIELD_TEST_ERROR_TEXT,
} from './constants';
import { Button } from 'react-bootstrap';
import { act } from 'react-dom/test-utils';

describe('FormGroup', () => {
  it('renders without crashing', () => {
    const { getByTestId } = render(
      <Formik onSubmit={() => {}} initialValues={{}}>
        <Field component={FormCheck} />
      </Formik>
    );

    expect(getByTestId(FORM_CHECK_TEST_ID)).toBeTruthy();
  });
  it('renders as checkbox', async () => {
    const onSubmit = jest.fn();
    const { container, getByTestId } = render(
      <Formik
        onSubmit={onSubmit}
        initialValues={{
          [FIELD_TEST_NAME]: false,
        }}
      >
        <Form>
          <Field name={FIELD_TEST_NAME} component={FormCheck} />
          <Button type="submit" data-testid="submit">
            Submit
          </Button>
        </Form>
      </Formik>
    );

    const checkbox = getByTestId(FORM_CHECK_TEST_ID);
    const input = container.querySelector('input') as HTMLInputElement;

    expect(input.getAttribute('type')).toBe('checkbox');
    expect(input.value).toBe('false');

    await act(async () => {
      fireEvent.click(checkbox);
    });

    expect(input.value).toBe('true');
  });
  it('renders label text', () => {
    const { container } = render(
      <Formik
        onSubmit={() => {}}
        initialValues={{
          [FIELD_TEST_NAME]: false,
        }}
      >
        <Field
          label={FIELD_TEST_LABEL_TEXT}
          title={FIELD_TEST_TITLE}
          name={FIELD_TEST_NAME}
          component={FormCheck}
        />
      </Formik>
    );

    const label = container.querySelector('label') as HTMLLabelElement;
    expect(label).toBeTruthy();
    expect(label.textContent).toBe(FIELD_TEST_LABEL_TEXT);
    expect(label.getAttribute('title')).toBe(FIELD_TEST_TITLE);
  });
  it('renders invalid view', () => {
    const { container } = render(
      <Formik
        onSubmit={() => {}}
        initialValues={{
          [FIELD_TEST_NAME]: false,
        }}
        initialErrors={{
          [FIELD_TEST_NAME]: FIELD_TEST_ERROR_TEXT,
        }}
      >
        <Field
          label={FIELD_TEST_LABEL_TEXT}
          title={FIELD_TEST_TITLE}
          name={FIELD_TEST_NAME}
          component={FormCheck}
          isTouchRequired={false}
        />
      </Formik>
    );

    const input = container.querySelector('input');
    const feedback = container.querySelector('.invalid-feedback');

    expect(input).toHaveClass('is-invalid');
    expect(feedback).toBeTruthy();
  });
  it('renders as radio', () => {
    const { container } = render(
      <Formik onSubmit={() => {}} initialValues={{}}>
        <Field component={FormCheck} />
      </Formik>
    );

    const input = container.querySelector('input') as HTMLInputElement;
    expect(input.getAttribute('type')).toBe('checkbox');
  });
});
