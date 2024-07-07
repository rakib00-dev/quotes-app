const text = document.getElementById('text');
const author = document.getElementById('author');
let result;
async function data() {
  const url = 'https://type.fit/api/quotes';

  try {
    const response = await fetch(url);
    result = await response.json();
    list = result[Math.floor(Math.random() * result.length)];

    // const list = result.map((e) => {
    //   const txt = e.text;
    //   const aut = e.author;
    //   console.log(e.length);
    //   let g = e[Math.floor(Math.random() * e.length)];
    //   console.log(g);
    // });
    console.log(list);
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}
data();
