import { storageService } from "./async-storage.service.js";
import { utilService } from "./util.service.js";
import { userService } from "./user.service.js";

const STORAGE_KEY = "stay";

var gStays = [
  {
    _id: "10006546",
    name: "Ribeira Charming Duplex",
    type: "House",
    createdAt: Date.now(),
    imgUrls: [
      "https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large",
      "otherImg.jpg",
      "https://www.google.com/search?q=%D7%AA%D7%9E%D7%95%D7%A0%D7%95%D7%AA+%D7%A9%D7%9C+%D7%93%D7%99%D7%A8%D7%95%D7%AA+%D7%A0%D7%95%D7%A4%D7%A9&rlz=1C1GCEA_enIL1010IL1010&sxsrf=ALiCzsbUoTGbxwHjJvejqx8kkc9wryuZZw:1669800901821&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjByuSMzdX7AhWTWqQEHcaEBL0Q_AUoAXoECAEQAw&biw=1920&bih=929&dpr=1#imgrc=9M5_BZelYOd9iM",
      "https://www.google.com/search?q=%D7%AA%D7%9E%D7%95%D7%A0%D7%95%D7%AA+%D7%A9%D7%9C+%D7%93%D7%99%D7%A8%D7%95%D7%AA+%D7%A0%D7%95%D7%A4%D7%A9&rlz=1C1GCEA_enIL1010IL1010&sxsrf=ALiCzsbUoTGbxwHjJvejqx8kkc9wryuZZw:1669800901821&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjByuSMzdX7AhWTWqQEHcaEBL0Q_AUoAXoECAEQAw&biw=1920&bih=929&dpr=1#imgrc=AWDBzfWIkCakAM",
      "https://www.google.com/search?q=%D7%AA%D7%9E%D7%95%D7%A0%D7%95%D7%AA+%D7%A9%D7%9C+%D7%93%D7%99%D7%A8%D7%95%D7%AA+%D7%A0%D7%95%D7%A4%D7%A9&rlz=1C1GCEA_enIL1010IL1010&sxsrf=ALiCzsbUoTGbxwHjJvejqx8kkc9wryuZZw:1669800901821&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjByuSMzdX7AhWTWqQEHcaEBL0Q_AUoAXoECAEQAw&biw=1920&bih=929&dpr=1#imgrc=zZ0kU7YiTqAQTM",
      "https://www.google.com/search?q=%D7%AA%D7%9E%D7%95%D7%A0%D7%95%D7%AA+%D7%A9%D7%9C+%D7%93%D7%99%D7%A8%D7%95%D7%AA+%D7%A0%D7%95%D7%A4%D7%A9&rlz=1C1GCEA_enIL1010IL1010&sxsrf=ALiCzsbUoTGbxwHjJvejqx8kkc9wryuZZw:1669800901821&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjByuSMzdX7AhWTWqQEHcaEBL0Q_AUoAXoECAEQAw&biw=1920&bih=929&dpr=1#imgrc=hhtp0zFnR02Y4M",
      "https://www.google.com/search?q=%D7%AA%D7%9E%D7%95%D7%A0%D7%95%D7%AA+%D7%A9%D7%9C+%D7%93%D7%99%D7%A8%D7%95%D7%AA+%D7%A0%D7%95%D7%A4%D7%A9&rlz=1C1GCEA_enIL1010IL1010&sxsrf=ALiCzsbUoTGbxwHjJvejqx8kkc9wryuZZw:1669800901821&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjByuSMzdX7AhWTWqQEHcaEBL0Q_AUoAXoECAEQAw&biw=1920&bih=929&dpr=1#imgrc=PLBZdaPPyHAPeM",
      "https://www.google.com/search?q=%D7%AA%D7%9E%D7%95%D7%A0%D7%95%D7%AA+%D7%A9%D7%9C+%D7%93%D7%99%D7%A8%D7%95%D7%AA+%D7%A0%D7%95%D7%A4%D7%A9&rlz=1C1GCEA_enIL1010IL1010&sxsrf=ALiCzsbUoTGbxwHjJvejqx8kkc9wryuZZw:1669800901821&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjByuSMzdX7AhWTWqQEHcaEBL0Q_AUoAXoECAEQAw&biw=1920&bih=929&dpr=1#imgrc=uHS5cyXOlNOxGM",
      "https://www.google.com/search?q=%D7%AA%D7%9E%D7%95%D7%A0%D7%95%D7%AA+%D7%A9%D7%9C+%D7%93%D7%99%D7%A8%D7%95%D7%AA+%D7%A0%D7%95%D7%A4%D7%A9&rlz=1C1GCEA_enIL1010IL1010&sxsrf=ALiCzsbUoTGbxwHjJvejqx8kkc9wryuZZw:1669800901821&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjByuSMzdX7AhWTWqQEHcaEBL0Q_AUoAXoECAEQAw&biw=1920&bih=929&dpr=1#imgrc=1t20f6EC5zAlkM",
      "https://www.google.com/search?q=%D7%AA%D7%9E%D7%95%D7%A0%D7%95%D7%AA+%D7%A9%D7%9C+%D7%93%D7%99%D7%A8%D7%95%D7%AA+%D7%A0%D7%95%D7%A4%D7%A9&rlz=1C1GCEA_enIL1010IL1010&sxsrf=ALiCzsbUoTGbxwHjJvejqx8kkc9wryuZZw:1669800901821&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjByuSMzdX7AhWTWqQEHcaEBL0Q_AUoAXoECAEQAw&biw=1920&bih=929&dpr=1#imgrc=qXtKme6GQn5OGM",
    ],
    price: 80.0,
    summary:
      "Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube)...",
    capacity: 8,
    bedrooms: 3,
    beds: 4,
    bathrooms: 2,
    amenities: [
      "TV",
      "Wifi",
      "Kitchen",
      "Smoking allowed",
      "Pets allowed",
      "Cooking basics",
    ],
    labels: ["Top of the world", "Trending", "Play", "Tropical"],
    host: {
      _id: "u101",
      fullname: "Davit Pok",
      imgUrl:
        "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small",
    },
    loc: {
      country: "Portugal",
      countryCode: "PT",
      city: "Porto",
      address: "17 Kombo st",
      lat: -8.61308,
      lng: 41.1413,
    },
    reviews: [
      {
        id: "madeId",
        txt: "Very helpful hosts. Cooked traditional...",
        rate: 4,
        by: {
          _id: "u102",
          fullname: "user2",
          imgUrl: "/img/img2.jpg",
        },
      },
    ],
    likedByUsers: ["mini-user"], // for user-wishlist : use $in
  },
];

