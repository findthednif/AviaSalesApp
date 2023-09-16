import { configureStore } from '@reduxjs/toolkit';

import checkboxReducer from './checkboxReducer';
import tabsReducer from './tabsReducer';
import ticketsReducer from './ticketsReducer';

const checkboxStore = configureStore({
  reducer: {
    checkboxReducer,
    tabsReducer,
    ticketsReducer,
  },
});
export default checkboxStore;
