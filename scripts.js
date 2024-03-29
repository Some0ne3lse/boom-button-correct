let number = 0;

const numberTag = document.getElementById('number');

const list = document.getElementById('boom-list');

const isEmpty = (id) => {
  return document.getElementById(id).innerHTML.trim() == ''
}

const onIncrementClick = () => {
  number = number + 5;
  numberTag.textContent = number;
  if (number === 35 && isEmpty('boom-list')) {
    const boomItem = document.createElement('li');
    boomItem.textContent = '!bOoMm!';
    list.appendChild(boomItem);
  } else if (number < 35 && number > -35) {
    while (list.firstChild) {
      list.removeChild(list.firstChild);
    }
  }
}

const onDecrementClick = () => {
  number = number - 5;
  numberTag.textContent = number;
  if (number === -35 && isEmpty('boom-list')) {
    const boomItem = document.createElement('li');
    boomItem.textContent = '!bOoMm!';
    list.appendChild(boomItem);
  } else if (number < 35 && number > -35) {
    while (list.firstChild) {
      list.removeChild(list.firstChild);
    }
  }
}