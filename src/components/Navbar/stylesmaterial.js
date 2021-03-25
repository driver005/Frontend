import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 50px',
  },
  heading: {
    color: 'rgba(0,183,255, 1)',
    textDecoration: 'none',
  },
  image: {
    marginLeft: '15px',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '400px',
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '400px',
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
    padding: '0px 20px',
    color: '#c2d6e0',
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  logout: {
    borderRadius: '100px',
    backgroundColor: 'rgb(56 152 236 / 0%)',
    border: '0.5px solid #fff',
    padding: '16px 45px',
    
    '&:hover': {
      color: '#4F3EF5',
      backgroundColor: '#fff',
    },
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
    
  },
}));
