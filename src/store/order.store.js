import { orderService } from "../services/order.service";

export const orderStore = {
  state: {
    orders: [],
  },
  getters: {
    orders({ orders }) {
        console.log('all orders from storeOder: ', orders);
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
  },
  actions: {
    async addOrder(context, { order }) {
        // console.log('order: ', order);
      try {
        order = await orderService.add(order);
        context.commit({ type: "addOrder", order });
        // context.dispatch({ type: "increaseScore" });

        return order;
      } catch (err) {
        console.log("orderStore: Error in addOrder", err);
        throw err;
      }
    },
    async loadOrders(context, {filterBy}) {
      try {
        const orders = await orderService.query(filterBy);
        context.commit({ type: "setOrders", orders });
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
  },
};
