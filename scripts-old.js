let number = 1;

const numberTag = document.getElementById('number');

const list = document.getElementById('boom-list');

let clickNumber = 0;

const isEmpty = (id) => {
  return document.getElementById(id).innerHTML.trim() == ''
}


const onIncrementClick = () => {
  number = number * 5;
  numberTag.textContent = number;
  ++clickNumber;
  if ((clickNumber === 35 || clickNumber === -35) && isEmpty('boom-list') === true) {
    const boomItem = document.createElement('li');
    boomItem.textContent = '!bOoMm!';
    list.appendChild(boomItem);
  } else if (clickNumber < 35 && clickNumber > -35) {
    while (list.firstChild) {
      list.removeChild(list.firstChild);
    }
  }
}


const onDecrementClick = () => {
  number = number / 5;
  numberTag.textContent = number;
  --clickNumber;
  if ((clickNumber === 35 || clickNumber === -35) && isEmpty('boom-list') === true) {
    const boomItem = document.createElement('li');
    boomItem.textContent = '!bOoMm!';
    list.appendChild(boomItem);
  } else if (clickNumber < 35 && clickNumber > -35) {
    while (list.firstChild) {
      list.removeChild(list.firstChild)
    }
  }
}