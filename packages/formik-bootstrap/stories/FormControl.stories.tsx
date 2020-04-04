import React from 'react';
import { Button, ButtonToolbar, Container, Row, Col } from 'react-bootstrap';
import { Formik, Field, Form } from 'formik';
import { action } from '@storybook/addon-actions';
import { FormControl } from '../src';

type FormValues = {
  email: string;
  username: string;
  password: string;
  rating: string;
  comment: string;
  size: string;
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
          rating: '',
          comment: '',
          size: '',
        }}
      >
        <Form>
          <Row>
            <Col md="4">
              <Field
                size="lg"
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
                size="sm"
                type="password"
                name="password"
                component={FormControl}
                placeholder="Your password"
              />
              <br />
              <Field
                tag="select"
                name="rating"
                component={FormControl}
                placeholder="Select..."
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Field>
              <br />
              <Field
                tag="textarea"
                name="comment"
                component={FormControl}
                placeholder="Enter your comment"
              />
              <br />
              <Field type="range" name="size" component={FormControl} />
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
