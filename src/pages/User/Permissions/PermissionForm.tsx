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
import { createPermission, updatePermission } from "../../../store/User/Permissions";
import { selectPermissionList } from '../../../store/User/Permissions/selectors';
import { IPermissionData } from '../../../types/User'

function PermissionForm({ ...props }: any) {
    const { open, handleClose, currentId, setCurrentId } = props;

    const dispatch = useAppDispatch();

    const initialState = {
        id: 0,
        name: '',
        description: '',
        status: false,
    };

    const [permissionData, setPermissionData] = React.useState<IPermissionData>(initialState);
    const permissionList = useAppSelector(selectPermissionList);

    const permissionDetails = currentId ? permissionList.find((c) => c.id === currentId) : null;


    React.useEffect(() => {
        if (permissionDetails) setPermissionData(permissionDetails);
    }, [permissionDetails]);

    const clearData = () => {
        setPermissionData(initialState);
        setCurrentId(0);
    };


    const {
        register,
        handleSubmit,
        setValue,
    } = useForm<any>();
    const onSubmit = (data: any, event: any) => {
        event.preventDefault();
        handleClose();
        if (currentId === 0)
            dispatch(createPermission(permissionData));
        else
            dispatch(updatePermission(permissionData));
        clearData();
    };


    //-----------------------------------------------------------------
    return (
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <form onSubmit={handleSubmit(onSubmit)}>
                <DialogTitle id="form-dialog-title">Permission Management {` >> ${currentId === 0 ? 'Add' : 'Update'} Permission`}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please Input the permission information.
                    </DialogContentText>

                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Name"
                        type="input"
                        fullWidth
                        {...register("name", {
                            required: true,
                        })}
                        value={permissionData.name}
                        onChange={(e) =>
                            setPermissionData(prev => {
                                setValue("name", e.target.value, { shouldValidate: true });
                                return {
                                    ...prev,
                                    name: e.target.value
                                };
                            })
                        }
                    />
                    <TextField
                        margin="dense"
                        id="description"
                        label="Description"
                        type="input"
                        fullWidth
                        {...register("description", {
                            required: true,
                        })}
                        value={permissionData.description}
                        onChange={(e) =>
                            setPermissionData(prev => {
                                setValue("description", e.target.value, { shouldValidate: true });
                                return {
                                    ...prev,
                                    description: e.target.value
                                };
                            })
                        }
                    />
                    <TextField
                        id="status"
                        select
                        label="Status"
                        value={Number(permissionData.status)}
                        onChange={(e) =>
                            setPermissionData({ ...permissionData, status: Boolean(e.target.value) })
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
export default PermissionForm;