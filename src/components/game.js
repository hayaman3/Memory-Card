

// Fisher–Yates Shuffle
function shuffleId() {
  const playerList = [
    {name:"Michael Jordan",id:"jordan"},
    {name:"Lebron James",id:"lebron"},
    {name:"Kareem Abdul-Jabbar",id:"kareem"},
    {name:"Bill Russell",id:"russell"},
    {name:"Magic Johnson",id:"magic"},
    {name:"Wilt Chamberlain",id:"wilt"},
    {name:"Larry Bird",id:"bird"},
    {name:"Shaquille O'Neal",id:"shaq"},
    {name:"Tim Duncan",id:"duncan"},
    {name:"Kobe Bryant",id:"kobe"},
    {name:"Hakeem Olajuwon",id:"hakeem"},
    {name:"Oscar Robertson",id:"oscar"},
    {name:"Kevin Durant",id:"kd"},
    {name:"Jerry West",id:"west"},
    {name:"Steph Curry",id:"steph"},
    {name:"Karl Malone",id:"malone"},
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

// console.log(shuffleId())
export { shuffleId }