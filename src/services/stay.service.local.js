import { storageService } from "./async-storage.service.js";
import { utilService } from "./util.service.js";
import { userService } from "./user.service.js";


const STORAGE_KEY = "stay";

var stays = require("../../data/stay.json");

console.log("stays", stays);

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
    currencyCode: "USD",
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
        "https://ca.slack-edge.com/T03PU4YR4NS-U040G1HDV34-37fee1583827-512",
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
        rate: utilService.getRandomIntInclusive(1, 5),
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
        rate: utilService.getRandomIntInclusive(1, 5),
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
        rate: utilService.getRandomIntInclusive(1, 5),
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
        rate: utilService.getRandomIntInclusive(1, 5),
        by: {
          _id: "u105",
          fullname: "user5",
          imgUrl: "/src/assets/icons/user-f.png",
        },
      },
    ],
    likedByUsers: ["mini-user"], // for user-wishlist : use $in
  },
];
var gStays2 = [
  {
    _id: _makeId(),
    name: "Zion Kolob Canyon-Farm Stay",
    type: "Farm stay",
    createdAt: utilService.randomDate(),
    imgUrls: [
      "https://a0.muscache.com/im/pictures/miso/Hosting-740634701378172939/original/8ef7a4b0-79b0-439c-9da0-4a170ad4090d.jpeg",
      "https://a0.muscache.com/im/pictures/miso/Hosting-740634701378172939/original/2a59972a-5d02-4fa2-82b0-df1ff1971f24.jpeg",
      "https://a0.muscache.com/im/pictures/miso/Hosting-740634701378172939/original/e7171379-c720-4921-8a23-bb6c23fdb8e4.jpeg",
      "https://a0.muscache.com/im/pictures/miso/Hosting-740634701378172939/original/92b1145f-801b-4a4a-b448-dc167dc5f232.jpeg",
      "https://a0.muscache.com/im/pictures/miso/Hosting-740634701378172939/original/4e36f28d-27cf-4bea-b473-c83ddec5fb9b.jpeg",
    ],
    price: 99,
    currencyCode: "USD",
    summary: "Zion Kolob Canyon-Farm Stay-cows, goats, alpaca",
    capacity: 6,
    bedrooms: 1,
    beds: 3,
    bathrooms: 1,
    amenities: [
      "Desert view",
      "Garden view",
      "Wifi",
      "Dedicated workspace",
      "Free parking on premises",
      "Private hot tub",
      "65 HDTV with Roku, Hulu, Disney+, Netflix, Apple TV, Amazon Prime Video, Fire TV, HBO Max, Chromecast",
      "Air conditioning",
      "Private patio or balcony",
      "Cooking basics",
      "Ceiling fan",
    ],
    labels: ["Farm", "Trending", "Play", "Tropical", "Desert"],
    host: {
      _id: "u199",
      fullname: "Brandon Pok",
      imgUrl:
        "https://a0.muscache.com/im/pictures/user/ce190fe1-527f-4b02-a377-87afbd962779.jpg?im_w=240",
    },
    loc: {
      country: "Utah, United States",
      countryCode: "US",
      city: "Cedar City",
      address: "6110 W Bumblebee Spring Road",
      lat: 37.56023759602466,
      lng: -113.18001897914087,
    },
    reviews: [
      {
        id: _makeId(),
        createdAt: new Date(),
        txt: "We really enjoyed our stay here! It was a beautiful place and well taken care of. Very clean and super relaxing for a getaway! We will be back to see our new cow friends 🥰",
        rate: utilService.getRandomIntInclusive(3, 5),
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
        rate: utilService.getRandomIntInclusive(1, 5),
        by: {
          _id: "u103",
          fullname: "user3",
          imgUrl: "/src/assets/icons/user-f.png",
        },
      },
      {
        id: _makeId(),
        createdAt: new Date(),
        txt: "This place was so beautiful! We definitely loved feeding the cows!! Once in a life time experience. Also they were very sweet and good communication will be back!",
        rate: utilService.getRandomIntInclusive(1, 5),
        by: {
          _id: "u104",
          fullname: "user4",
          imgUrl: "/src/assets/icons/user-m.png",
        },
      },
      {
        id: _makeId(),
        createdAt: new Date(),
        txt: "If you are looking for a place this is it. It is worth the 35 minute drive to stay by St. George. It was as described will recommend to everyone.",
        rate: utilService.getRandomIntInclusive(1, 5),
        by: {
          _id: "u105",
          fullname: "user5",
          imgUrl: "/src/assets/icons/user-f.png",
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
  await storageService.post(STORAGE_KEY, ...gStays2);
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
