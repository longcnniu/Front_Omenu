import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

const Header = () => {
  const navigate = useNavigate();

  const BackHome = () => {
    navigate('/');
  };

  return (
    <div className={cx('wrapper')}>
      <div className={cx('container1')}>
        {/* =================== */}
        <div className={cx('container1-1')} onClick={BackHome}>
          <h3 className={cx('title')}>OMenu</h3>
        </div>
        {/* =================== */}
        <div className={cx('container1-2')}>Đăng xuất</div>
      </div>
    </div>
  );
};

export default Header;
