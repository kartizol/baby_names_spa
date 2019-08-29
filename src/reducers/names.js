import {NamesConstants} from "./../constants/index"

const initialState = {
  nameListCode: null,
  names: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case NamesConstants.GET_NAME_LIST_BY_CODE_SUCCESS:
    case NamesConstants.CREATE_NAME_LIST_SUCCESS:
      return {
        nameListCode: action.payload.code,
        names: null
      };
    case NamesConstants.GET_NAME_LIST_BY_CODE_ERROR:
    case NamesConstants.CREATE_NAME_LIST_ERROR:
      return {
        nameListCode: null,
        names: null
      };
    case NamesConstants.GET_NAMES_BY_NAME_LIST_CODE_SUCCESS:
      return {
        nameListCode: state.nameListCode,
        names: action.payload
      };
    case NamesConstants.GET_NAMES_BY_NAME_LIST_CODE_ERROR:
      return {
        nameListCode: state.nameListCode,
        names: []
      };
    case NamesConstants.CROSS_OUT_NAME_SUCCESS:
      return {
        nameListCode: state.nameListCode,
        names: state.names.map(name => name.id === action.payload.id
          ? {...name, crossed_out: action.payload.crossed_out}
          : name)
      };
    case NamesConstants.NAME_RECEIVED_SUCCESS:
      let names = [];
      if (!state.names.some(name => name.id === action.payload.id)) {
        names = state.names.concat(action.payload);
      } else {
        names = state.names.map(name => name.id === action.payload.id
          ? action.payload
          : name);
      }
      return {
        nameListCode: state.nameListCode,
        names: names
      };
    case NamesConstants.CREATE_NAME_SUCCESS:
    case NamesConstants.CREATE_NAME_ERROR:
    case NamesConstants.CROSS_OUT_NAME_ERROR:
    default:
      return state;
  }
};
