import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { navBarReducer } from './navBar/reducers'
import { notificationReducer } from './notification/reducer'

export const rootReducer = (state, action) => {
  switch (action.type) {
    case "RESET_APP": return state = undefined;
    default: return allReducers(state, action);
  }
}

export const allReducers = combineReducers({
  navBarState: navBarReducer,
  notificationState: notificationReducer,
  form: formReducer
});
