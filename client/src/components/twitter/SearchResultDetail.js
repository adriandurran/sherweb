import React from 'react';
import {
  Grid,
  Card,
  CardContent,
  CardHeader,
  CardActions,
  Avatar,
  Typography,
  Button,
  Checkbox,
  FormControlLabel
} from '@material-ui/core';
import { Link } from '@reach/router';

import styles from '../../css/SearchResultDetail.module.css';

const SearchDetail = ({ detail }) => {
  const { user } = detail;
  return (
    <Grid item xs={12} sm={4}>
      <Card>
        <CardHeader
          avatar={
            <Avatar
              aria-label="user"
              className={styles.avatar}
              alt={user.screen_name}
              src={user.profile_image_url_https}
            />
          }
          title={user.name}
          subheader={user.description}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {detail.full_text}
          </Typography>
          {detail.isToxic && (
            <FormControlLabel
              control={
                <Checkbox
                  checked={detail.isToxic}
                  // onChange={handleChange('checkedB')}
                  // value="checkedB"
                  color="primary"
                />
              }
              label="Toxic tweet?"
            />
          )}
        </CardContent>
        <CardActions>
          <Button
            size="small"
            color="primary"
            component={Link}
            to={`/detailed/${detail.id_str}`}
          >
            View detail
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default SearchDetail;
