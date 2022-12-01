import { storageService } from "./async-storage.service.js";
import { utilService } from "./util.service.js";
import { userService } from "./user.service.js";

const STORAGE_KEY = "stay";

var gStays = [
  {
    _id: _makeId(),
    name: "Ribeira Charming Duplex",
    type: "House",
    createdAt: utilService.randomDate(),
    imgUrls: [
      "https://images.homes.com/listings/112/9437373882-174864441-original.jpg",
      "https://images.homes.com/listings/112/1537373882-174864441-original.jpg",
      "https://images.homes.com/listings/112/1337373882-174864441-original.jpg",
      "https://images.homes.com/listings/112/5237373882-174864441-original.jpg",
      "https://images.homes.com/listings/112/1237373882-174864441-original.jpg",
    ],
    price: 80.0,
    currencyCode: 'USD',
    summary:
      "Fantastic duplex apartment with three bedrooms, located in the historic area of Porto",
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
        id: _makeId(),
        createdAt: new Date(),
        txt: "Very helpful hosts. Cooked traditional...",
        rate: utilService.getRandomIntInclusive(1,5),
        by: {
          _id: "u102",
          fullname: "user2",
          imgUrl: "/src/assets/icons/user-m.png",
        },
      },
      {
        id: _makeId(),
        createdAt: new Date(),
        txt: "Very helpful hosts. Cooked traditional...",
        rate: utilService.getRandomIntInclusive(1,5),
        by: {
          _id: "u103",
          fullname: "user3",
          imgUrl: "/src/assets/icons/user-f.png",
        },
      },
      {
        id: _makeId(),
        createdAt: new Date(),
        txt: "Very helpful hosts. Cooked traditional...",
        rate: utilService.getRandomIntInclusive(1,5),
        by: {
          _id: "u104",
          fullname: "user4",
          imgUrl: "/src/assets/icons/user-m.png",
        },
      },
      {
        id: _makeId(),
        createdAt: new Date(),
        txt: "Very helpful hosts. Cooked traditional...",
        rate: utilService.getRandomIntInclusive(1,5),
        by: {
          _id: "u105",
          fullname: "user5",
          imgUrl: "/src/assets/icons/user-f.png",
        },
      }
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
  await storageService.post(STORAGE_KEY, ...gStays);
})();

function _makeId(length = 5) {
  var text = "";
  var possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}
