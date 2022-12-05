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
    addOrder(state, { order }) {
      state.orders.push(order);
    },
    updateOrder(state, { order }) {
      const idx = state.orders.findIndex((c) => c.id === order._id);
      state.orders.splice(idx, 1, order);
    },
    removeOrder(state, { orderId }) {
      state.orders = state.orders.filter((order) => order._id !== orderId);
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
    async addOrder(context, { order }) {
      try {
        order = await orderService.save(order);
        context.commit(getActionAddOrder(order));
        return order;
      } catch (err) {
        console.log("orderStore: Error in addOrder", err);
        throw err;
      }
    },
    async updateOrder(context, { order }) {
      try {
        order = await orderService.save(order);
        context.commit(getActionUpdateOrder(order));
        return order;
      } catch (err) {
        console.log("orderStore: Error in updateOrder", err);
        throw err;
      }
    },
    async removeOrder(context, { orderId }) {
      try {
        await orderService.remove(orderId);
        context.commit(getActionRemoveOrder(orderId));
      } catch (err) {
        console.log("orderStore: Error in removeOrder", err);
        throw err;
      }
    },
    async getOrderById(context, { orderId }) {
      try {
        return await orderService.getById(orderId);
      } catch (err) {
        console.log(err);
      }
    },
  },
};
