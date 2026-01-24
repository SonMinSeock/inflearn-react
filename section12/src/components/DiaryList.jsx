import { useNavigate } from 'react-router-dom';
import Button from './Button';
import DiaryItem from './DiaryItem';
import './DiaryList.css';
import { useState } from 'react';

export default function DiaryList({ data }) {
  const [sortType, setSortType] = useState('latest');

  const nav = useNavigate();

  const onChangeSortType = (e) => {
    setSortType(e.target.value);
  };

  const getSortedData = () => {
    return data.toSorted((a, b) => {
      if (sortType === 'oldest') {
        // 오래된 순으로 정렬됨
        return Number(a.createdDate) - Number(b.createdDate);
      } else {
        // 최근 순으로 정렬됨
        return Number(b.createdDate) - Number(a.createdDate);
      }
    }); // 정렬된 데이터로 새 배열로 반환
  };

  return (
    <div className="DiaryList">
      <div className="menu_bar">
        <select onChange={onChangeSortType}>
          <option value={'latest'}>최신순</option>
          <option value={'oldest'}>오래된 순</option>
        </select>
        <Button type={'POSITIVE'} text={'새 일기 쓰기'} onClick={() => nav('/new')} />
      </div>
      <div className="list_wrapper">
        {getSortedData().map((item) => (
          <DiaryItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
