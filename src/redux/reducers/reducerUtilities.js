export function updateObject(oldObject, newValue) {
  return Object.assign({}, oldObject, newValue);
}

export function updateItemInArray(array, itemId, updateItemCallback) {
  const updateItems = array.map(item => {
    if (item.id !== itemId) {
      return item;
    }

    const updatedItem = updateItemCallback(item);
    return updatedItem;
  });
  return updatedItem;
}

export function createReducer(initialState, handles) {
  return function reducer(state = initialState, action) {
    if (handles.hasOwnProperty(action.type)) {
      return handles[action.type](state, action);
    } else {
      return state;
    }
  };
}
