import { combineReducers } from "redux";
import globalReducer from "./globalReducer";
import activityReducer from "./activityReducer";
import i18n from "../i18n/i18n";
import * as configParams from "../constants/config";

export default combineReducers({
  globalData: globalReducer,
  activity: activityReducer,
  i18n: () => ({
    ...i18n
  }),
  config: (env = 'production') => ({
    ...configParams
  })
});
