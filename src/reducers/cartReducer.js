export const initialState = {
  flight: {
    origin: "Andorra la Vella",
    destination: "Algiers",
    startDate: "2023-03-11",
    endDate: "2023-03-18",
    price: 520,
    passengers: 4,
    country: "Algeria",
  },
  accomodation: {
    destination: "Algiers",
    startDate: "2023-03-11",
    endDate: "2023-03-18",
    people: 4,
    price: 23,
    name: "Wilderness Vanguard",
    country: "Algeria",
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

    default:
      return state;
  }
};
