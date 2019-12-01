import React, { useState, useCallback } from 'react';
import { Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { goBack } from 'connected-react-router';

import useMount from '../../hooks/useMount';
import jsonApi from '../../services/jsonApi';

const Random = () => {
  const dispatch = useDispatch();
  const handleGoBack = useCallback(() => dispatch(goBack()), [dispatch]);

  const [users, setUsers] = useState([]);

  useMount(async () => {
    const { data } = await jsonApi().getUsers();

    if (Array.isArray) {
      setUsers(data);
    }
  });

  return (
    <div>
      <h1>Listado de Usuarios Aleatoreo</h1>
      <Button variant='contained' color='primary' onClick={handleGoBack}>
        Go Back
      </Button>
      <div />
    </div>
  );
};

export default Random;
