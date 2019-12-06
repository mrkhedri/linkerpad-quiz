export const getProductList = data => dispatch => {
    dispatch({
        type: 'GET_PRODUCT_LIST',
        payload: data
    })
}

export const setProductViewType = data => dispatch => {
    dispatch({
        type: 'SET_PRODUCT_VIEW_TYPE',
        payload: data
    })
}