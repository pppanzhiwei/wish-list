import {
  ADD_WISH,
  DELETE_WISH,
  COMPLETE_WISH,
  SEARCH_WISH,
  SET_WISHLIST,
  SET_WISHLIST_FINISH,
  ADD_WISH_FINISH,
  DELETE_WISH_FINISH,
  COMPLETE_WISH_FINISH,
  SEARCH_WISH_FINISH,
} from '../constant';

/* 设置愿望清单 */
export function setWishListAction() {
  return {
    type: SET_WISHLIST,
  };
}
/* 设置愿望清单完成 */
export function setWishListFinishAction(wishList) {
  return {
    type: SET_WISHLIST_FINISH,
    wishList,
  };
}

/* 添加愿望 */
export function addWishAction(wish) {
  return {
    type: ADD_WISH,
    wish,
  };
}
/* 添加愿望已完成 */
export function addWishFinishAction(wish) {
  return {
    type: ADD_WISH_FINISH,
    wish,
  };
}
/* 删除愿望 */
export function deleteWishAction(id) {
  return {
    type: DELETE_WISH,
    id,
  };
}
/* 删除愿望已完成 */
export function deleteWishFinishAction(id) {
  return {
    type: DELETE_WISH_FINISH,
    id,
  };
}
/* 实现愿望 */
export function completeWishAction(id) {
  return {
    type: COMPLETE_WISH,
    id,
  };
}
/* 实现愿望已完成 */
export function completeWishFinishAction(id) {
  return {
    type: COMPLETE_WISH_FINISH,
    id,
  };
}

/* 查找愿望 */
export function searchWishAction(text) {
  return {
    type: SEARCH_WISH,
    text,
  };
}
/* 查找愿望已完成 */
export function searchWishFinishAction(wishList) {
  return {
    type: SEARCH_WISH_FINISH,
    wishList,
  };
}
