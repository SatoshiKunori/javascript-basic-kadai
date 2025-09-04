const now = new Date();

const year = now.getFullYear();
const month = now.getMonth() + 1; 
const day = now.getDate();

const today = `${year}年${month}月${day}日`;

console.log(today); 