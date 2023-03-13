// Mock data for dev purposes
// export const initialState = {
//   flight: {
//     origin: "Andorra la Vella",
//     destination: "Tirana",
//     startDate: "2023-03-09",
//     endDate: "2023-03-10",
//     price: 302,
//     passengers: 1,
//     country: "Albania",
//   },
//   accomodation: {
//     destination: "Tirana",
//     startDate: "2023-03-09",
//     endDate: "2023-03-10",
//     people: 1,
//     price: 43,
//     name: "Journey Nirvana",
//     country: "Albania",
//   },
// };

export const initialState = {
  flight: {
    origin: "",
    destination: "",
    startDate: "",
    endDate: "",
    price: 0,
    passengers: 1,
    country: "",
  },
  accomodation: {
    destination: "",
    startDate: "",
    endDate: "",
    people: 1,
    price: 0,
    name: "",
    country: "",
  },
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "BOOK_HOTEL":
      return {
        ...state,
        accomodation: action.payload,
      };
    case "BOOK_FLIGHT":
      return {
        ...state,
        flight: action.payload,
      };
    case "RESET_CART":
      return { ...action.payload };
    default:
      return state;
  }
};