const gOrders = [
  {
    _id: "o1225",
    hostId: "u102",
    createdAt: 9898989,
    buyer: {
      _id: "u101",
      fullname: "User 1",
    },
    totalPrice: 160,
    startDate: "2025/10/15",
    endDate: "2025/10/17",
    guests: {
      adults: 2,
      kids: 1,
    },
    stay: {
      _id: "h102",
      name: "House Of Uncle My",
      price: 80.0,
    },
    msgs: [],
    status: "pending", // pending, approved
  },
];

const gUsers = [
  {
    _id: "u101",
    fullname: "User 1",
    imgUrl: "/img/img1.jpg",
    username: "user1",
    password: "secret",
  },
  {
    _id: "u102",
    fullname: "User 2",
    imgUrl: "/img/img2.jpg",
    username: "user2",
    password: "secret",
    // "isOwner" : true // OPTIONAL
  },
];

export const stayService = {
  query,
  getById,
  save,
  remove,
  getEmptyStay,
  addStayMsg,
};
window.cs = stayService;

async function query(filterBy = { txt: "", price: 0 }) {
  var stays = await storageService.query(STORAGE_KEY);
  //   if (filterBy.txt) {
  //       const regex = new RegExp(filterBy.txt, 'i')
  //       stays = stays.filter(stay => regex.test(stay.vendor) || regex.test(stay.description))
  //   }
  //   if (filterBy.price) {
  //       stays = stays.filter(stay => stay.price <= filterBy.price)
  //   }
  if (!stays || !stays.length) stays = gStays;
  console.log(stays);
  return stays;
}

function getById(stayId) {
  return storageService.get(STORAGE_KEY, stayId);
}

async function remove(stayId) {
  await storageService.remove(STORAGE_KEY, stayId);
}

async function save(stay) {
  var savedStay;
  if (stay._id) {
    savedStay = await storageService.put(STORAGE_KEY, stay);
  } else {
    // Later, owner is set by the backend
    stay.owner = userService.getLoggedinUser();
    savedStay = await storageService.post(STORAGE_KEY, stay);
  }
  return savedStay;
}

async function addStayMsg(stayId, txt) {
  // Later, this is all done by the backend
  const stay = await getById(stayId);
  if (!stay.msgs) stay.msgs = [];

  const msg = {
    id: utilService.makeId(),
    by: userService.getLoggedinUser(),
    txt,
  };
  stay.msgs.push(msg);
  await storageService.put(STORAGE_KEY, stay);

  return msg;
}

function getEmptyStay() {
  return {
    name: "stay - " + utilService.getRandomIntInclusive(1, 1000),
    type: "",
    price: 0,
    img: [],
    summary: utilService.makeLorem(5),
  };
}

// TEST DATA
(async () => {
  // await storageService.post(STORAGE_KEY, getEmptyStay())
  // await storageService.post(STORAGE_KEY, getEmptyStay())
  // await storageService.post(STORAGE_KEY, getEmptyStay())
  // await storageService.post(STORAGE_KEY, getEmptyStay())
await storageService.post(STORAGE_KEY, ...gStays)
})();
