import React, { useState, useCallback } from 'react';
import { Button, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { goBack } from 'connected-react-router';

import useMount from '../../hooks/useMount';
import jsonApi from '../../services/jsonApi';

import useStyles from './styles';

const Random = () => {
  const dispatch = useDispatch();
  const handleGoBack = useCallback(() => dispatch(goBack()), [dispatch]);

  const [users, setUsers] = useState([]);
  const estilo = useStyles();

  useMount(async () => {
    const { data } = await jsonApi().getUsers();

    if (Array.isArray) {
      setUsers(data);
    }
  });

  return (
    <div>
      <h1>Listado de Usuarios Aleatoreo</h1>
      <Grid className={estilo.grid}>
        <Button variant='contained' color='primary' onClick={handleGoBack}>
          Go Back
        </Button>
      </Grid>

      <div />
    </div>
  );
};

export default Random;
