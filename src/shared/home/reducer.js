import { FETCH_PRODUCTS__SUCCEEDED } from './actions';

const initialState = [];

const homeReducer = (previousState = initialState, { type, payload }) => {
    switch (type) {
        case FETCH_PRODUCTS__SUCCEEDED:
            return payload.products;
        default:
            return previousState;
    }
};

export default homeReducer;
