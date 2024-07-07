const text = document.getElementById('text');
const author = document.getElementById('author');
const timer = document.getElementById('timer');
let result;

async function data() {
  const url = 'https://type.fit/api/quotes';

  try {
    const response = await fetch(url);
    result = await response.json();
    const list = result[Math.floor(Math.random() * result.length)];
    const txt = list.text;
    const num = list.author.search(',');
    const aut = list.author.slice(0, num);

    text.innerText = txt;
    author.innerText = aut;
    // const list = result.map((e) => {
    //   const txt = e.text;
    //   const aut = e.author;
    //   console.log(e.length);
    //   let g = e[Math.floor(Math.random() * e.length)];
    //   console.log(g);
    // });
    console.log(txt);
    console.log(aut);
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}
data();

let count = 8;
setInterval(() => {
  if (count <= 8) {
    count = count - 1;
  }
  timer.innerText = count;
  console.log(count);
}, 1000);

setInterval(() => {
  count = 8;
  data();
}, 8000);
