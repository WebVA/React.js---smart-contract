import { IPermissionData } from '../../../types/User';
interface permissionsState {
  permissionList: IPermissionData[]
  status: number
  rowsCount: number
}

export type { permissionsState };
