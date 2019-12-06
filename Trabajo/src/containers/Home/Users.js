import React, { useCallback } from 'react';
import { Button, Grid, Avatar } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { goBack } from 'connected-react-router';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import { deleteUser, editUser } from '../../actions/random';

const Users = () => {
  const dispatch = useDispatch();
  const { savedUsers } = useSelector(({ random }) => random);
  const handleGoBack = useCallback(() => dispatch(goBack()), [dispatch]);

  const handleDeleteUser = useCallback(
    index => () => dispatch(deleteUser(index)),
    [dispatch]
  );
  const handleEditUser = useCallback(index => () => dispatch(editUser(index)), [
    dispatch
  ]);

  return (
    <div>
      <h1>Listado de Usuarios Guardados</h1>
      <Button variant='contained' color='primary' onClick={handleGoBack}>
        Go Back
      </Button>

      <Paper>
        <Table aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>Picture</TableCell>
              <TableCell align='left'>Information</TableCell>
              <TableCell align='right'>Edit</TableCell>
              <TableCell align='right'>Delete</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {savedUsers.map((user, index) => (
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
                  <IconButton onClick={handleEditUser(index)}>
                    <EditIcon />
                  </IconButton>
                </TableCell>
                <TableCell align='right'>
                  <IconButton onClick={handleDeleteUser(index)}>
                    <DeleteIcon />
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

export default Users;
