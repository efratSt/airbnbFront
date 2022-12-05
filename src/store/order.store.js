import { orderService } from "../services/order.service";

export const orderStore = {
  state: {
    orders: [],
  },
  getters: {
    getOrder(state) {
      return state.orders;
    },
  },
  mutations: {
    setOrders(state, { orders }) {
      state.orders = orders;
    },
  },
  actions: {
    async loadOrder(context) {
      try {
        const orders = await orderService.query();
        context.commit({ type: "setOrders", orders });
      } catch (err) {
        console.log("orderStore: Error in loadOrders", err);
        throw err;
      }
    },
    addOrder(state, { order }) {
      state.orders.push(order);
    },
    updateOrder(state, { order }) {
        const idx = state.orders.findIndex((c) => c.id === order._id);
        state.orders.splice(idx, 1, order);
      },
  },
};
