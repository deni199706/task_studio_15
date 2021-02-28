export const formatDate = (day, month, year) => {
  return `${day > 9 ? day : '0'+day}.${month > 9 ? month : '0'+month}.${year}`
}