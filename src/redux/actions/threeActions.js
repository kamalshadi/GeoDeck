import {
  CHANGE_WIDGET
} from './types'



export const changeWidget = (name) => {
  return  (dispatch,getState) => {
    dispatch({
      type:CHANGE_WIDGET,
      payload:name
    }
    )
  }
}
