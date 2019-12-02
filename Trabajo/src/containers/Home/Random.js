import React, { useState, useCallback } from 'react';
import { Button, Grid, Avatar } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { goBack } from 'connected-react-router';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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
      setUsers(data.results);
    }
  });

  return (
    <div>
      <h1>Listado de Usuarios Aleatoreo</h1>
      <Button variant='contained' color='primary' onClick={handleGoBack}>
        Go Back
      </Button>

      {/* {users.map(({ name, picture }) => (
        <div>
          <img src={picture.medium} alt={name.first} />
          <p>
            {name.first} {name.last}
          </p>
        </div>
      ))} */}

      <Paper>
        <Table aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>Picture</TableCell>
              <TableCell align='left'>Information</TableCell>
              <TableCell align='right'>Save</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {users.map(({ name, picture, login }) => (
              <TableRow key={login.uuid}>
                <TableCell align='left'>
                  <Avatar src={picture.thumbnail} alt='Avatar' />
                </TableCell>
                <TableCell align='left'>
                  {`${name.first} ${name.last}`}
                </TableCell>
                <TableCell align='right'>{}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
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
