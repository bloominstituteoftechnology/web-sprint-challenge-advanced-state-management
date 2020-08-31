import * as actions from '../actions/types'

const initalState = {
  loading: false,
  imageUrl: '',
  imgageId: '',
  uploading: '',
  error: '',
}

export const imageReducer = (state = initalState, action) => {
  switch (action.type) {
    case actions.IMAGE_UPLOADED:
      return {
        ...state,
        imageUrl: action.data.url,
        imgageId: action.data.asset_id,
      }
    case actions.IMAGE_UPLOADING:
      return {
        ...state,
        uploading: action.data,
      }
    default:
      return state
  }
}
