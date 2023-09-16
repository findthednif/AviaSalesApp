import getTickets from '../../servises/apiRequests';

export const toggleAll = () => ({
  type: 'all',
});
export const toggleCheckbox = (checkboxName) => ({
  type: 'single',
  payload: checkboxName,
});
export const setActiveTab = (tabIndex) => ({
  type: 'set_active_tab',
  payload: tabIndex,
});
export const fetchTicketsStart = () => ({ type: 'fetch_tickets_start' });
export const fetchTicketsEnd = () => ({ type: 'fetch_tickets_end' });
export const fetchTicketsSuccess = (tickets, stop) => ({
  type: 'fetch_tickets_success',
  payload: { tickets, stop },
});
export const showMoreTickets = () => ({ type: 'show_more_tickets' });
export const fetchTickets = () => async (dispatch) => {
  try {
    dispatch(fetchTicketsStart());
    const ticketsData = await getTickets();
    dispatch(fetchTicketsSuccess(ticketsData.tickets, ticketsData.stop));
    if (!ticketsData.stop) {
      dispatch(fetchTickets());
    }
    dispatch(fetchTicketsEnd());
  } catch (error) {
    if (error.status === 500) {
      dispatch(fetchTickets());
    }
  }
};
