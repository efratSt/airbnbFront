import { storageService } from "./async-storage.service.js";
import gOrder from "../../data/order.json" assert { type: "json" };

console.log("gOrder: ", gOrder);

const STORAGE_KEY = "order";

export const orderService = {
  query,
  getById,
  remove,
  save,
};

async function query(
  filterBy = { hostId: "", buyerId: "", status: "", totalPrice: 0 }
) {
  var orders = await storageService.query(STORAGE_KEY);

  if (!orders || !orders.length) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(gOrder));
  }
  return orders;
}

function getById(orderId) {
  return storageService.get(STORAGE_KEY, orderId);
}

async function remove(orderId) {
  await storageService.remove(STORAGE_KEY, orderId);
}

async function save(order) {
  var savedOrder;
  if (order._id) {
    savedOrder = await storageService.put(STORAGE_KEY, order);
  } else {
    // Later, owner is set by the backend
    order.owner = userService.getLoggedinUser();
    savedOrder = await storageService.post(STORAGE_KEY, order);
  }
  return savedOrder;
}
