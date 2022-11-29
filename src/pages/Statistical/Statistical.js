import classNames from 'classnames/bind';
import styles from './Statistical.module.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import { apiUrl, cookieValue, numberFormat } from '../../contexts/contexts';
//
const cx = classNames.bind(styles);

const Statistical = () => {
  const [DataOrder, setDataOrder] = useState([]);
  const [change, setchange] = useState(1);
  const [inputdate, setinputdate] = useState('');

  useEffect(() => {
    if (change === 1) {
      axios
        .get(
          apiUrl + '/v1/statistical',
          {
            headers: {
              token: cookieValue(),
            },
          },
          {},
        )
        .then((res) => {
          setDataOrder(res.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      axios
        .post(
          apiUrl + '/v1/statistical-by-date',
          {
            headers: {
              token: cookieValue(),
            },
          },
          {
            date: inputdate,
          },
        )
        .then((res) => {
          setDataOrder(res.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [change, inputdate]);

  const listOrder = DataOrder.map((data) => {
    return (
      <tr key={data._id}>
        <td>{data.codeBill}</td>
        <td>{moment(data.createdAt).locale('vi').format('HH:mm DD/MM/YYYY')}</td>
        <td>{numberFormat.format(data.amount)}</td>
      </tr>
    );
  });

  return (
    <div className={cx('wrapper')}>
      <div>
        <input type="date" value={inputdate} onChange={(e) => setinputdate(e.target.value)}></input>
        <button onClick={() => setchange(2)}>Tìm</button>
        <button onClick={() => setchange(1)}>Tất cả</button>
      </div>
      <table>
        <tbody>
          <tr>
            <th>Code bill</th>
            <th>Thời gian</th>
            <th>Tổng tiền</th>
          </tr>
          {listOrder}
        </tbody>
      </table>
    </div>
  );
};

export default Statistical;
