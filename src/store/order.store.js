import { orderService } from "../services/order.service";

export function getActionUpdateOrder(order) {
  return {
    type: "updateOrder",
    order,
  };
}

export const orderStore = {
  state: {
    orders: [],
  },
  getters: {
    orders({ orders }) {
      return orders;
    },
  },
  mutations: {
    setOrders(state, { orders }) {
      state.orders = orders;
    },
    addOrder(state, { order }) {
      state.orders.push(order);
    },
    removeOrder(state, { orderId }) {
      state.orders = state.orders.filter((order) => order._id !== orderId);
    },
    updateOrder(state, { order }) {
      const idx = state.orders.findIndex((c) => c.id === order._id);
      state.orders.splice(idx, 1, order);
    },
  },
  actions: {
    async addOrder(context, { order }) {
      try {
        order = await orderService.add(order);
        context.commit({ type: "addOrder", order });
        return order;
      } catch (err) {
        console.log("orderStore: Error in addOrder", err);
        throw err;
      }
    },
    async loadOrders(context, { filterBy }) {
      try {
        const orders = await orderService.query(filterBy);
        context.commit({ type: "setOrders", orders });
        return orders;
      } catch (err) {
        console.log("orderStore: Error in loadOrders", err);
        throw err;
      }
    },
    async removeOrder(context, { orderId }) {
      try {
        await orderService.remove(orderId);
        context.commit({ type: "removeOrder", orderId });
      } catch (err) {
        console.log("orderStore: Error in removeOrder", err);
        throw err;
      }
    },

    async updateOrder(context, { order }) {
      try {
        console.log("order: ", order);
        console.log("orderId: ", order._id);
        order = await orderService.save(JSON.parse(JSON.stringify(order)));
        context.commit({ type: "updateOrder", order });
        return order;
      } catch (err) {
        console.log("orderStore: Error in updateOrder", err);
        throw err;
      }
    },
  },
};
