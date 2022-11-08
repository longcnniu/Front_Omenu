import classNames from 'classnames/bind';
import styles from './CardOrder.module.scss';
//
import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { apiUrl, cookieValue, numberFormat } from '../../../../contexts/contexts';
import axios from 'axios';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import { BiDish } from 'react-icons/bi';
//
const cx = classNames.bind(styles);

const CardOrder = (props) => {
  return (
    <>
      {props.status === true ? (
        <div className={cx('warrap-t')}>
          <BiDish className={cx('icon')} />
          <h3 className={cx('text')}>{props.billCode}</h3>
          <h3 className={cx('text')}>Thời gian: {moment(props.Time).locale('vi').format('hh:mm')}</h3>
        </div>
      ) : (
        <div className={cx('warrap')}>
          <BiDish className={cx('icon')} />
          <h3 className={cx('text')}>{props.billCode}</h3>
          <h3 className={cx('text')}>Thời gian: {moment(props.Time).locale('vi').format('hh:mm')}</h3>
        </div>
      )}
    </>
  );
};

export default CardOrder;
