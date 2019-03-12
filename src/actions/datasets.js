export const DATASETS_CREATE = '@@datasets/CREATE'

export const datasetsCreate = ({ learning, testing }) => ({
  type: DATASETS_CREATE,
  payload: {
    datasets: {
      learning,
      testing
    }
  }
})
