
export const clients = (state = { clients: [] }, action) => {
  switch (action.type) {
    case 'ALL_CLIENTS':
      return {
        state = {
          clients: [...state.clients],
        }
      }
    default:
      return state;
  }
}