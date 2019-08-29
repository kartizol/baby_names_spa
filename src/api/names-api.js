import {API_ROOT, API_VENDOR, API_VERSION} from "./../constants"

const makeHeaders = (vendor, version) => {
  return {
    "Content-Type": "application/json; charset=utf-8",
    "Accept": `application/${vendor}+json;version=${version}`
  };
};

class NamesApi {
  static getNameListByCode(code) {
    return fetch(`${API_ROOT}/api/name_lists/${code}`, {
      headers: makeHeaders(API_VENDOR, API_VERSION)
    });
  }

  static createNameList() {
    return fetch(`${API_ROOT}/api/name_lists`, {
      method: "POST",
      headers: makeHeaders(API_VENDOR, API_VERSION)
    });
  }

  static getNamesByNameListCode(code) {
    return fetch(`${API_ROOT}/api/name_lists/${code}/names`, {
      headers: makeHeaders(API_VENDOR, API_VERSION)
    });
  }

  static createName(code, name) {
    return fetch(`${API_ROOT}/api/name_lists/${code}/names`, {
      method: "POST",
      body: JSON.stringify({
        name: name,
        crossed_out: false
      }),
      headers: makeHeaders(API_VENDOR, API_VERSION)
    });
  }

  static crossOutName(code, nameId, crossedOut) {
    return fetch(`${API_ROOT}/api/name_lists/${code}/names/${nameId}`, {
      method: "PUT",
      body: JSON.stringify({crossed_out: crossedOut}),
      headers: makeHeaders(API_VENDOR, API_VERSION)
    });
  }
}

export default NamesApi;
