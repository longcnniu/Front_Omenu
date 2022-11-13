import classNames from 'classnames/bind';
import styles from './CardService.module.scss';
//
import React from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import { apiUrl, cookieValue, numberFormat } from '../../../../contexts/contexts';
// import axios from 'axios';
import moment from 'moment';
// import { useNavigate } from 'react-router-dom';
import { BiDish } from 'react-icons/bi';
//
const cx = classNames.bind(styles);

const CardService = (props) => {
  return (
    <>
      {props.status === true ? (
        <div className={cx('warrap-t')}>
          <BiDish className={cx('icon')} />
          <h3 className={cx('text')}>Bill: {props.billCode}</h3>
          <h3 className={cx('text')}>
            {props.Table} - {props.Sector}
          </h3>
          <h3 className={cx('text')}>Thời gian: {moment(props.Time).locale('vi').format('HH:mm')}</h3>
        </div>
      ) : (
        <div className={cx('warrap')}>
          <BiDish className={cx('icon')} />
          <h3 className={cx('text')}>Bill: {props.billCode}</h3>
          <h3 className={cx('text')}>
            Bàn: {props.Table} - {props.Sector}
          </h3>
          <h3 className={cx('text')}>Thời gian: {moment(props.Time).locale('vi').format('HH:mm')}</h3>
        </div>
      )}
    </>
  );
};

export default CardService;
