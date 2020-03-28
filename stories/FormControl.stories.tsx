import React from 'react';
import { Button, ButtonToolbar, Container, Row, Col } from 'react-bootstrap';
import { Formik, Field, Form } from 'formik';
import { action } from '@storybook/addon-actions';
import { FormControl } from '../src';

type FormValues = {
  email: string;
  username: string;
  password: string;
};

export const FormControlStory: React.FC = () => {
  return (
    <Container>
      <Formik<FormValues>
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(false);
          action('submit')(values);
        }}
        initialValues={{
          email: '',
          username: '',
          password: '',
        }}
      >
        <Form>
          <Row>
            <Col md="4">
              <Field
                type="email"
                name="email"
                component={FormControl}
                placeholder="Your Email"
              />
              <br />
              <Field
                name="username"
                component={FormControl}
                placeholder="Your username"
              />
              <br />
              <Field
                type="password"
                name="password"
                component={FormControl}
                placeholder="Your password"
              />
              <br />
              <ButtonToolbar>
                <Button type="submit" variant="primary">
                  Submit
                </Button>
                <Button type="reset" variant="light">
                  Clear
                </Button>
              </ButtonToolbar>
            </Col>
          </Row>
        </Form>
      </Formik>
    </Container>
  );
};
