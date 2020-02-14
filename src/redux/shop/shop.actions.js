import ShopActiontypes from './shop.types';

export const fetchCollectionsStart = () => ({
  type: ShopActiontypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = collectionsMap => ({
  type: ShopActiontypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap
});

export const fetchCollectionsFailure = errorMessage => ({
  type: ShopActiontypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage
});
