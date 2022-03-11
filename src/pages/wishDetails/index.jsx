import React, { memo, useState, useEffect } from 'react';
import Blank from '../../components/blank';
import WishList from '../../components/wishList';
import { useSelector } from 'react-redux';

/* 愿望清单详情页 */
export default memo(function WishDetails() {
  /* 获取愿望清单 */
  const wishList = useSelector((state) => state.list);
  /* 点击按钮写下新愿望 */

  if (!wishList || wishList.length === 0) {
    return <Blank />;
  } else {
    return <WishList />;
  }
});
