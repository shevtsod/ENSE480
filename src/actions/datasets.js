import { DatasetGenerator } from '../ann'

export const DATASETS_CREATE = '@@datasets/CREATE'

export const datasetsCreate = (datasets = {}) => ({
  type: DATASETS_CREATE,
  payload: {
    training:
      datasets.training || DatasetGenerator.generateCircularDataSet(200, 5),
    testing:
      datasets.testing || DatasetGenerator.generateCircularDataSet(200, 5)
  }
})
