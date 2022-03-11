/* 管理api */
import service from './index';

/* api地址 */
const getWishListAPI = '/wishes';
const addWishAPI = '/wishes';
const deleteWishAPI = '/wishes';
const completeWishAPI = '/wishes';

/* get请求 */
export const requestWishList = () => service.get(getWishListAPI); // 获取wishList数据

/* post请求 */
export const addWish = (data) => service.post(addWishAPI, data);

/* put请求 */
export const completeWish = (data) => service.put(completeWishAPI, data);

/* delete请求 */
export const deleteWish = (data) =>
  service.delete(deleteWishAPI, { params: data });
