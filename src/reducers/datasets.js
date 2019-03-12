import { DATASETS_CREATE } from '../actions/datasets'
import { DatasetGenerator } from '../ann'

const initialState = {
  learning: DatasetGenerator.generateCircularDataSet(100, 2.5, 5),
  testing: DatasetGenerator.generateCircularDataSet(100, 2.5, 5)
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case DATASETS_CREATE:
      return { ...state, ...payload }
    default:
      return state
  }
}
