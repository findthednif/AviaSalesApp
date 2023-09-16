const initialState = {
  ticketsData: [],
  limitation: 5,
  loading: true,
  loadingComplete: false,
};

const ticketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'fetch_tickets_start':
      return { ...state, loading: true };
    case 'fetch_tickets_end':
      return { ...state, loading: false };
    case 'fetch_tickets_success':
      return {
        ...state,
        ticketsData: [...state.ticketsData, ...action.payload.tickets],
        loadingComplete: action.payload.stop,
      };
    case 'fetch_tickets_failure':
      return { ...state, error: action.payload, loading: false };
    case 'show_more_tickets':
      return { ...state, limitation: state.limitation + 5 };
    default:
      return state;
  }
};

export default ticketsReducer;
