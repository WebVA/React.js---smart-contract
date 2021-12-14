import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(0),
      minWidth: 120,
      float: 'left',
    },
    select: {
      minWidth: 100,
      height: '39px',
      marginTop: '10px',
    },
    userField: {
      marginTop: '10px',
    },
    inputLabel: {
      marginTop: '-5px',
    },
    selectEmpty: {
      marginTop: theme.spacing(1),
    },
    searchBtn: {
      marginRight: '1px',
      height: '40px',
      // verticalAlign: 'top',
      marginTop: '9px',
    },
    margin: {
      margin: theme.spacing(1),
    },
    textField: {
      // width: '25ch',
      marginLeft: theme.spacing(-2),
      marginRight: theme.spacing(0),
      width: 250,
      textAlign: 'center',
    },
    red: {
      color: 'red',
    },

    // -------menu style-----
    menu: {
      color: 'black',
      backgroundColor: 'white',
      borderRadius: '100px',
      borderColor: 'black',
      borderBottomWidth: '1px',
      borderTopWidth: '0px',
      borderRight: '0px',
      borderLeft: '0px',
      borderStyle: 'solid',
    },

    root: {
      '& > *': {
        margin: theme.spacing(0),
        width: '20ch',
      },
    },

    // ---clock style---
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      marginRight: '10px',
      marginBottom: '10px',
    },
    // textField: {
    //   marginLeft: theme.spacing(1),
    //   marginRight: theme.spacing(1),
    //   width: 200,
    // },
  }),
)
