import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { goBack } from 'connected-react-router';
import SaveIcon from '@material-ui/icons/Save';
import {
  Button,
  Grid,
  Avatar,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  IconButton
} from '@material-ui/core';

import useMount from '../../hooks/useMount';
import jsonApi from '../../services/jsonApi';
import { importUsers, saveUser } from '../../actions/random';

const Random = () => {
  const dispatch = useDispatch();
  const handleGoBack = useCallback(() => dispatch(goBack()), [dispatch]);
  const { users } = useSelector(({ random }) => random);

  const handleImportUsers = useCallback(e => dispatch(importUsers(e)), [
    dispatch
  ]);

  useMount(async () => {
    const { data } = await jsonApi().getUsers();

    if (Array.isArray(data.results)) {
      handleImportUsers(data.results);
    }
  });

  const handleSaveUser = useCallback(index => () => dispatch(saveUser(index)), [
    dispatch
  ]);

  return (
    <div>
      <h1>Listado de Usuarios Aleatoreo</h1>
      <Button variant='contained' color='primary' onClick={handleGoBack}>
        Go Back
      </Button>

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
            {users.map((user, index) => (
              <TableRow key={user.login.uuid}>
                <TableCell align='left'>
                  <Avatar src={user.picture.thumbnail} alt='Avatar' />
                </TableCell>
                <TableCell align='left'>
                  <Grid>
                    <Grid>{`${user.name.first} ${user.name.last}`}</Grid>
                    <Grid>{user.email}</Grid>
                  </Grid>
                </TableCell>
                <TableCell align='right'>
                  <IconButton
                    color='primary'
                    aria-label='add to shopping cart'
                    onClick={handleSaveUser(index)}
                  >
                    <SaveIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
      <div />
    </div>
  );
};

export default Random;
