let titleHead = document.getElementById("titleHead");
console.log(titleHead)

titleHead.insertAdjacentHTML('afterbegin', '<div style="color:white">-afterbegin</div>')
titleHead.insertAdjacentHTML('afterend', '<div style="color:white">-afterend</div>')
titleHead.insertAdjacentHTML('beforebegin', '<div style="color:white">-beforebegin</div>');
titleHead.insertAdjacentHTML('beforeend', '<div style="color:white">-beforeend</div>')

titleHead.remove();