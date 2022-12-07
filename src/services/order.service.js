import { httpService } from './http.service'
import { storageService } from './async-storage.service'
import {userService} from './user.service'

import { store } from '../store/store'
import { socketService, SOCKET_EVENT_REVIEW_ADDED, SOCKET_EVENT_REVIEW_ABOUT_YOU } from './socket.service'


;(() => {

  setTimeout(()=>{
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
  remove
}



function query(filterBy) {
  // var queryStr = (!filterBy) ? '' : `?name=${filterBy.name}&sort=anaAref`
  return httpService.get(`order${queryStr}`)
  // return storageService.query('order')
}

async function remove(orderId) {
  await httpService.delete(`order/${orderId}`)
  // await storageService.delete('order', orderId)

}
async function add(order) {
  const addedOrder = await httpService.post(`order`, order)

  order.byUser = userService.getLoggedinUser()
  order.aboutUser = await userService.getById(order.aboutUserId)
  // const addedOrder = await storageService.post('order', order)

  return addedOrder
}

