const list = document.getElementsByClassName("point");
console.log(list);
listArray = Array.from(list);

for (let index = 0; index < listArray.length; index++) {
  listArray[index].style.color = "black";
  if ((index + 1) % 2) {
    listArray[index].style.background = "grey";
    console.log(listArray[index]);
  }
}
