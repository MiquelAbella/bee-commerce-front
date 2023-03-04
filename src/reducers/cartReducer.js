export const initialState = {
  flight: {
    origin: null,
    destination: null,
    price: null,
    passengers: null,
    date: null,
  },
  accomodation: {
    city: null,
    hotel: null,
    price: null,
    image: null,
    people: null,
    startDate: null,
    endDate: null,
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
