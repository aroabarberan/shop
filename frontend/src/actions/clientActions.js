export const CREATE_CLIENT = 'CREATE_CLIENT'

export const createClient = client => ({
  type: CREATE_CLIENT,
  payload: client,
})

export const allClient = () => ({
  type: ALL_CLIENT
})

