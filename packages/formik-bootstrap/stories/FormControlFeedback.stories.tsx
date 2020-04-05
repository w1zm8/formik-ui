import React from 'react';
import { Button, ButtonToolbar, Container, Row, Col } from 'react-bootstrap';
import { Formik, Field, ErrorMessage, Form } from 'formik';
import { action } from '@storybook/addon-actions';
import * as Yup from 'yup';
import { FormControl } from '../src';

type FormValues = {
  email: string;
  username: string;
  password: string;
  rating: string;
  comment: string;
  size: string;
};

export const FormControlFeedbackStory: React.FC = () => {
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
        validationSchema={Yup.object({
          email: Yup.string()
            .email()
            .required(),
          username: Yup.string()
            .required()
            .min(5),
          password: Yup.string()
            .required()
            .min(8),
          comment: Yup.string().max(255),
        })}
        initialTouched={{
          comment: true,
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
              <ErrorMessage name="email" component={FormControl.Feedback} />
              <br />
              <Field
                name="username"
                component={FormControl}
                placeholder="Your username"
              />
              <ErrorMessage name="username" component={FormControl.Feedback} />
              <br />
              <Field
                size="sm"
                type="password"
                name="password"
                component={FormControl}
                placeholder="Your password"
              />
              <ErrorMessage name="password" component={FormControl.Feedback} />
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
              <ErrorMessage name="comment" component={FormControl.Feedback} />
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
