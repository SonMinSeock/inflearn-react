/**
 * getStringDate 함수
 * 날짜 => YYYY-MM-DD 형식으로 문자열로 반환해주는 함수
 */

export const getStringDate = (targetDate) => {
  let year = targetDate.getFullYear();
  let month = targetDate.getMonth() + 1;
  let date = targetDate.getDate();

  if (month < 10) {
    month = `0${month}`;
  }

  if (date < 10) {
    date = `0${date}`;
  }

  return `${year}-${month}-${date}`;
};
