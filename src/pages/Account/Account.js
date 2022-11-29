import axios from 'axios';
import classNames from 'classnames/bind';
import { useEffect } from 'react';
import { useState } from 'react';
import { apiUrl, cookieValue } from '../../contexts/contexts';
import styles from './Account.module.scss';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
//
const cx = classNames.bind(styles);

const Account = () => {
  let navigate = useNavigate();
  const [Account, setAccount] = useState([]);
  //reload
  const [reload, setreload] = useState(true);
  //================================
  //pup thong bao
  // const pupwarn = (message) =>
  //   toast.warn(message, {
  //     position: 'bottom-left',
  //     autoClose: 5000,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //   });

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
  useEffect(() => {
    axios
      .get(apiUrl + '/v1/get-all-account', {
        headers: {
          token: cookieValue(),
        },
      })
      .then((res) => {
        setAccount(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [reload]);

  //================================
  //khóa tài khoản
  const lockAccount = (id, islock) => {
    axios
      .post(
        apiUrl + '/v1/lock-account',
        {
          ID: id,
          islock: !islock,
        },
        {
          headers: {
            token: cookieValue(),
          },
        },
      )
      .then((res) => {
        setreload(!reload);
        pupsuccess(res.data.message);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //khôi phục
  const resetAccount = (id) => {
    axios
      .post(
        apiUrl + '/v1/reset-account',
        { ID: id },
        {
          headers: {
            token: cookieValue(),
          },
        },
      )
      .then((res) => {
        setreload(!reload);
        pupsuccess(res.data.message);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //xóa
  const deleteAccount = (id) => {
    axios
      .post(
        apiUrl + '/v1/delete-account',
        { ID: id },
        {
          headers: {
            token: cookieValue(),
          },
        },
      )
      .then((res) => {
        setreload(!reload);
        pupsuccess(res.data.message);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //chuyển trang
  const NextPage = () => {
    navigate('/create-account');
  };
  //================================
  //rander ui
  const listAccount = Account.map((data) => {
    return (
      <tr key={data._id}>
        <td>{data.email}</td>
        <td>{data.role}</td>
        <td>{data.Name}</td>
        <td>{data.islock === false ? 'Hoạt động' : 'Khóa'}</td>
        <td>
          <button className={cx('btn')} onClick={() => lockAccount(data._id, data.islock)}>
            {data.islock === false ? 'Khóa' : 'Mở khóa'}
          </button>
          <button className={cx('btn-r')} onClick={() => resetAccount(data._id)}>
            Khôi phục
          </button>
          <button className={cx('btn-d')} onClick={() => deleteAccount(data._id)}>
            Xóa
          </button>
        </td>
      </tr>
    );
  });

  return (
    <>
      <div className={cx('wrapper')}>
        <div className={cx('container1')}>
          <button className={cx('btn')} onClick={NextPage}>
            Thêm tài khoản
          </button>
        </div>
        <div className={cx('container2')}>
          <table>
            <tbody>
              <tr>
                <th>Email</th>
                <th>Role</th>
                <th>Name</th>
                <th>Trạng thái</th>
                <th>...</th>
              </tr>
              {listAccount}
            </tbody>
          </table>
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
    </>
  );
};

export default Account;
