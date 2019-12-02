import React, { useState, useCallback } from 'react';
import { Button, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { goBack } from 'connected-react-router';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';

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

  // function createData(picture, info, button) {
  //   return { picture, info, button };
  // }

  // const rows = [
  //   createData('Frozen yoghurt', 159, 6.0),
  //   createData('Ice cream sandwich', 237, 7.0),
  //   createData('Eclair', 262, 16.0),
  //   createData('Cupcake', 305, 3.7),
  //   createData('Gingerbread', 356, 16.0)
  // ];

  return (
    <div>
      <h1>Listado de Usuarios Aleatoreo</h1>
      <Button variant='contained' color='primary' onClick={handleGoBack}>
        Go Back
      </Button>

      {users.map(({ name, picture }) => (
        <div>
          <img src={picture.medium} alt={name.first} />
          <p>
            {name.first} {name.last}
          </p>
        </div>
      ))}

      {/* <Paper>
        <Table aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>Picture</TableCell>
              <TableCell align='left'>Information</TableCell>
              <TableCell align='right'>Save</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.picture}>
                <TableCell component='th' scope='row'>
                  {row.picture}
                </TableCell>
                <TableCell align='left'>{row.info}</TableCell>
                <TableCell align='right'>{row.button}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper> */}
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
