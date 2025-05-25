// src/utils/dateUtils.js
// 날짜 유틸 함수
export const getToday = () => {
  return new Date().toLocaleDateString("en-CA");
};

export const getDaysSince = (dateString) => {
  const todayStr = new Date().toLocaleDateString("en-CA");
  const pastStr = new Date(dateString).toLocaleDateString("en-CA");
  const todayDate = new Date(todayStr);
  const pastDate = new Date(pastStr);
  const diffTime = todayDate.getTime() - pastDate.getTime();
  return Math.floor(diffTime / (1000 * 60 * 60 * 24));
};
