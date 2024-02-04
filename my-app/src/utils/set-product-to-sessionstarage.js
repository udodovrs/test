import { store } from '../store';

export const setProductsSessionStorage = () => {
	const products = JSON.stringify(store.getState().products);
	sessionStorage.setItem('testBT', products);
};