import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  container: {
    paddingLeft: 0,
    paddingRight: 0
  },
  grid: {
    display: 'flex',
    height: '100vh',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('md')]: {
      backgroundPosition: '25% 75%'
    },
    [theme.breakpoints.up('lg')]: {
      backgroundPosition: 'center'
    }
  },

  btUser: {
    marginLeft: 50,
    marginRight: 50
  },

  btRandom: {
    marginLeft: 50,
    marginRight: 50
  }
}));

export default useStyles;
