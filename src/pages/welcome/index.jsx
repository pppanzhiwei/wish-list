import React, { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { routerPaths } from '../../router';
import styles from '@/assets/css/welcome/welcome.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'antd-mobile/es';
/* 首页 */
export default memo(function Welcome() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  /* 点击按钮 */
  const handleClick = (e) => {
    /* 点击按钮后dispatch action 初始化redux*/

    navigate(routerPaths.WISH_DETAILS);
  };
  return (
    <div className={styles.Container}>
      <header className={styles.header}>头部部分</header>
      <Button>按钮</Button>
      <div style={{fontSize:'16px'}}>测试</div>
    </div>
  );
});
