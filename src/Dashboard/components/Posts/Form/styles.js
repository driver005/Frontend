
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
    '& .MuiFormLabel-root': {
      color: "#4e42ffde !important",
    },
    '& .MuiInputBase-root': {
      color: 'rgb(255 255 255)',
    },
    '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: '#1f58f9de',
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: '#3f51b557',
    },
  },
  paper: {
    padding: theme.spacing(2),
    backgroundColor: '#3837374d',
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    color: "#4e42ffde !important",
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  buttonSubmit: {
    marginBottom: 10,
  },
}));
