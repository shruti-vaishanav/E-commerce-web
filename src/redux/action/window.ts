/* eslint-disable @typescript-eslint/no-explicit-any */
import { FetchPath, GetCurrentPath } from '../reducer/window';


export const getWindowPath = (value: string) => async (dispatch: any) =>
    new Promise((resolve: any, reject: any) => {
        dispatch(FetchPath());
        try {
            if (value) {
                dispatch(GetCurrentPath(value));
                resolve(value);
            }
        } catch (e) {
            console.log('e: ', e);
            // dispatch(HasError(e?.response?.data?.message));
            reject();
        }
    });