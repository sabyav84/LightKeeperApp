export function reshapePhoneNum(phone) {
  //get portions of phone number
  let areaCode = phone.slice(1, 4);
  let firstThree = phone.slice(4, 7);
  let lastFour = phone.slice(7, 11);

  //reformat and return phone number
  return areaCode + "-" + firstThree + "-" + lastFour;
}

export function timeConverter(UNIX_timestamp) {
  let a = new Date(UNIX_timestamp * 1000);

  let year = a.getFullYear();
  let month = a.getMonth();
  let date = a.getDate();

  let time = month + "/" + date + "/" + year;
  return time;
}
