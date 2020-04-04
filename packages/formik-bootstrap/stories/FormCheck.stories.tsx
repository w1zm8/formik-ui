import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Formik, Field, Form } from 'formik';
import { action } from '@storybook/addon-actions';
import { FormCheck } from '../src';

type FormValues = {
  enabled: boolean;
};

export const FormCheckStory: React.FC = () => {
  return (
    <Container>
      <Formik<FormValues>
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(false);
          action('submit')(values);
        }}
        initialValues={{
          enabled: false,
        }}
      >
        <Form>
          <Row>
            <Col md="5">
              <Field
                label="Enabled"
                name="enabled"
                id="enabled"
                component={FormCheck}
              />
              <Button type="submit">Submit</Button>
            </Col>
          </Row>
        </Form>
      </Formik>
    </Container>
  );
};
