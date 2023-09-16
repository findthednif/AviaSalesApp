const checkboxState = {
  all: true,
  withoutTransfers: true,
  oneTransfer: true,
  twoTransfers: true,
  threeTransfers: true,
};

const checkboxReducer = (state = checkboxState, action) => {
  if (action.type === 'all') {
    return {
      ...state,
      all: !state.all,
      withoutTransfers: !state.all,
      oneTransfer: !state.all,
      twoTransfers: !state.all,
      threeTransfers: !state.all,
    };
  }

  if (action.type === 'single') {
    const newState = {
      ...state,
      [action.payload]: !state[action.payload],
    };

    newState.all =
      newState.withoutTransfers &&
      newState.oneTransfer &&
      newState.twoTransfers &&
      newState.threeTransfers;

    return newState;
  }

  return state;
};

export default checkboxReducer;
