import React from 'react';
import { Paper, Typography, TextField, Button, Icon } from '@material-ui/core';
import { Form, Field } from 'react-final-form';
import { useDispatch } from 'react-redux';

import styles from '../../css/SearchForm.module.css';

import { postTwitterSearch } from '../../actions/twitter';

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
  const dispatch = useDispatch();

  const onSubmit = async (values, form) => {
    console.log(values);

    // need to add some error checking in here
    // if the value is missing........

    dispatch(postTwitterSearch(values));

    setTimeout(() => {
      form.reset();
    }, 300);
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
                name="location"
                component={TextFieldAdapter}
                label="Location"
                className={styles.textFields}
              />
              <Field
                name="radius"
                type="number"
                component={TextFieldAdapter}
                label="Radius (km)"
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
