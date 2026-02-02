import Header from '../components/Header';
import Button from '../components/Button';
import DiaryList from '../components/DiaryList';
import { useContext, useState } from 'react';
import { DiaryStateContext } from '../App';
import { getMonthlyData } from '../util/get-monthly-data';
import usePageTitle from '../hooks/usePageTitle';

export default function Home() {
  const data = useContext(DiaryStateContext);
  const [pivotDate, setPivotDate] = useState(new Date());
  // 페이지 탭 타이틀 수정
  usePageTitle('감정 일기장');

  // 현재 달의 필터링해서 일기장 데이터를 반환해준다.
  const mothlyData = getMonthlyData(pivotDate, data);

  const onIcreaseMonth = () => {
    // Date 객체에 두개 인자로 현재 년도와 현재 월의 다음 월로 할당
    // 다음 달로 넘어감
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
  };

  const onDecreaseMonth = () => {
    // Date 객체에 두개 인자로 현재 년도와 현재 월의 이전 월로 할당
    // 이전 월로 넘어감
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
  };

  return (
    <div>
      <Header
        title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`}
        leftChild={<Button onClick={onDecreaseMonth} text={'<'} />}
        rightChild={<Button onClick={onIcreaseMonth} text={'>'} />}
      />
      <DiaryList data={mothlyData} />
    </div>
  );
}
