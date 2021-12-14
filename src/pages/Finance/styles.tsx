import { withStyles, createStyles, Theme, makeStyles } from '@material-ui/core/styles'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import { InputBase } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      textAlign: 'center',
      padding: '2.5% 10%',
      width: '100%',
    },
    formcontrol: {
      fontSize: '14px',
      fontWeight: 500,
      margin: theme.spacing(1),
      minWidth: 120,
    },
    break: {
      [theme.breakpoints.down('xs')]: {
        marginTop: '30px !important',
        marginBottom: '15px',
      },
    },

    styledDiv: {
      maxWidth: '1400px',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    mainTitle: {
      marginLeft: '15px',
      marginTop: '24px',
      marginBottom: '20px',
      color: `${localStorage.appTheme === 'darkTheme' ? '#e5ecf3' : '#4a4f55'}`,
    },
    titleDescription: {
      color: theme.palette.text.secondary,
    },
    title: {
      marginBottom: theme.spacing(2),
    },
    textfieldLabel: {
      margin: theme.spacing(2, 0),
    },
    form: {
      width: '100%',
    },
    formControl: {
      width: '100%',
    },
    categories: {
      margin: '2rem 0',
    },
    symbolImg: {
      width: 42,
    },
    textEffect: {
      float: 'right',
      paddingLeft: '10px',
      margin: '5px',
      borderRadius: '5px',
      cursor: 'pointer',
      // color: "blue",
      // transition: "all 2s ease",
      // transitionProperty: "background-color, color",
      // "&:hover": {
      //   color: "#66BB6A",
      // },
      animation: `$myEffect 1000ms infinite ease`,
    },
    '@keyframes myEffect': {
      '0%': { color: '#29B6F6' },
      '50%': { color: '#EF5350' },
      '100%': {
        color: '#66BB6A',
      },
    },
    textField: {
      width: '100%',
      height: 250,
      borderRadius: 5,
      border: '1px solid lightgrey',
      overflowY: 'auto',
      '& input': {
        innerHeight: '100%',
      },
      '& input::placeholder': {
        fontSize: '8px',
      },
    },
    codeInput: {
      width: '100%',
      padding: '3.5px',
      borderRadius: 0,
      '& fieldset': {
        border: 'none',
        outerHeight: '100%',
      },
    },
    submitBtn: {
      backgroundColor: '#EF802F',
      color: 'white',
      margin: theme.spacing(2, 0),
      float: 'right',
    },
    introDiv: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
    },
    description: {
      color: theme.palette.text.secondary,
    },
    tabPane: {
      backgroundColor: theme.palette.primary.main,
      borderRadius: '8px',
      // color: theme.palette.primary.contrastText,
    },
    thead: {
      borderBottom: `1px solid grey`,
    },
    thtitle: {
      // color: theme.palette.primary.contrastText,
      padding: '10px 15px',
      fontWeight: 500,
      borderBottom: 'none',
      fontSize: '13px',
      backgroundColor: '#E0E0E0',
    },
    tbody: {
      borderBottom: 'none',
      fontSize: '12px',
    },
    tbOverflow: {
      borderBottom: 'none',
      fontSize: '12px',
      whiteSpace: 'nowrap',
      width: '100px',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
    search: {
      width: '200px',
      float: 'right',
      marginBottom: '15px',
      marginTop: '15px',
      backgroundColor: '#E0E0E0',
    },
    cdeposit: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      fontWeight: 500,
      borderRadius: '7px',
      padding: '20px',
    },
    cdephis: {
      // backgroundColor: theme.palette.primary.main,
      // color: theme.palette.primary.contrastText,
      fontWeight: 500,
      marginTop: '15px',
      borderRadius: '7px',
      padding: '20px',
    },
    cbalance: {
      backgroundColor: '#5D78FF',
      color: theme.palette.primary.contrastText,
      padding: '20px',
      lineHeight: 1.5,
      fontSize: '25px',
      textAlign: 'center',
      borderRadius: '7px',
      boxShadow: `${
        localStorage.appTheme === 'darkTheme'
          ? '0 0.5rem 1.2rem hsl(0deg 0% 100% / 6%)'
          : '0 0.5rem 1.2rem rgb(189 197 209 / 20%)'
      }`,
      [theme.breakpoints.down('xs')]: {
        marginTop: '15px !important',
        marginBottom: '15px',
      },
    },
    caddress: {
      backgroundColor: '#fff',
      marginTop: '15px',
      color: '#333333',
      padding: '15px',
      lineHeight: 1.5,
      fontSize: '25px',
      fontWeight: 400,
      borderRadius: '7px',
      boxShadow: `${
        localStorage.appTheme === 'darkTheme'
          ? '0 0.5rem 1.2rem hsl(0deg 0% 100% / 6%)'
          : '0 0.5rem 1.2rem rgb(189 197 209 / 20%)'
      }`,
    },
    cbalgrd: {
      paddingLeft: '15px',
      [theme.breakpoints.down('xs')]: {
        paddingLeft: '0px',
      },
    },
    paper: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      borderRadius: '7px',
    },

    root1: {
      background: `${localStorage.appTheme === 'darkTheme' ? '#0B0E11' : '#fff'}`,
      paddingBottom: '30px',
      height: 'calc(100vh -60px)',

      '@media (min-width: 1200px)': {
        minHeight: '120vh',
      },
      width: '100%',
    },
    link: {
      textDecoration: 'none',
      padding: '6px 12px',
      width: 'max-content',
      height: 'max-content',
      alignSelf: 'center',
    },
    hover: {
      cursor: 'pointer',
      '&:hover': {
        color: theme.palette.text.disabled,
      },
    },
    appbar: {
      background: '#181a20',
      '&.MuiPaper-elevation4': {
        boxShadow: 'none',
      },
    },
    toolbar: {
      justifyContent: 'space-between',
      display: 'flex',
      '&.MuiToolbar-gutters': {
        padding: '0 24px 0 16px',
        [theme.breakpoints.down(760)]: {
          padding: '0 0 0 8px',
        },
      },
    },
    fontColor1: {
      color: '#fff',
      marginLeft: '0px',
    },
    button: {
      backgroundColor: '#4CAF50',
      fontSize: '12px',
      textTransform: 'none',
      color: '#fff',
      '&:hover': {
        backgroundColor: '#4CAF70',
      },
    },
    draw: {
      backgroundColor: '#026BFB',
      fontSize: '12px',
      textTransform: 'none',
      color: '#fff',
      '&:hover': {
        backgroundColor: '#028BFF',
      },
    },
    buy: {
      cursor: 'pointer',
      margin: '0px',
      padding: '8px 24px',
      fontSize: '16px',
      textTransform: 'none',
      color: theme.palette.secondary.main,
      fontWeight: 500,
      '&:hover': {
        color: theme.palette.secondary.dark,
      },
    },
    opt: {
      backgroundColor: '#026BFB',
      fontSize: '12px',
      textTransform: 'none',
      color: '#fff',
      height: 'fit-content',
      width: '82px',
      marginTop: 'auto',
      marginBottom: 'auto',
      marginLeft: '20px',
      lineHeight: 'normal',
      '&:hover': {
        backgroundColor: '#028BFF',
      },
    },
    textfld: {
      '& label.Mui-focused': {
        color: theme.palette.secondary.main,
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: 'yellow',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: 'white',
        },
        '&:hover fieldset': {
          borderColor: 'white',
        },
        '&.Mui-focused fieldset': {
          borderColor: 'yellow',
        },
      },
    },
    payment: {
      paddingTop: '15px',
      '& label.Mui-focused': {
        color: 'white',
      },
    },
    walletxt: {
      color: theme.palette.secondary.dark,
      fontSize: '24px',
      fontWeight: 600,
      padding: '16px',
    },
    container: {
      marginLeft: '5%',
      marginRight: '5%',
    },
    themeIcon: {
      fill: '#fff',
      '&:hover': {
        fill: '#c99400',
      },
    },
  }),
)

