import ContactList from "../../component/ContactList";

let initialState = {
  ContactList: [],
  keyword: "",
};

function reducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case "ADD_CONTACT":
      return {
        ...state,
        ContactList: [
          ...state.contactList,
          {
            name: payload.name,
            phoneNumber: payload.phoneNumber,
          },
        ],
      };
    case "SEARCH_NAME":
      return {
        ...state,
        keyword: payload.keyword,
      };
    default:
      return { ...state };
  }
}

export default reducer;
