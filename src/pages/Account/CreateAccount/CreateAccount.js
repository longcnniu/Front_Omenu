import classNames from 'classnames/bind';
import styles from './CreateAccount.module.scss';
//input localhost file
import axios from 'axios';
import { apiUrl, cookieValue } from '../../../contexts/contexts';
import { useState } from 'react';
//
import { ToastContainer, toast } from 'react-toastify';
//
const cx = classNames.bind(styles);

const CreateAccount = () => {
  //data filetfields
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [role, setrole] = useState('');
  const [Name, setName] = useState('');
  //============================
  //tạo bàn
  const createTable = () => {
    axios
      .post(
        apiUrl + '/v1/register',
        {
          email,
          password,
          role,
          Name,
        },
        {
          headers: {
            token: cookieValue(),
          },
        },
      )
      .then((res) => {
        pupsuccess(res.data.message);
        setemail('');
        setpassword('');
        setrole('');
        setName('');
      })
      .catch((error) => {
        pupwarn(error.response.data.message);
      });
  };
  //============================
  //pup thong bao
  const pupwarn = (message) =>
    toast.warn(message, {
      position: 'bottom-left',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const pupsuccess = (message) =>
    toast.success(message, {
      position: 'bottom-left',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  //================================
  return (
    <div className={cx('wrapper')}>
      <div className={cx('container1')}>
        <h3>Tạo tài khoản</h3>
        {/* ================================== */}
        <div className={cx('container-infor')}>
          <label>Email</label>
          <input
            type="email"
            className={cx('container-infor-ch')}
            onChange={(e) => setemail(e.target.value)}
            value={email}
          />
        </div>
        {/* ================================== */}
        <div className={cx('container-infor')}>
          <label>Tên</label>
          <input
            type="email"
            className={cx('container-infor-ch')}
            onChange={(e) => setName(e.target.value)}
            value={Name}
          />
        </div>
        {/* ================================== */}
        <div className={cx('container-infor')}>
          <label>Mật khẩu</label>
          <input
            type="password"
            className={cx('container-infor-ch')}
            onChange={(e) => setpassword(e.target.value)}
            value={password}
          />
        </div>
        {/* ================================== */}
        <div className={cx('container-infor')}>
          <label>Quyền</label>
          <select className={cx('select-filters-ch')} onChange={(e) => setrole(e.target.value)} value={role}>
            <option value="">Vui lòng chọn</option>
            <option value="admin">Admin</option>
            <option value="qa">Qa</option>
            <option value="staff">Staff</option>
          </select>
        </div>
        {/* ================================== */}
        <button className={cx('container-btn')} onClick={createTable}>
          Tạo mới
        </button>
      </div>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default CreateAccount;
