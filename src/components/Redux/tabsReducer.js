const initialState = {
  activeTab: 0,
};

const tabsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'set_active_tab':
      return {
        activeTab: action.payload,
      };
    default:
      return state;
  }
};

export default tabsReducer;
