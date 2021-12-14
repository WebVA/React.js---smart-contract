import React, { useEffect } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';


// customized components
import dateFormat from 'dateformat'
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { TextField, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      padding: theme.spacing(1),
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    searchButton: {
      margin: theme.spacing(1),
      backgroundColor: '#3498db',
    },
    searchField: {
      width: 200,
    },
    starttextField: {
      // width: '25ch',
      marginLeft: theme.spacing(0),
      marginRight: theme.spacing(0),
      width: 200,
      textAlign: 'center',
    },
    endtextField: {
      // width: '25ch',
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(0),
      width: 200,
      textAlign: 'center',
    },
  }),
);

interface TableSearchProps {
  handleSearchProps: (start_date: number, end_date: number, keyword: string) => void
}

export default function TableSearch(props: TableSearchProps) {
  const classes = useStyles();
  // const dispatch = useAppDispatch();
  const { handleSearchProps } = props;


  //----------search input logic
  const [keyword, setSearchInput] = React.useState("")
  const handleInputSearchText = (e: any) => {
    setSearchInput(e.target.value)
  }
  // --------Date changes----------
  const [start_date, setStartDate] = React.useState(0)
  const handleStartDate = (e: any) => {
    const startTimestamp = Date.parse(dateFormat(e)) / 1000
    setStartDate(startTimestamp)
  }
  // ------
  const [end_date, setEndDate] = React.useState(0)
  const handleEndDate = (e: any) => {
    const endTimestamp = Date.parse(dateFormat(e)) / 1000
    setEndDate(endTimestamp)
  }
  //----------------dispatch logic-----------
  const handleSearch = (e: any) => {
    e.preventDefault()
    handleSearchProps(start_date, end_date, keyword)
  }

  return (

    <form onSubmit={(e) => handleSearch(e)} className={classes.root}>
      <Grid container spacing={3}>
        <Grid item md={7}>
          <Grid container>
            <Grid item md={6}>
              <TextField
                id="datetime-local"
                label="Start Date"
                type="date"
                className={classes.starttextField}
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={(e) => {
                  handleStartDate(e.target.value)
                }}
              />
            </Grid>
            <Grid item md={6}>
              <TextField
                id="datetime-local"
                label="End Date"
                type="date"
                className={classes.endtextField}
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={(e) => {
                  handleEndDate(e.target.value)
                }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={5}>
          <TextField id="standard-basic" label="Search" onChange={(e) => handleInputSearchText(e)} />
          <IconButton type="submit" aria-label="search">
            <SearchIcon />
          </IconButton>
        </Grid>
      </Grid>
    </form>

  );
}