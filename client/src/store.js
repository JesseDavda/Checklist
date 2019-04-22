import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentLoggedInUser: "",
    currentChecklist: {},
    checklists: []
  },
  mutations: {
    insertChecklists: function(state, checklistsToAdd) {
      state.checklists = checklistsToAdd;
    },
    setCurrentUser: function(state, id) {
      state.currentLoggedInUser = id;
    },
    setCurrentChecklist: function(state, list) {
      state.currentChecklist = list;
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
    },
    getCurrentChecklist: function(state) {
      return state.currentChecklist
    }
  }
})
