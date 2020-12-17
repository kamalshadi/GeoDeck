import initialState from '../state/three'
import { CHANGE_WIDGET  } from '../actions/types'
import get from 'lodash.get'

export default function threeReducer (state = initialState, action) {
  const payload = get(action,'payload')
  switch (action.type) {

    case CHANGE_WIDGET: {
      return {...state, activeWidget: payload }
    }

    default: {
      return state
    }
  }
}
