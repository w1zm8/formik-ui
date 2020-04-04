import React from 'react';
import { Button, ButtonToolbar, Container, Row, Col } from 'react-bootstrap';
import { Formik, Field, Form } from 'formik';
import { action } from '@storybook/addon-actions';
import * as Yup from 'yup';
import { FormGroup } from '../src';

type FormValues = {
  email: string;
  username: string;
  password: string;
  rating: string;
  comment: string;
  size: string;
};

export const FormGroupStory: React.FC = () => {
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
      >
        <Form>
          <Row>
            <Col md="5">
              <Field
                label="Email"
                size="lg"
                type="email"
                name="email"
                component={FormGroup}
                placeholder="Your Email"
              />
              <Field
                label="Username"
                name="username"
                component={FormGroup}
                placeholder="Your username"
              />
              <Field
                label="Password"
                size="sm"
                type="password"
                name="password"
                component={FormGroup}
                placeholder="Your password"
              />
              <Field
                label="Rating"
                controlTag="select"
                name="rating"
                component={FormGroup}
                placeholder="Select..."
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Field>
              <Field
                label="Comment"
                controlTag="textarea"
                name="comment"
                rows={3}
                component={FormGroup}
                placeholder="Enter your comment"
              />
              <Field
                label="Range"
                type="range"
                name="size"
                component={FormGroup}
              />
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
