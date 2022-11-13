import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import { TbArmchair } from 'react-icons/tb';
import { BiDish, BiFoodMenu } from 'react-icons/bi';
import { AiOutlineBook } from 'react-icons/ai';
//
import CardView from '../../components/Layout/components/Home/CardView';
//
const cx = classNames.bind(styles);

const Home = () => {
  return (
    <div className={cx('wrapper')}>
      <div>Home</div>
      <div className={cx('container2')}>
        <CardView name="QL Bàn" icon={TbArmchair} url="table" />
        <CardView name="QL Order" icon={BiDish} url="order" />
        <CardView name="QL Thực đơn" icon={BiFoodMenu} url="menu" />
        <CardView name="QL đơn cho bếp" icon={BiFoodMenu} url="order-for-kitchen" />
        <CardView name="QL phục vụ" icon={AiOutlineBook} url="order-for-service" />
      </div>
    </div>
  );
};

export default Home;
