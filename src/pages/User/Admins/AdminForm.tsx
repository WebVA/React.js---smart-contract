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
import { createAdmin, updateAdmin } from "../../../store/User/Admins";
import { selectAdminList, selectAdminProcessStatus } from '../../../store/User/Admins/selectors';
import { selectPermissionList } from '../../../store/User/Permissions/selectors';
import { IAdminData } from '../../../types/User';
import { useStyles } from '../Style';
import { STATUS } from '../../../constants';

function AdminForm({ ...props }: any) {
    const classes = useStyles();
    const { open, handleClose, currentId, setCurrentId, refreshTable } = props;

    const dispatch = useAppDispatch();

    const permissionOption = useAppSelector(selectPermissionList);
    const processStatus = useAppSelector(selectAdminProcessStatus);


    const initialState = {
        id: 0,
        adminName: '',
        email: '',
        realName: '',
        phone: '',
        status: false,
        role: 1,
        emailVerified: false,
        phoneVerified: false,
    };

    const [adminData, setAdminData] = React.useState<IAdminData>(initialState);
    const adminList = useAppSelector(selectAdminList);

    const adminDetails = currentId ? adminList.find((c) => c.id === currentId) : null;


    React.useEffect(() => {
        if (adminDetails) setAdminData(adminDetails);

        if (processStatus === STATUS.SUCCESS) {
            handleClose();
            refreshTable();
        }
    }, [adminDetails, processStatus, handleClose, refreshTable]);

    const clearData = () => {
        setAdminData(initialState);
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
        //   handleClose();
        if (currentId === 0)
            dispatch(createAdmin(adminData));
        else
            dispatch(updateAdmin(adminData));
        clearData();
    };

    //-----------------------------------------------------------------
    return (
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <form onSubmit={handleSubmit(onSubmit)}>
                <DialogTitle id="form-dialog-title">Admin Management {` >> ${currentId === 0 ? 'Add' : 'Update'} Admin`}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please Input the admin information.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="adminName"
                        label="Adminname"
                        type="input"
                        fullWidth
                        {...register("adminName", {
                            required: true,
                        })}
                        value={adminData.adminName}
                        onChange={(e) =>
                            setAdminData(prev => {
                                setValue("adminName", e.target.value, { shouldValidate: true });
                                return {
                                    ...prev,
                                    adminName: e.target.value
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
                        value={adminData.email}
                        onChange={(e) =>
                            setAdminData(prev => {
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
                        value={adminData.realName}
                        onChange={(e) =>
                            setAdminData(prev => {
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
                        value={adminData.phone}
                        onChange={(e) =>
                            setAdminData(prev => {
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
                        value={adminData.role}
                        onChange={(e) =>
                            setAdminData({ ...adminData, role: Number(e.target.value) })
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
                        value={Number(adminData.status)}
                        onChange={(e) =>
                            setAdminData({ ...adminData, status: Boolean(e.target.value) })
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
        </Dialog >
    );
}
export default AdminForm;