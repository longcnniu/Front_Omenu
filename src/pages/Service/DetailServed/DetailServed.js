import classNames from 'classnames/bind';
import styles from './DetailServed.module.scss';
//
import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { apiUrl, cookieValue } from '../../../contexts/contexts';
// import { ToastContainer, toast } from 'react-toastify';
import moment from 'moment';
// import { useNavigate } from 'react-router-dom';
//
const cx = classNames.bind(styles);

const DetailServed = () => {
  // const navigate = useNavigate();
  const [Allbill, setAllbill] = useState([]);
  const [dataFood, setdataFood] = useState([]);

  //=====================================
  //pup thong bao
  // const pupwarn = (message) =>
  //   toast.warn(message, {
  //     position: 'bottom-left',
  //     autoClose: 2000,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //   });
  // const pupsuccess = (message) =>
  //   toast.success(message, {
  //     position: 'bottom-left',
  //     autoClose: 1000,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //   });

  //=========================================
  useEffect(() => {
    const test = (am, bm) => {
      setdataFood([]);
      let result = am.concat(bm).reduce((a, c) => {
        let obj = a.find((i) => i.IDnumber === c.IDFood);
        if (obj) {
          obj.count += c.quantity;
        } else {
          a.push(c);
        }
        return a;
      }, []);
      setdataFood((d) => d.concat(result));
    };
    const url = window.location.href.split('/');
    axios
      .post(
        apiUrl + '/v1/get-detail-orderk-by-id',
        { id: url[5] },
        {
          headers: {
            token: cookieValue(),
          },
        },
      )
      .then((res) => {
        setAllbill(res.data.data[0]);
        test(res.data.data[0].Food, res.data.data[0].OrderNumberIDFood);
      })
      .catch((error) => {});
  }, []);
  //=====================================
  //xác nhận đơn
  // const confirm = () => {
  //   const url = window.location.href.split('/');
  //   axios
  //     .post(
  //       apiUrl + '/v1/servided',
  //       {
  //         id: url[5],
  //       },
  //       {
  //         headers: {
  //           token: cookieValue(),
  //         },
  //       },
  //     )
  //     .then((res) => {
  //       pupsuccess(res.data.message);
  //       function NextPage() {
  //         navigate('/detail-serviced/' + url[4] + '/' + url[5]);
  //         clearTimeout(NextPage);
  //       }
  //       setTimeout(NextPage, 2000);
  //     })
  //     .catch((error) => {});
  // };

  //=====================================
  //rander ui
  //rander menu
  const listMenu = dataFood.map((data) => {
    return (
      <tr key={data._id}>
        <td className={cx('container-table-td')}>{data.NameFood}</td>
        <td className={cx('container-table-td')}>{data.count}</td>
      </tr>
    );
  });
  return (
    <div className={cx('wrapper')}>
      <div className={cx('container1')}>
        <div className={cx('container-infor')}>
          <h3>Thông tin bàn</h3>
          <p>Thời gian: {moment(Allbill.createdAt).locale('vi').format('HH:mm DD/MM/YYYY')}</p>
          <p>Mã hóa đơn: {Allbill.codeBill}</p>
        </div>
        <h3>Thông tin món chờ chế biến</h3>
        <table className={cx('container-table')}>
          <tbody>
            <tr>
              <th className={cx('container-table-th')}>Tên món</th>
              <th className={cx('container-table-th')}>Số lượng</th>
            </tr>
            {listMenu}
          </tbody>
        </table>
        <div className={cx('container-btn')}>
          {/* <button className={cx('btn')} onClick={confirm}>
            Xác nhận lên món
          </button> */}
        </div>
      </div>

      {/* <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      /> */}
    </div>
  );
};

export default DetailServed;
