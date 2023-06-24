/* eslint-disable @typescript-eslint/no-explicit-any */
import { apiInstance } from "../../httpClient";
import { HasError, FetchProduct, GetAllProduct, GetProductById, GetCategories, SearchProduct } from '../reducer/Product';

export const fetchProduct = () => async (dispatch: any) =>
	new Promise((resolve: any, reject: any) => {
		dispatch(FetchProduct());
		apiInstance
			.get('/product')
			.then((res) => {
				dispatch(GetAllProduct(res.data.products));
				resolve(res.data.products);
			})
			.catch((e) => {
				dispatch(HasError(e?.response?.data?.message));
				reject();
			});
	});

export async function getProduct(id: any) {
	try {
		const response: any = await apiInstance.get(`product/${id}`);
		console.log('response action: ', response);
		if (response) return response;
	} catch (e) {
		console.log('e: ', e);
	}
}

export const fetchProductByCategory = (val: string) => async (dispatch: any) =>
	new Promise((resolve: any, reject: any) => {
		dispatch(FetchProduct());
		apiInstance
			.get(`/products/category/${val}`)
			.then((res) => {
				dispatch(GetAllProduct(res.data.products));
				resolve(res.data.products);
			})
			.catch((e) => {
				dispatch(HasError(e?.response?.data?.message));
				reject();
			});
	});

export const getProductCategories = () => async (dispatch: any) =>
	new Promise((resolve, reject) => {
		dispatch(FetchProduct());
		apiInstance
			.get(`/products/categories`)
			.then((res) => {
				dispatch(GetCategories(res.data));
				resolve(res.data);
			})
			.catch((e) => {
				dispatch(HasError(e?.response?.data?.message));
				reject();
			});
	});


export const searchProduct = (products: any, searchValue: any) => async (dispatch: any) =>
	new Promise((resolve, reject) => {
		dispatch(FetchProduct());
		apiInstance
			.get(`/products/search?q=${searchValue}`)
			.then((res) => {
				if (searchValue) {
					const filT = products.filter((val: any) => val.title.includes(searchValue));
				}
				dispatch(SearchProduct(res.data.products));
				resolve(res.data);
			})
			.catch((e) => {
				dispatch(HasError(e?.response?.data?.message));
				reject();
			});
	});

