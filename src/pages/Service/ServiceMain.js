import classNames from 'classnames/bind';
import styles from './ServiceMain.module.scss';
import { useState } from 'react';
//
import WaitingService from './WaitingService/WaitingService';
import Served from './Served/Served';

const cx = classNames.bind(styles);

const ServiceMain = () => {
  const [ChangePage, setChangePage] = useState(1);

  //====================
  //chuyển trang
  //change page
  const changePage = (i) => {
    return (e) => {
      setChangePage(i);
    };
  };
  //====================

  return (
    <div className={cx('wrapper')}>
      {/* ==================== */}
      <div className={cx('container1')}>
        {/* ==================== */}
        {ChangePage === 1 ? (
          <div className={cx('convert-1', 'activated')} onClick={changePage(1)}>
            <h3 className={cx('text')}>Chờ phục vụ</h3>
          </div>
        ) : (
          <div className={cx('convert-1')} onClick={changePage(1)}>
            <h3 className={cx('text')}>Chờ phục vụ</h3>
          </div>
        )}

        {/* ==================== */}
        {ChangePage === 2 ? (
          <div className={cx('convert-3', 'activated')} onClick={changePage(2)}>
            <h3 className={cx('text')}>Đã phục vụ</h3>
          </div>
        ) : (
          <div className={cx('convert-3')} onClick={changePage(2)}>
            <h3 className={cx('text')}>Đã phục vụ</h3>
          </div>
        )}
      </div>
      {/* ==================== */}
      <div className={cx('container2')}>
        {ChangePage === 1 && <WaitingService />}
        {ChangePage === 2 && <Served />}
      </div>
    </div>
  );
};

export default ServiceMain;
