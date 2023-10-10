import dayjs from "dayjs";
//将两个date1，date2返回数字为相差的天数
export function calculateDateDifference(date1, date2) {
  return dayjs(date2).diff(date1,"day");
}