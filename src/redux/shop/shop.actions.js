import ShopActiontypes from './shop.types';

export const updateCollections = collectionsMap => ({
  type: ShopActiontypes.UPDATE_COLLECTIONS,
  payload: collectionsMap
});
