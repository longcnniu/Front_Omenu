import classNames from 'classnames/bind';
import styles from './WaitingService.module.scss';
//
import React, { useState, useEffect } from 'react';
import { apiUrl, cookieValue, socket } from '../../../contexts/contexts';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import CardService from '../../../components/Layout/components/CardService/CardService';
//
const cx = classNames.bind(styles);

const WaitingService = () => {
  const navigate = useNavigate();
  const [DataOrder, setDataOrder] = useState([]);
  //reload
  const [reload, setreload] = useState(true);
  //==========================================

  useEffect(() => {
    socket.on('statusOrderK', (data) => {
      setreload(!reload);
    });
  }, [reload]);

  useEffect(() => {
    axios
      .get(apiUrl + '/v1/get-all-servide-waiting', {
        headers: {
          token: cookieValue(),
        },
      })
      .then((res) => {
        setDataOrder(res.data.data);
      })
      .catch((error) => {
        // console.log(error);
      });
  }, [reload]);
  //==========================================
  //chuyen trang
  const NextPage = (codeBill, id) => {
    navigate('/detail-waiting/' + codeBill + '/' + id);
  };
  //==========================================
  //rander ui
  const listOrder = DataOrder.map((data) => {
    return (
      <div
        key={data._id}
        onClick={() => {
          NextPage(data.codeBill, data._id);
        }}
      >
        <CardService
          billCode={data.codeBill}
          Time={data.createdAt}
          Sector={data.Sector[0].SectorName}
          Table={data.Table[0].nameTable}
        />
      </div>
    );
  });
  //==========================================
  return <div className={cx('container1')}>{listOrder.length > 0 ? listOrder : <h3>Đang chờ đơn</h3>}</div>;
};

export default WaitingService;
