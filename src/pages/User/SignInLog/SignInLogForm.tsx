import React from 'react';
import { useForm } from "react-hook-form";
// @material-ui/core
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
// customized components
import Button from '../../../components/CustomButtons/Button';
// hook & actions
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { createSignInLog, updateSignInLog } from "../../../store/User/SignInLog";
import { selectSignInLogList } from '../../../store/User/SignInLog/selectors';
import { ISignInLogData } from '../../../types/User';
import { useStyles } from '../Style';

function SignInLogForm({ ...props }: any) {
    const classes = useStyles();
    const { open, handleClose, currentId, setCurrentId } = props;

    const dispatch = useAppDispatch();

    const initialState = {
        id: 0,
        userName: '',
        typeOf: '',
        content: '',
        operatingIP: '',
        status: false
    };

    const [signInLogData, setSignInLogData] = React.useState<ISignInLogData>(initialState);
    const signInLogList = useAppSelector(selectSignInLogList);

    const signInLogDetails = currentId ? signInLogList.find((c:any) => c.id === currentId) : null;


    React.useEffect(() => {
        if (signInLogDetails) setSignInLogData(signInLogDetails);
    }, [signInLogDetails]);

    const clearData = () => {
        setSignInLogData(initialState);
        setCurrentId(0);
    };

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors }
    } = useForm<any>();
    const onSubmit = (data: any, event: any) => {
        event.preventDefault();
        handleClose();
        if (currentId === 0)
            dispatch(createSignInLog(signInLogData));
        else
            dispatch(updateSignInLog(signInLogData));
        clearData();
    };


    //-----------------------------------------------------------------
    return (
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <form onSubmit={handleSubmit(onSubmit)}>
                <DialogTitle id="form-dialog-title">SignInLog Management {` >> ${currentId === 0 ? 'Add' : 'Update'} SignInLog`}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please Input the signInLog information.
                    </DialogContentText>

                    <TextField
                        autoFocus
                        margin="dense"
                        id="userName"
                        label="UserName"
                        type="input"
                        fullWidth
                        {...register("userName", {
                            required: true,
                        })}
                        value={signInLogData.userName}
                        onChange={(e) =>
                            setSignInLogData(prev => {
                                setValue("userName", e.target.value, { shouldValidate: true });
                                return {
                                    ...prev,
                                    userName: e.target.value
                                };
                            })
                        }
                    />
                    <TextField
                        margin="dense"
                        id="typeOf"
                        label="TypeOf"
                        type="input"
                        fullWidth
                        {...register("typeOf", {
                            required: true,
                        })}
                        value={signInLogData.typeOf}
                        onChange={(e) =>
                            setSignInLogData(prev => {
                                setValue("typeOf", e.target.value, { shouldValidate: true });
                                return {
                                    ...prev,
                                    typeOf: e.target.value
                                };
                            })
                        }
                    />
                    <TextField
                        margin="dense"
                        id="content"
                        label="Content"
                        type="input"
                        fullWidth
                        {...register("content", {
                            required: true,
                        })}
                        value={signInLogData.content}
                        onChange={(e) =>
                            setSignInLogData(prev => {
                                setValue("content", e.target.value, { shouldValidate: true });
                                return {
                                    ...prev,
                                    content: e.target.value
                                };
                            })
                        }
                    />
                    <TextField
                        margin="dense"
                        id="operatingIP"
                        label="OperatingIP"
                        type="input"
                        fullWidth
                        {...register("operatingIP", {
                            required: true,
                            pattern: {
                                value: /^[1-9]+\.[1-9]+\.[1-9]+\.[1-9]+$/,
                                message: "Entered value does not match IP format",
                            },
                        })}
                        value={signInLogData.operatingIP}
                        onChange={(e) =>
                            setSignInLogData(prev => {
                                setValue("operatingIP", e.target.value, { shouldValidate: true });
                                return {
                                    ...prev,
                                    operatingIP: e.target.value
                                };
                            })
                        }
                    />
                    {errors.operatingIP && <p className={classes.red} >{errors.operatingIP.message}</p>}
                    <TextField
                        id="status"
                        select
                        label="Status"
                        value={Number(signInLogData.status)}
                        onChange={(e) =>
                            setSignInLogData({ ...signInLogData, status: Boolean(e.target.value) })
                        }
                        SelectProps={{
                            native: true,
                        }}
                        fullWidth
                        helperText="Please select your status"
                    >
                        <option value={1}>Enable</option>
                        <option value={0}>Disable</option>
                    </TextField>
                </DialogContent>
                <DialogActions>
                    <Button color="primary" type="submit" >
                        Ok
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                </DialogActions>
            </form>
        </Dialog>
    );
}
export default SignInLogForm;