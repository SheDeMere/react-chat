const initialState = {
  contacts: [],
  loading: false,
};

export default function contacts(state = initialState, action) {
  switch (action.type) {
    case 'contacts/load/start':
      return  {
        ...state,
        loading: true
      }

    case 'contacts/load/success':
      return {
        ...state,
        contacts: action.payload,
        loading: false
      }

    default:
      return state;
  }
}


export const loadContacts = () => {
  return (dispatch) => {
    dispatch({
      type: 'contacts/load/start',
    });

    fetch('https://api.intocode.ru:8001/api/contacts')
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: 'contacts/load/success',
          payload: json,
        });
      });
  };
};
