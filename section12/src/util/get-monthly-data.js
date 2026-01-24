/**
 * getMonthlyData 함수
 * 현재 달 기준으로 일기장 데이터를 반환해주는 함수.
 * 예를 들어, 현재 달이 2026년 1월이면 2026년 1월달인 일기장들을 배열로 반환해준다.
 */
export const getMonthlyData = (pivotDate, data) => {
  // 이번 달 시작점과 끝 점 사이에 있으면 해당 달 안에 있는 일기장을 반환 해야한다.
  // 이번 달 시작점, 끝 점 구해보자.

  // 이번 달 시작 점 : new Date(현재 년도, 현재 달, 1일, 0시, 0분, 0초)
  const beginTime = new Date(pivotDate.getFullYear(), pivotDate.getMonth(), 1, 0, 0, 0).getTime(); // 시긴 값
  // 이번 달 끝 점 : new Date(현재 년도, 다음 달, 0일, 23시, 59분, 59초) -> 예를 들어, 이번 달이 1월 이면 1월 말로 설정됨.
  const endTime = new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1, 0, 23, 59, 59).getTime();

  return data.filter((item) => beginTime <= item.createdDate && item.createdDate <= endTime);
};