export default useStyles

export const StyledVerticalTabs = withStyles((theme: Theme) => ({
  root: {
    borderRadius: '.5rem',
    border: `${localStorage.appTheme === 'darkTheme' ? '1px solid #474d57' : '1px solid #eaecef'}`,
    width: '100%',
  },
  indicator: {
    background: 'none',
  },
}))(Tabs)

export const StyledVerticalTab = withStyles((theme: Theme) => ({
  root: {
    textTransform: 'none',
    fontSize: '13px',
    fontWeight: 500,
    maxWidth: '100%',
    minHeight: 42,
    color: theme.palette.primary.contrastText,
    '&:hover': {
      backgroundColor: `${localStorage.appTheme === 'darkTheme' ? '#422d1d' : '#fde0cb'}`,
    },
    '&$selected': {
      color: 'white',
      backgroundColor: `${localStorage.appTheme === 'darkTheme' ? '#EF802F' : '#EF802F'}`,
    },
    '&:focus': {},
  },
  selected: {},
}))(Tab)

export const StyledOutlineInput = withStyles((theme) => ({
  root: {
    border: `${localStorage.appTheme === 'darkTheme' ? '1px solid #474d57' : '1px solid #eaecef'}`,
    borderRadius: '4px',
    width: '100%',
    color: theme.palette.secondary.dark,
    '&:hover': {
      border: '1px solid #f0b90b',
    },
    padding: '0.3rem 0.5rem',
  },
  input: {
    background: 'transparent',
    // border: "none",
    '&:-internal-autofill-selected': {
      background: 'transparent !important',
    },
  },
}))(InputBase)
