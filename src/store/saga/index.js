import { put, all, call, takeLatest, takeEvery } from 'redux-saga/effects';
import {
  ADD_WISH,
  COMPLETE_WISH,
  DELETE_WISH,
  SET_WISHLIST,
} from '../constant'; // 导入action变量
import {
  completeWishFinishAction,
  addWishFinishAction,
  deleteWishFinishAction,
  setWishListFinishAction,
} from '../actions';

import {
  addWish,
  deleteWish,
  requestWishList,
  completeWish,
} from '../../request/api';
import { formatDate } from '../../utils/index';

// workSaga
// saga1 获取愿望清单的saga
function* getWishListSaga() {
  try {
    const res = yield call(requestWishList); // axios请求到wishList数据
    const sagaAction = setWishListFinishAction(res); //
    yield put(sagaAction); // put即内部dispatch
  } catch (e) {
    console.log('网络请求失败');
  }
}
// saga2 异步操作更新wishList
function* completeWishSaga(action) {
  try {
    yield call(completeWish, action.id);
    const sagaAction = completeWishFinishAction(action.id);
    yield put(sagaAction);
  } catch (e) {
    console.log('网络请求失败');
  }
}

// saga3 异步操作添加一条wishList
function* addWishSaga(action) {
  try {
    const { content } = action; // 获取wish的内容
    const date = formatDate(new Date());
    const wish = {
      content,
      date,
      complete: false,
    };
    const id = yield call(addWish, [wish]);
    wish.id = id;
    const sagaAction = addWishFinishAction(wish);
    yield put(sagaAction);
  } catch (e) {
    console.log('网络请求失败');
  }
}
// saga4 异步操作删除一条wishItem
function* deleteWishSaga(action) {
  try {
    const { id } = action;
    const sagaAction = deleteWishFinishAction(id);
    yield call(deleteWish, [id]);
    yield put(sagaAction);
  } catch (e) {
    console.log('网络请求失败');
  }
}

// saga5 异步操作查询wishList

// watchSaga
// INIT_LIST的action
function* watchSetActionSaga() {
  /* yield takeEvery(INIT_WISHLIST, getWishList); */
  yield takeLatest(SET_WISHLIST, getWishListSaga);
}
// 监听delete的action
function* watchDeleteActionSaga() {
  yield takeEvery(DELETE_WISH, deleteWishSaga);
}

function* watchAddActionSaga() {
  yield takeLatest(ADD_WISH, addWishSaga);
}

function* watchCompleteActionSaga() {
  yield takeLatest(COMPLETE_WISH, completeWishSaga);
}

function* mySaga() {
  yield all([
    watchSetActionSaga(),
    watchDeleteActionSaga(),
    watchAddActionSaga(),
    watchCompleteActionSaga(),
  ]);
}
export default mySaga;
