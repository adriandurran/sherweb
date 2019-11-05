import React from 'react';
import { Paper, Typography, TextField, Button, Icon } from '@material-ui/core';
import { Form, Field } from 'react-final-form';
import { useDispatch } from 'react-redux';

import styles from '../../css/SearchForm.module.css';

// const required = (value) => (value ? undefined : 'Required');

const TextFieldAdapter = ({ input, meta, ...rest }) => (
  <TextField
    {...input}
    {...rest}
    onChange={(event, value) => {
      return input.onChange(event.target.value);
    }}
    // errorText={meta.touched ? meta.error : ''}
  />
);

const SearchForm = () => {
  const onSubmit = async (values, form) => {
    console.log(values);
    // dispatch(addMessage({ ...values, time: Date.now() }));
    // returnMsg(values.text);
    // setTimeout(() => {
    //     form.reset();
    // }, 300);
  };

  return (
    <Paper className={styles.paper}>
      <Typography variant="h5" component="h3" className={styles.title}>
        Search
      </Typography>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <Field
                name="keywords"
                component={TextFieldAdapter}
                type="text"
                label="Key words"
                className={styles.textFields}
              />
            </div>
            <div>
              <Field
                name="hashtags"
                component={TextFieldAdapter}
                label="Hash tags"
                className={styles.textFields}
              />
            </div>
            <div>
              <Field
                name="Location"
                component={TextFieldAdapter}
                label="Location"
                className={styles.textFields}
              />
            </div>
            <div className={styles.sButton}>
              <Button
                variant="contained"
                color="secondary"
                type="submit"
                disabled={submitting || pristine}
                className={styles.button}
                endIcon={<Icon>search</Icon>}
              >
                Search
              </Button>
            </div>
          </form>
        )}
      />
    </Paper>
  );
};

export default SearchForm;
