import React from 'react';
import {
  Grid,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  CardActions,
  Avatar,
  Typography
} from '@material-ui/core';
import { formatDistanceToNow } from 'date-fns';

import styles from '../../css/SearchResultDetail.module.css';

const SearchDetail = ({ detail }) => {
  const { user } = detail;
  return (
    <Grid item xs={12} sm={6}>
      <Card>
        <CardHeader
          avatar={
            <Avatar
              aria-label="user"
              className={styles.avatar}
              alt="Remy Sharp"
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
        </CardContent>
      </Card>
    </Grid>
  );
};

export default SearchDetail;
