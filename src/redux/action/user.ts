/* eslint-disable @typescript-eslint/no-explicit-any */

import { apiInstance } from '../../httpClient/index'
import { setDataToSession } from '../../utils/localstorage';
import { FetchUsers, HasError, LoginUser, DeleteAllUsers } from '../reducer/User';
import { ILoginUser } from '../../interface/user.interface';


const loginUser = (params: ILoginUser) => (dispatch: any) =>
    new Promise((resolve: any, reject: any) => {
        dispatch(FetchUsers());
        apiInstance
            .post('auth/login', params)
            .then((res) => {
                setDataToSession('token', res.data.token);
                setDataToSession('user', JSON.stringify(res.data));
                dispatch(LoginUser(res.data));
                resolve(res.data);
            })
            .catch((e) => {
                dispatch(HasError(e?.response?.data?.message));
                reject();
            });
    });
export default loginUser

const deleteUser = () => async (dispatch: any) =>
    new Promise((resolve: any, reject: any) => {
        dispatch(FetchUsers());
        try {
            dispatch(DeleteAllUsers());
            resolve();
        } catch (error) {
            console.log('error: ', error);
            dispatch(HasError('error'));
            reject();
        }
    });
export { loginUser, deleteUser }