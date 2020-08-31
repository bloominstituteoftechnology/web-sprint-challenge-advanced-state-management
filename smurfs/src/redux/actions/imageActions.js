import * as actions from './types'
import {imageCdn} from '../../api/smurfs'

export const saveImage = (data) => {
  return {
    type: actions.IMAGE_UPLOADED,
    data,
  }
}

export const uploadedPercent = (data) => {
  return {
    type: actions.IMAGE_UPLOADING,
    data,
  }
}

export const uploadImage = (data) => {
  return (dispatch) => {
    const options = {
      onUploadProgress: (progressEvent) => {
        const {loaded, total} = progressEvent
        let percent = Math.floor((loaded * 100) / total)
        console.log(`${loaded}kb of ${total}kb | ${percent}%`)

        if (percent < 100) {
          dispatch(uploadedPercent(percent))
        } else if (percent === 100) {
          dispatch(uploadedPercent(100))
        }
      },
    }

    imageCdn.post('/upload', data, options).then((res) => {
      dispatch(saveImage(res.data))
      //   dispatch(uploadedPercent(100))
    })
  }
}
