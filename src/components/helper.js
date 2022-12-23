/* eslint-disable global-require */
const images = {
  jordan: require('../assets/jordan.png'),
  lebron: require('../assets/lebron.png'),
  kareem: require('../assets/kareem.png'),
  russell: require('../assets/russell.png'),
  magic: require('../assets/magic.png'),
  wilt: require('../assets/wilt.png'),
  bird: require('../assets/bird.png'),
  shaq: require('../assets/shaq.png'),
  duncan: require('../assets/duncan.png'),
  kobe: require('../assets/kobe.png'),
  hakeem: require('../assets/hakeem.png'),
  oscar: require('../assets/oscar.png'),
  kd: require('../assets/kd.png'),
  west: require('../assets/west.png'),
  steph: require('../assets/steph.png'),
  malone: require('../assets/malone.png'),
}

// Fisher–Yates Shuffle
function shuffleId() {
  const playerList = [
    {name:"Michael Jordan",id:"jordan",img:images.jordan},
    {name:"Lebron James",id:"lebron",img:images.lebron},
    {name:"Kareem Abdul-Jabbar",id:"kareem",img:images.kareem},
    {name:"Bill Russell",id:"russell",img:images.russell},
    {name:"Magic Johnson",id:"magic",img:images.magic},
    {name:"Wilt Chamberlain",id:"wilt",img:images.wilt},
    {name:"Larry Bird",id:"bird",img:images.bird},
    {name:"Shaquille O'Neal",id:"shaq",img:images.shaq},
    {name:"Tim Duncan",id:"duncan",img:images.duncan},
    {name:"Kobe Bryant",id:"kobe",img:images.kobe},
    {name:"Hakeem Olajuwon",id:"hakeem",img:images.hakeem},
    {name:"Oscar Robertson",id:"oscar",img:images.oscar},
    {name:"Kevin Durant",id:"kd",img:images.kd},
    {name:"Jerry West",id:"west",img:images.west},
    {name:"Steph Curry",id:"steph",img:images.steph},
    {name:"Karl Malone",id:"malone",img:images.malone},
  ]

  let currentIndex = playerList.length; let  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    // eslint-disable-next-line no-plusplus
    currentIndex--;

    // And swap it with the current element.
    [playerList[currentIndex], playerList[randomIndex]] = [
      playerList[randomIndex], playerList[currentIndex]];
  }

  return playerList;
}



export { shuffleId }