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
    justifyContent: 'center'
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
