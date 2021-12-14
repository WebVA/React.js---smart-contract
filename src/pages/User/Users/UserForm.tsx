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
import { createUser, updateUser } from "../../../store/User/Users";
import { selectUserList } from '../../../store/User/Users/selectors';
import { selectPermissionList } from '../../../store/User/Permissions/selectors';
import { IUserData } from '../../../types/User';
import { useStyles } from '../Style';

function UserForm({ ...props }: any) {
    const classes = useStyles();
    const { open, handleClose, currentId, setCurrentId } = props;

    const dispatch = useAppDispatch();

    //-----------------------Dialog Logic-----------------------------------------
    const permissionOption = useAppSelector(selectPermissionList);

    const initialState = {
        id: 0,
        userName: '',
        email: '',
        realName: '',
        phone: '',
        status: false,
        role: 1,
        emailVerified: false,
        phoneVerified: false,
    };

    const [userData, setUserData] = React.useState<IUserData>(initialState);
    const userList = useAppSelector(selectUserList);

    const userDetails = currentId ? userList.find((c) => c.id === currentId) : null;


    React.useEffect(() => {
        if (userDetails) setUserData(userDetails);
    }, [userDetails]);

    const clearData = () => {
        setUserData(initialState);
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
            dispatch(createUser(userData));
        else
            dispatch(updateUser(userData));
        clearData();
    };

    //-----------------------------------------------------------------
    return (
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <form onSubmit={handleSubmit(onSubmit)}>
                <DialogTitle id="form-dialog-title">User Management {` >> ${currentId === 0 ? 'Add' : 'Update'} User`}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please Input the user information.
                    </DialogContentText>

                    <TextField
                        autoFocus
                        margin="dense"
                        id="userName"
                        label="Username"
                        type="input"
                        fullWidth
                        {...register("userName", {
                            required: true,
                        })}
                        value={userData.userName}
                        onChange={(e) =>
                            setUserData(prev => {
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
                        id="email"
                        label="Email"
                        type="input"
                        fullWidth
                        {...register("email", {
                            required: true,
                            pattern: {
                                value: /^\S+@\S+\.\S+$/,
                                message: "Entered value does not match email format",
                            },
                        })}
                        value={userData.email}
                        onChange={(e) =>
                            setUserData(prev => {
                                setValue("email", e.target.value, { shouldValidate: true });
                                return {
                                    ...prev,
                                    email: e.target.value
                                };
                            })
                        }
                    />
                    {errors.email && <p className={classes.red} >{errors.email.message}</p>}
                    <TextField
                        margin="dense"
                        id="realName"
                        label="Realname"
                        type="input"
                        fullWidth
                        {...register("realName", {
                            required: true,
                        })}
                        value={userData.realName}
                        onChange={(e) =>
                            setUserData(prev => {
                                setValue("realName", e.target.value, { shouldValidate: true });
                                return {
                                    ...prev,
                                    realName: e.target.value
                                };
                            })
                        }
                    />
                    <TextField
                        margin="dense"
                        id="phone"
                        label="Phone"
                        type="input"
                        fullWidth
                        {...register("phone", {
                            required: true,
                            pattern: {
                                value: /^[1-9]+$/,
                                message: "Entered value does not match phone format",
                            },
                        })}
                        value={userData.phone}
                        onChange={(e) =>
                            setUserData(prev => {
                                setValue("phone", e.target.value, { shouldValidate: true });
                                return {
                                    ...prev,
                                    phone: e.target.value
                                };
                            })
                        }
                    />
                    {errors.phone && <p className={classes.red} >{errors.phone.message}</p>}
                    <TextField
                        id="role"
                        select
                        label="Role"
                        value={userData.role}
                        onChange={(e) =>
                            setUserData({ ...userData, role: Number(e.target.value) })
                        }
                        SelectProps={{
                            native: true,
                        }}
                        fullWidth
                        helperText="Please select your role"
                    >
                        {
                            permissionOption.map((value, key) => {
                                return (
                                    <option value={value.id}>{value.name}</option>
                                );
                            })
                        }
                    </TextField>
                    <TextField
                        id="status"
                        select
                        label="Status"
                        value={Number(userData.status)}
                        onChange={(e) =>
                            setUserData({ ...userData, status: Boolean(e.target.value) })
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
export default UserForm;