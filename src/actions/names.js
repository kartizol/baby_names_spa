import {toast} from "react-toastify"

import {NamesConstants} from "./../constants/index"
import NamesApi from "../api/names-api"
import history from "../history"

const handleResponse = response => {
  if (!response.ok) {
    throw response;
  }

  return response.status === 204 ? {} : response.json();
};

const handleError = (type, dispatch) => {
  return error => {
    error.json().then(errorResponse => {
      dispatch({type: type, payload: errorResponse.error});
      toast.error(errorResponse.error.detail);
    });
  };
};

const getNameListByCode = code => dispatch => {
  NamesApi.getNameListByCode(code)
    .then(handleResponse)
    .then(nameList => {
      dispatch({type: NamesConstants.GET_NAME_LIST_BY_CODE_SUCCESS, payload: nameList});
      history.push(`/${nameList.code}`);
    })
    .catch(handleError(NamesConstants.GET_NAME_LIST_BY_CODE_ERROR, dispatch));
};

const createNameList = () => dispatch => {
  NamesApi.createNameList()
    .then(handleResponse)
    .then(nameList => {
      dispatch({type: NamesConstants.CREATE_NAME_LIST_SUCCESS, payload: nameList});
      history.push(`/${nameList.code}`);
    })
    .catch(handleError(NamesConstants.CREATE_NAME_LIST_ERROR, dispatch));
};

const getNamesByNameListCode = code => dispatch => {
  NamesApi.getNamesByNameListCode(code)
    .then(handleResponse)
    .then(names => {
      dispatch({type: NamesConstants.GET_NAMES_BY_NAME_LIST_CODE_SUCCESS, payload: names});
    })
    .catch(handleError(NamesConstants.GET_NAMES_BY_NAME_LIST_CODE_ERROR, dispatch));
};

const createName = (code, name) => dispatch => {
  NamesApi.createName(code, name)
    .then(handleResponse)
    .then(name => {
      dispatch({type: NamesConstants.CREATE_NAME_SUCCESS, payload: name});
    })
    .catch(handleError(NamesConstants.CREATE_NAME_ERROR, dispatch));
};

const crossOutName = (code, nameId, crossedOut) => dispatch => {
  NamesApi.crossOutName(code, nameId, crossedOut)
    .then(handleResponse)
    .then(data => {
      dispatch({type: NamesConstants.CROSS_OUT_NAME_SUCCESS, payload: {id: nameId, crossed_out: crossedOut}});
    })
    .catch(handleError(NamesConstants.CROSS_OUT_NAME_ERROR, dispatch));
};

const nameReceived = name => dispatch => {
  dispatch({type: NamesConstants.NAME_RECEIVED_SUCCESS, payload: name.name});
  toast.info(`Name has been updated: ${name.name.name}`);
};

export const NamesActions = {
  getNameListByCode,
  createNameList,
  getNamesByNameListCode,
  createName,
  crossOutName,
  nameReceived
};