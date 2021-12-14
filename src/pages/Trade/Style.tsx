import { createStyles, makeStyles, Theme, } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
            float: 'left',
        },
        select: {
            minWidth: 100,
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },
        marginRight: {
            marginRight: '10px',
        },
        margin: {
            margin: theme.spacing(1),
        },
        textField: {
            width: '25ch',
        },
        red: {
            color: "red",
        },
        datepicker: {
            width: 220,
            float: 'left',
        }
    })
);