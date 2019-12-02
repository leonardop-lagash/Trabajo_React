import React, { useState, useCallback } from 'react';
import { Button, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { goBack } from 'connected-react-router';

import useMount from '../../hooks/useMount';
import jsonApi from '../../services/jsonApi';

import useStyles from './styles';

const Users = () => {
  const [users, setUsers] = useState([]);
  const dispatch = useDispatch();
  const estilo = useStyles();
  const handleGoBack = useCallback(() => dispatch(goBack()), [dispatch]);

  useMount(async () => {
    const { data } = await jsonApi().getUsers();

    if (Array.isArray) {
      setUsers(data);
    }
  });

  return (
    <div>
      <h1>Listado de Usuarios </h1>
      <Grid className={estilo.grid}>
        <Button variant='contained' color='primary' onClick={handleGoBack}>
          Go Back
        </Button>
      </Grid>
    </div>
  );
};

export default Users;
