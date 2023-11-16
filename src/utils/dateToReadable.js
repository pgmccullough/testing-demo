const monthToStr = (number) => {
  const monthArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  return monthArr[number];
}

export const dateToReadable = (timestamp) => {
  let formattedDate;
  const jsDate = new Date(timestamp);
  formattedDate = monthToStr(jsDate.getMonth());
  formattedDate += ` ${jsDate.getDate()}`;
  formattedDate += `, ${jsDate.getFullYear()}`;
  return formattedDate;
}