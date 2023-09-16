const url = 'https://aviasales-test-api.kata.academy/';
let id;
const getTickets = async () => {
  if (!id) {
    const responce = await fetch(`${url}search`);
    if (responce.ok) {
      const data = await responce.json();
      id = data.searchId;
    } else {
      throw new Error(`ID fetch failed, ${responce.status}`);
    }
  }
  const ticketsResponce = await fetch(`${url}tickets?searchId=${id}`);
  if (ticketsResponce.ok) {
    const data = ticketsResponce.json();
    return data;
  }
  const error = new Error(`Tickets fetch failed, ${ticketsResponce.status}`);
  error.status = ticketsResponce.status;
  throw error;
};
export default getTickets;
