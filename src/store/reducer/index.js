import {
  ADD_WISH,
  DELETE_WISH,
  COMPLETE_WISH,
  SEARCH_WISH,
  SET_WISHLIST,
  ADD_WISH_FINISH,
  DELETE_WISH_FINISH,
  COMPLETE_WISH_FINISH,
  SEARCH_WISH_FINISH,
  SET_WISHLIST_FINISH,
} from '../constant';
const initState = {
  count: 0,
  list: [],
};

const wishReducer = (state = initState, action) => {
  switch (action.type) {
    /* saga相关的action */
    // 添加wish完成
    case ADD_WISH_FINISH: {
      const newState = JSON.parse(JSON.stringify(state));
      newState.list.push(action.wish);
      return newState;
    }
    // 删除一条wish完成
    case DELETE_WISH_FINISH: {
      const newState = JSON.parse(JSON.stringify(state));
      const newWishList = newState.list.filter((item) => item.id !== action.id);
      newState.list = newWishList;
      return newState;
    }
    // 实现愿望完成
    case COMPLETE_WISH_FINISH: {
      const newState = JSON.parse(JSON.stringify(state));
      const newWishList = newState.list.map((item) => {
        if (item.id === action.id && !item.complete) {
          item.complete = true;
        }
        return item;
      });
      newState.list = newWishList;
      return newState;
    }
    // 查找数据已完成
    case SEARCH_WISH_FINISH: // 查找数据
      if (action.text === '') {
        return state;
      } else {
        return state.filter((item) => {
          return item.content.indexOf(action.text) !== -1;
        });
      }
    // 设置愿望清单 已完成
    case SET_WISHLIST_FINISH: {
      state.list = action.wishList;
      return { ...state };
    }
    // 普通action默认
    default:
      return state;
  }
};

export default wishReducer;
