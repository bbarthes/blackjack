function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function valueCard(numCard)
{
  var valCard = 10;
  //si c'est un joker
  if(numCard <53)
  {
      valCard = numCard%13
      if(valCard == 0 || valCard > 10)
        valCard = 10;  
  }
  
  return valCard
}

function newCardPlayer ()
{
  var numcard = getRandomInt(1,54);
  var idCard = numcard.toString();
  if(numcard < 10)
    {
      idCard = "0"+idCard;
    }
  
  var cardPlayer = document.getElementById("card-player");
  var card = document.createElement("img");
  card.src = "img/"+idCard+".BMP";
  cardPlayer.insertBefore(card, null);
  
  var levelPlayer = document.getElementById("level-player");
  levelPlayer.innerHTML = valueCard(numcard);
}

document.getElementById("newCard").addEventListener("click", newCardPlayer, false);
