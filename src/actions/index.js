import types from './types';
import axios from 'axios';

export const getProductList = () => async (dispatch) => {
    const resp = await axios.get('/api/get-product-list.php');
    console.log('Product List Response', resp);
    dispatch({
        type: types.GET_PRODUCTS,
        products: resp.data.products
    });
}