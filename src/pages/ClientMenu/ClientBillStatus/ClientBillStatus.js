import classNames from 'classnames/bind';
import styles from './ClientBillStatus.module.scss';
//input localhost file
import axios from 'axios';
import { apiUrl, cookieValue } from '../../../contexts/contexts';
import { useEffect, useState } from 'react';
import Header from '../../../components/Client/Header/Header';
import CardOrder from '../../../components/Layout/components/OrderKitchen/CardOrder';
//
const cx = classNames.bind(styles);

const ClientBillStatus = () => {
  const [DataOrder, setDataOrder] = useState([]);
  //=======================================
  useEffect(() => {
    const url = window.location.href.split('/');
    axios
      .post(
        apiUrl + '/v1/get-detail-orderk-by-numbertable',
        { tableNumberID: url[5] },
        {
          headers: {
            token: cookieValue(),
          },
        },
      )
      .then((res) => {
        // console.log(res.data.data);
        setDataOrder(res.data.data);
      })
      .catch((errors) => {
        // console.log(errors);
      });
  }, []);

  //==========================================
  //rander ui
  const listOrder = DataOrder.map((data) => {
    return (
      <div
        key={data._id}
        onClick={() => {
          // NextPage(data.codeBill, data._id);
        }}
      >
        <CardOrder billCode={data.codeBill} Time={data.createdAt} status={data.status} Complete={data.Complete} />
      </div>
    );
  });

  return (
    <div>
      <Header />
      <div className={cx('container1')}>{listOrder.length > 0 ? listOrder : <h3>Đang chờ đơn</h3>}</div>
    </div>
  );
};

export default ClientBillStatus;
