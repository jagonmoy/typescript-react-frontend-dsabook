import configureMockStore from 'redux-mock-store';
const mockStore = configureMockStore()
export const testStore = mockStore({
  blogs : {
    blogs : []
  },
  users: {
    users: [],
    auth: {
      currentUser: '' ,
      status: false
    }
  }
})
