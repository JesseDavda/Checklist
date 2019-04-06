import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentLoggedInUser: 452,
    checklists: []
  },
  mutations: {
    insertChecklists: function(state, checklistsToAdd) {
      state.checklists = checklistsToAdd;
    }
  },
  getters: {
    getCurrentLoggedInUserId: function(state) {
      return state.currentLoggedInUser;
    },
    getChecklists: function(state) {
      return state.checklists;
    },
    getSingleChecklist: state => (checklistId) => {
      return state.checklists.find(checklist => {
        return checklist._id === checklistId;
      });
    }
  }
})
