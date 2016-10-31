import {createStore} from 'redux'
import axios from 'axios'

const page = {
  currentPage:1,
  pageSize: 400
}
const types = {
  FETCH_BY_AID: 0,
  FETCH_BY_AID_SUCCESS: 1,
  FETCH_BY_AID_FAILD: 2
}

const urls = {
  FETCH_BY_AID: 'http://operation.renyan.cn/rest/noauth/card/select_by_album_id'
}

var fetchContentByAid = (aid) => {
  var params = Object.assign(page, {aid: aid})
  axios.get(urls.FETCH_BY_AID, {
    params: params
  }).then(value => {
    store.dispatch({type: types.FETCH_BY_AID_SUCCESS, data: value.data})
  }).catch(reason => {
    store.dispatch({type: types.FETCH_BY_AID_FAILD, data: reason.response})
  })
}

var reducer = (state, action) => {
  console.log(action)
  switch (action.type) {
    case types.FETCH_BY_AID:
      fetchContentByAid(action.data)
      break;
    case types.FETCH_BY_AID_SUCCESS:
      console.log(action.data)
      break;
    case types.FETCH_BY_AID_FAILD:
      console.log(action.data)
      break;
    default:
      console.log(1)
  }
}

var store = createStore(reducer)

module.exports = store
