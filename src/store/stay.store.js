import { stayService } from "../services/stay.service.local";

export function getActionRemoveStay(stayId) {
  return {
    type: "removeStay",
    stayId,
  };
}
export function getActionAddStay(stay) {
  return {
    type: "addStay",
    stay,
  };
}
export function getActionUpdateStay(stay) {
  return {
    type: "updateStay",
    stay,
  };
}

export function getActionAddStayMsg(stayId) {
  return {
    type: "addStayMsg",
    stayId,
    txt: "Stam txt",
    label: "",
    showExplore: true,
  };
}

export const stayStore = {
  state: {
    stays: [],
    filterBy: {
      location: "",
      range: {},
      guests: 0,
    },
    filterLabel: "",
    showExplore: false,
  },
  getters: {
    stays(state) {
      return state.stays;
    },
    getRateCalcPerStay({ reviews }) {
      console.log("reviews", reviews);
      var sum = 0;
      reviews.forEach((review) => {
        sum += review.rate;
      });
      return sum / reviews.length;
    },
    getFilterLabel({ filterLabel }) {
      return filterLabel;
    },
    getShowExplore({ showExplore }) {
      return showExplore;
    },
  },
  mutations: {
    setFilterBy(state, { filterBy }) {
      // console.log('hi from setFilterBy');
      state.filterBy = filterBy;
      if (state.filterBy.location) state.showExplore = true;
      console.log("state.showExplore ", state.showExplore);
    },
    setFilterByLabel(state, { label }) {
      state.filterLabel = label;
    //   state.dispatch({ type: 'loadStays' });
    },
    setStays(state, { stays }) {
      state.stays = stays;
    },
    addStay(state, { stay }) {
      state.stays.push(stay);
    },
    updateStay(state, { stay }) {
      const idx = state.stays.findIndex((c) => c.id === stay._id);
      state.stays.splice(idx, 1, stay);
    },
    removeStay(state, { stayId }) {
      state.stays = state.stays.filter((stay) => stay._id !== stayId);
    },
    addStayMsg(state, { stayId, msg }) {
      const stay = state.stays.find((stay) => stay._id === stayId);
      if (!stay.msgs) stay.msgs = [];
      stay.msgs.push(msg);
    },
    setExploreShow(state, { showExplore }) {
      state.showExplore = showExplore;
    },
  },
  actions: {
    async addStay(context, { stay }) {
      try {
        stay = await stayService.save(stay);
        context.commit(getActionAddStay(stay));
        return stay;
      } catch (err) {
        console.log("stayStore: Error in addStay", err);
        throw err;
      }
    },
    async updateStay(context, { stay }) {
      try {
        stay = await stayService.save(stay);
        context.commit(getActionUpdateStay(stay));
        return stay;
      } catch (err) {
        console.log("stayStore: Error in updateStay", err);
        throw err;
      }
    },
    async loadStays(context) {
      try {
        const stays = await stayService.query();
        context.commit({ type: "setStays", stays });
      } catch (err) {
        console.log("stayStore: Error in loadStays", err);
        throw err;
      }
    },
    async removeStay(context, { stayId }) {
      try {
        await stayService.remove(stayId);
        context.commit(getActionRemoveStay(stayId));
      } catch (err) {
        console.log("stayStore: Error in removeStay", err);
        throw err;
      }
    },
    async addStayMsg(context, { stayId, txt }) {
      try {
        const msg = await stayService.addStayMsg(stayId, txt);
        context.commit({ type: "addStayMsg", stayId, msg });
      } catch (err) {
        console.log("stayStore: Error in addStayMsg", err);
        throw err;
      }
    },
    async getStayById(context, { stayId }) {
      try {
        return await stayService.getById(stayId);
      } catch (err) {
        console.log(err);
      }
    },
  },
};
