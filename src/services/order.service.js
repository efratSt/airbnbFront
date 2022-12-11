import { httpService } from './http.service'
import { storageService } from './async-storage.service'
import { userService } from './user.service'

import { store } from '../store/store'
import {
    socketService,
    SOCKET_EVENT_REVIEW_ADDED,
    SOCKET_EVENT_REVIEW_ABOUT_YOU,
} from './socket.service'
const ORDER_DB = 'order'

;(() => {
    setTimeout(() => {
        // socketService.on(SOCKET_EVENT_REVIEW_ADDED, (order) => {
        //   console.log('GOT from socket', order)
        //   store.commit({type: 'addOrder', order})
        // })
        // socketService.on(SOCKET_EVENT_REVIEW_ABOUT_YOU, (order) => {
        //   showSuccessMsg(`New order about me ${order.txt}`)
        // })
    }, 0)
})()

export const orderService = {
    add,
    query,
    remove,
    save,
}

function query(filterBy) {
    console.log('filterBy from orderStore: ', filterBy)
    return httpService.get(`order`, filterBy)
    // return storageService.query('order')
}

async function remove(orderId) {
    await httpService.delete(`order/${orderId}`)
    // await storageService.delete('order', orderId)
}
async function add(order) {
    // storageService.post(ORDER_DB , order)
    const addedOrder = await httpService.post(ORDER_DB, order)

    return addedOrder
}

async function save(order) {
    console.log('order from save in service: ', order)
    var savedOrder
    if (order._id) {
        savedOrder = await httpService.put(`order/${order._id}`, order)
    } else {
        savedOrder = await httpService.post('order', order)
    }
    return savedOrder
}
