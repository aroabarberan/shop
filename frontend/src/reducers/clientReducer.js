
const stateInitial = {
  clients: [
    {
      name: "Patatin",
      last_name: "Patatan"
    }, {
      name: "Menganito",
      last_name: "Fulanito"
    }
  ]
}

export const clients = (state = stateInitial, action) => {
  switch (action.type) {
    case 'ALL_CLIENTS':
      state = {
        clients: [...state.clients],
      }
      break
    case 'CREATE_CLIENT':
      state = {
        clients: [...state.clients, action.payload],
      }
      break
  }
  return state;
}