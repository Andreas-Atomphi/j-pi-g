

const inoca = new XMLHttpRequest();
inoca.open("GET", "localhost:80/sasas")
inoca.onreadystatechange = (x, y) => console.log(x, y);

inoca.setRequestHeader('X-PINGOTHER', 'pingpong');
inoca.setRequestHeader('Content-Type', 'application/xml');
inoca.send().then((x) => console.log(x));
