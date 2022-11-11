import classNames from 'classnames/bind';
import styles from './OrderKitchen.module.scss';
import { useState } from 'react';
//
import NewOrder from './MesNewOrder/NewOrder';
import CompleteOrder from './CompleteOrder/CompleteOrder';
import HistoryOrder from './HistoryOrder/HistoryOrder';

const cx = classNames.bind(styles);

const OrderKitchen = () => {
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
            <h3 className={cx('text')}>Đơn mới</h3>
          </div>
        ) : (
          <div className={cx('convert-1')} onClick={changePage(1)}>
            <h3 className={cx('text')}>Đơn mới</h3>
          </div>
        )}

        {/* ==================== */}
        {ChangePage === 2 ? (
          <div className={cx('convert-2', 'activated')} onClick={changePage(2)}>
            <h3 className={cx('text')}>Đơn đang làm</h3>
          </div>
        ) : (
          <div className={cx('convert-2')} onClick={changePage(2)}>
            <h3 className={cx('text')}>Đơn đang làm</h3>
          </div>
        )}
        {/* ==================== */}
        {ChangePage === 3 ? (
          <div className={cx('convert-3', 'activated')} onClick={changePage(3)}>
            <h3 className={cx('text')}>Hoàn thành</h3>
          </div>
        ) : (
          <div className={cx('convert-3')} onClick={changePage(3)}>
            <h3 className={cx('text')}>Hoàn thành</h3>
          </div>
        )}
      </div>
      {/* ==================== */}
      <div className={cx('container2')}>
        {ChangePage === 1 && <NewOrder />}
        {ChangePage === 2 && <CompleteOrder />}
        {ChangePage === 3 && <HistoryOrder />}
      </div>
    </div>
  );
};

export default OrderKitchen;
