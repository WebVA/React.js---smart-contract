//material-ui
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
//style
export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    '@global': {
      '*::-webkit-scrollbar': {
        width: '5px !important',
        height: '6px',
        background: '#000000',
      },
      '*::-webkit-scrollbar-track': {
        borderRadius: '0px',
        background: '#e5e5e5',
      },
      '*::-webkit-scrollbar-thumb': {
        background: '#999',
        borderRadius: '3px',
      },
    },
    container: {
      boxShadow: '0 0.5rem 1.2rem rgb(189 197 209 / 20%)',
      border: '1px solid #e7eaf3',
      borderRadius: '8px',
      height: 'calc(100vh - 160px)',
    },
    leftDiv: {
      paddingTop: '15px',
      overflow: 'auto',
      // minWidth: '350px',
      height: 'calc(100vh - 160px)',
    },
    activeDiv: {
      marginTop: '3px',
      padding: '10px 0px 10px 12px',
      background: '#f1f1f1',
      boxShadow: 'rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em',
    },
    rightDiv: {
      position: 'relative',
      flexGrow: 1,
      alignItems: 'stretch',
      borderLeft: '1px solid #e7eaf3',
      padding: '20px',
      height: 'calc(100vh - 160px)',
      //   boxShadow: 'rgb(0 0 0 / 14%) 0px 2px 8px 0px',
    },
    userlink: {
      display: 'flex',
      textDecoration: 'none',
      color: 'black',
      background: 'transparent',
      border: 'none',
    },
    avatar: {
      background: '#f50057',
      width: '35px',
      height: '35px',
      marginRight: '8px',
    },
    avatar2: {
      background: '#0abb87!important',

      width: '20px',
      height: '20px',
      marginRight: '8px',
      marginTop: '8px',
      fontSize: '16px',
      marginLeft: '8px',
    },
    chatHeader: {
      width: '100%',
      borderBottom: '1px solid #e7eaf3',
      display: 'flex',
      paddingBottom: '10px',
      minHeight: '40px',
    },
    headerText: {
      fontSize: '16px',
      fontWeight: 600,
      lineHeight: '1rem',
    },
    userDiv: {
      marginTop: '3px',
      padding: '10px 0px 10px 12px',
      '&:hover': {
        background: '#f1f1f4',
        // borderRadius: '8px',
      },
    },
    chatShowDiv: {
      display: 'flex',
      marginTop: '12px',
      paddingBottom: '20px',
      paddingRight: '16px',
    },
    inputDiv: {
      borderTop: '1px solid #e7eaf3',
      padding: '10px 40px',
    },
    inputSide: {
      width: '90%',
      background: '#f1f1f4',
      borderRadius: '24px',
    },
    searchSide: {
      width: '90%',
      borderRadius: '24px',
      boxShadow: '0 0.5rem 1.2rem rgb(189 197 209 / 20%)',
      border: '1px solid #e7eaf3',
      marginLeft: 'auto',
      marginRight: 'auto',
      display: 'flex',
    },
    lastMessage: {
      color: 'gray',
      fontSize: '12px',
      textOverflow: 'ellipsis',
      width: '90px',
      overflow: 'hidden',
    },
    lastMessage1: {
      color: 'gray',
      fontSize: '12px',
      marginTop: '4px',
    },
    showInfo: {
      textAlign: 'start',
    },
    searchIcon: {
      fill: 'gray',
      marginTop: 'auto',
      marginBottom: 'auto',
      paddingRight: '10px',
    },
    input: {
      width: '90%',
      padding: '10px 0px 10px 10px',
      border: ' none',
      background: 'transparent',
      '&:focus:not(.focus-visible)': {
        outline: 'none',
      },
    },
    sendBtn: {
      borderRadius: '24px',
      marginLeft: '10px',
      background: '#00acc1',
    },
    textDiv: {
      height: 'calc(100vh - 290px)',
      overflow: 'auto',
    },
    text1: {
      background: '#ebebeb',
      color: '#252423',
      fontSize: '14px',
      lineHeight: '22px',
      padding: '8px 10px',
      lineBreak: 'anywhere',
      borderTopRightRadius: '8px',
      borderBottomLeftRadius: '8px',
      borderBottomRightRadius: '8px',
      // maxWidth: '80%',
    },
    text2: {
      background: '#0a80ff',
      color: '#fff',
      fontSize: '14px',
      lineHeight: '22px',
      padding: '8px 10px',
      marginLeft: 'auto',
      lineBreak: 'anywhere',
      borderTopLeftRadius: '8px',
      borderTopRightRadius: '8px',
      borderBottomLeftRadius: '8px',
      marginRight: '10px',
      // maxWidth: '70%',
    },
    right: {
      marginLeft: 'auto',
    },
    time: {
      textAlign: 'end',
      marginRight: '10px',
      fontSize: '12px',
    },
    backText: {
      fontSize: '16px',
      color: '#828282',
      fontWeight: 300,
    },
    backImg: {
      width: '200px',
      height: '200px',
    },
    backDiv: {
      textAlign: 'center',
      marginTop: '15%',
    },
  }),
)
