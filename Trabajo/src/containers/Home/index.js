import React, { useCallback } from 'react';
import { Button, Container, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';

import { RANDOM, USERS } from '../../routes/paths';

import useStyles from './styles';

const Home = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const handleNavigate = useCallback(path => () => dispatch(push(path)), [
    dispatch
  ]);

  return (
    <Container className={classes.container} maxWidth={false}>
      <Grid className={classes.grid}>
        <Button
          variant='contained'
          color='primary'
          className={classes.btRandom}
          onClick={handleNavigate(RANDOM)}
        >
          RANDOM USER
        </Button>
        <Button
          variant='contained'
          color='secondary'
          className={classes.btUser}
          onClick={handleNavigate(USERS)}
        >
          USERS
        </Button>
      </Grid>
    </Container>
  );
};

export default Home;
