function formatDate(date) {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear().toString().substr(-2);
  const hours = date.getHours();
  const minutes = date.getMinutes();

  return `${day} ${month} ${year} | ${hours}:${minutes < 10 ? '0' + minutes : minutes}`;
}

const datetime = document.getElementById('datetime');
const currentDate = new Date();

const yesterday = new Date(currentDate);
yesterday.setDate(currentDate.getDate() - 1);

datetime.innerText = formatDate(yesterday);
