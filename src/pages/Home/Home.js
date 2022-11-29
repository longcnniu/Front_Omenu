import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import { TbArmchair } from 'react-icons/tb';
import { BiDish, BiFoodMenu } from 'react-icons/bi';
import { AiOutlineBook, AiOutlineException } from 'react-icons/ai';
import { BsFillPersonFill } from 'react-icons/bs';
//
import axios from 'axios';
import CardView from '../../components/Layout/components/Home/CardView';
import { useEffect, useState } from 'react';
//
import { apiUrl, cookieValue } from '../../contexts/contexts';
//
const cx = classNames.bind(styles);

const Home = () => {
  //======================================
  //role
  const [role, setrole] = useState('');

  useEffect(() => {
    axios
      .get(apiUrl + '/v1/role', {
        headers: {
          token: cookieValue(),
        },
      })
      .then((req) => {
        // console.log(req);
        setrole(req.data.role);
      });
  }, []);
  //======================================

  return (
    <div className={cx('wrapper')}>
      <div>Home</div>
      <div className={cx('container2')}>
        {role === 'admin' && (
          <>
            <CardView name="QL Bàn" icon={TbArmchair} url="table" />
            <CardView name="QL Order" icon={BiDish} url="order" />
            <CardView name="QL Thực đơn" icon={BiFoodMenu} url="menu" />
            <CardView name="QL đơn cho bếp" icon={BiFoodMenu} url="order-for-kitchen" />
            <CardView name="QL phục vụ" icon={AiOutlineBook} url="order-for-service" />
            <CardView name="QL tài khoản" icon={BsFillPersonFill} url="account" />
            <CardView name="Thống kê" icon={AiOutlineException} url="statistical" />
          </>
        )}
        {role === 'qa' && (
          <>
            <CardView name="QL Bàn" icon={TbArmchair} url="table" />
            <CardView name="QL Order" icon={BiDish} url="order" />
            <CardView name="QL Thực đơn" icon={BiFoodMenu} url="menu" />
            <CardView name="QL đơn cho bếp" icon={BiFoodMenu} url="order-for-kitchen" />
            <CardView name="QL phục vụ" icon={AiOutlineBook} url="order-for-service" />
            <CardView name="Thống kê" icon={AiOutlineException} url="statistical" />
          </>
        )}
        {role === 'staff' && (
          <>
            <CardView name="QL Order" icon={BiDish} url="order" />
            <CardView name="QL đơn cho bếp" icon={BiFoodMenu} url="order-for-kitchen" />
            <CardView name="QL phục vụ" icon={AiOutlineBook} url="order-for-service" />
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
