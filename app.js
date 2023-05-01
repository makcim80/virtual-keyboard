class TextAreaClass {
  constructor(element) {
    this.value = element.value;
    this.selectionStart = element.selectionStart;
  }

  add(key) {
    this.value = `${this.value.slice(0, this.selectionStart)}${key}${this.value.slice(this.selectionStart)}`;
    return this.value;
  }

  tab() {
    this.value = `${this.value.slice(0, this.selectionStart)}    ${this.value.slice(this.selectionStart)}`;
    return this.value;
  }

  enter() {
    this.value = `${this.value.slice(0, this.selectionStart)}\n${this.value.slice(this.selectionStart)}`;
    return this.value;
  }

  backspace() {
    this.value = `${this.value.slice(0, this.selectionStart - 1)}${this.value.slice(this.selectionStart)}`;
    return this.value;
  }

  delete() {
    this.value = `${this.value.slice(0, this.selectionStart)}${this.value.slice(this.selectionStart + 1)}`;
    return this.value;
  }
}

const arrKey = [
  [
    'Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace',
    'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete',
    'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter',
    'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight',
    'ControlLeft', 'Win', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight',
  ],
  [
    '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
    'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del',
    'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter',
    'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', ' ▲ ', 'Shift',
    'Ctrl', 'en', 'Alt', ' ', 'Alt', ' ◄ ', ' ▼ ', ' ► ', 'Ctrl',
  ],
  [
    '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace',
    'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'Del',
    'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter',
    'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', ' ▲ ', 'Shift',
    'Ctrl', 'En', 'Alt', ' ', 'Alt', ' ◄ ', ' ▼ ', ' ► ', 'Ctrl',
  ],
  [
    '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
    'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\', 'Del',
    'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", 'Enter',
    'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', ' ▲ ', 'Shift',
    'Ctrl', 'EN', 'Alt', ' ', 'Alt', ' ◄ ', ' ▼ ', ' ► ', 'Ctrl',
  ],
  [
    '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace',
    'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '{', '}', '|', 'Del',
    'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ':', '"', 'Enter',
    'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '<', '>', '?', ' ▲ ', 'Shift',
    'Ctrl', 'eN', 'Alt', ' ', 'Alt', ' ◄ ', ' ▼ ', ' ► ', 'Ctrl',
  ],
  [
    'ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
    'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del',
    'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter',
    'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', ' ▲ ', 'Shift',
    'Ctrl', 'ru', 'Alt', ' ', 'Alt', ' ◄ ', ' ▼ ', ' ► ', 'Ctrl',
  ],
  [
    'Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace',
    'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '/', 'Del',
    'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter',
    'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', ' ▲ ', 'Shift',
    'Ctrl', 'Ru', 'Alt', ' ', 'Alt', ' ◄ ', ' ▼ ', ' ► ', 'Ctrl',
  ],
  [
    'Ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
    'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '\\', 'Del',
    'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter',
    'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.', ' ▲ ', 'Shift',
    'Ctrl', 'RU', 'Alt', ' ', 'Alt', ' ◄ ', ' ▼ ', ' ► ', 'Ctrl',
  ],
  [
    'ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace',
    'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '/', 'Del',
    'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter',
    'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', ',', ' ▲ ', 'Shift',
    'Ctrl', 'rU', 'Alt', ' ', 'Alt', ' ◄ ', ' ▼ ', ' ► ', 'Ctrl',
  ],
];

const [
  arrKeyName,
  arrKeyEngCaseDown, arrKeyEngCaseUp, arrKeyEngCaps, arrKeyEngCapsShift,
  arrKeyRusCaseDown, arrKeyRusCaseUp, arrKeyRusCaps, arrKeyRusCapsShift,
] = arrKey;
let userLanguage = 'en';
let [isKeyCapsLockPressed, isKeyShiftPressed, isKeyTwoShiftPressed] = [false, false, false];
let cursorPosition = 0;
const body = document.querySelector('body');

function createAppOnPage() {
  const containerDiv = document.createElement('div');
  containerDiv.classList.add('container');
  const title = document.createElement('p');
  title.classList.add('title');
  title.textContent = 'RSS Virtual Keyboard';
  containerDiv.append(title);
  const textArea = document.createElement('textarea');
  textArea.classList.add('textarea');
  textArea.wrap = 'off';
  containerDiv.append(textArea);
  const keyboard = document.createElement('div');
  keyboard.classList.add('keyboard');
  arrKeyName.forEach((keyName) => {
    const keyBlock = document.createElement('div');
    keyBlock.classList.add('key');
    keyBlock.classList.add(`${keyName}`);
    keyboard.append(keyBlock);
  });
  containerDiv.append(keyboard);
  const description = document.createElement('p');
  description.classList.add('description');
  description.textContent = 'Keyboard is made for OS Ubuntu';
  containerDiv.append(description);
  const descriptionLanguage = document.createElement('p');
  descriptionLanguage.classList.add('description__language');
  descriptionLanguage.textContent = 'To switch the language combination: ctrl + alt (alt + ctrl)';
  containerDiv.append(descriptionLanguage);
  body.append(containerDiv);
}
createAppOnPage();

const textAreaNode = body.querySelector('.textarea');
const keyBlocks = body.querySelectorAll('.key');

textAreaNode.focus();

function showKeyEngCaseDown() {
  keyBlocks.forEach((keyBlock, index) => {
    if (keyBlock.firstElementChild) keyBlock.firstElementChild.remove();
    const spanShowingSymbol = document.createElement('span');
    spanShowingSymbol.textContent = `${arrKeyEngCaseDown[index]}`;
    keyBlock.append(spanShowingSymbol);
  });
}
function showKeyEngCaseUp() {
  keyBlocks.forEach((keyBlock, index) => {
    if (keyBlock.firstElementChild) keyBlock.firstElementChild.remove();
    const spanShowingSymbol = document.createElement('span');
    spanShowingSymbol.textContent = `${arrKeyEngCaseUp[index]}`;
    keyBlock.append(spanShowingSymbol);
  });
}
function showKeyEngCaps() {
  keyBlocks.forEach((keyBlock, index) => {
    if (keyBlock.firstElementChild) keyBlock.firstElementChild.remove();
    const spanShowingSymbol = document.createElement('span');
    spanShowingSymbol.textContent = `${arrKeyEngCaps[index]}`;
    keyBlock.append(spanShowingSymbol);
  });
}
function showKeyEngCapsShift() {
  keyBlocks.forEach((keyBlock, index) => {
    if (keyBlock.firstElementChild) keyBlock.firstElementChild.remove();
    const spanShowingSymbol = document.createElement('span');
    spanShowingSymbol.textContent = `${arrKeyEngCapsShift[index]}`;
    keyBlock.append(spanShowingSymbol);
  });
}
function showKeyRusCaseDown() {
  keyBlocks.forEach((keyBlock, index) => {
    if (keyBlock.firstElementChild) keyBlock.firstElementChild.remove();
    const spanShowingSymbol = document.createElement('span');
    spanShowingSymbol.textContent = `${arrKeyRusCaseDown[index]}`;
    keyBlock.append(spanShowingSymbol);
  });
}
function showKeyRusCaseUp() {
  keyBlocks.forEach((keyBlock, index) => {
    if (keyBlock.firstElementChild) keyBlock.firstElementChild.remove();
    const spanShowingSymbol = document.createElement('span');
    spanShowingSymbol.textContent = `${arrKeyRusCaseUp[index]}`;
    keyBlock.append(spanShowingSymbol);
  });
}
function showKeyRusCaps() {
  keyBlocks.forEach((keyBlock, index) => {
    if (keyBlock.firstElementChild) keyBlock.firstElementChild.remove();
    const spanShowingSymbol = document.createElement('span');
    spanShowingSymbol.textContent = `${arrKeyRusCaps[index]}`;
    keyBlock.append(spanShowingSymbol);
  });
}
function showKeyRusCapsShift() {
  keyBlocks.forEach((keyBlock, index) => {
    if (keyBlock.firstElementChild) keyBlock.firstElementChild.remove();
    const spanShowingSymbol = document.createElement('span');
    spanShowingSymbol.textContent = `${arrKeyRusCapsShift[index]}`;
    keyBlock.append(spanShowingSymbol);
  });
}

function showKeyboardKeys() {
  if (userLanguage === 'ru') {
    if (!isKeyCapsLockPressed && !isKeyShiftPressed) showKeyRusCaseDown();
    if (!isKeyCapsLockPressed && isKeyShiftPressed) showKeyRusCaseUp();
    if (isKeyCapsLockPressed && !isKeyShiftPressed) showKeyRusCaps();
    if (isKeyCapsLockPressed && isKeyShiftPressed) showKeyRusCapsShift();
  } else {
    if (!isKeyCapsLockPressed && !isKeyShiftPressed) showKeyEngCaseDown();
    if (!isKeyCapsLockPressed && isKeyShiftPressed) showKeyEngCaseUp();
    if (isKeyCapsLockPressed && !isKeyShiftPressed) showKeyEngCaps();
    if (isKeyCapsLockPressed && isKeyShiftPressed) showKeyEngCapsShift();
  }
}

function setLocalStorage() {
  localStorage.setItem('language', userLanguage);
}
window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage() {
  userLanguage = (localStorage.getItem('language')) ? localStorage.getItem('language') : 'en';
  showKeyboardKeys();
}
window.addEventListener('load', getLocalStorage);

function editInTextArea(keyPressed) {
  cursorPosition = textAreaNode.selectionStart;
  if (keyPressed.length < 2) {
    textAreaNode.value = new TextAreaClass(textAreaNode).add(keyPressed);
    cursorPosition += 1;
  }
  if (keyPressed === 'Tab') {
    textAreaNode.value = new TextAreaClass(textAreaNode).tab();
    cursorPosition += 4;
  }
  if (keyPressed === 'Enter') {
    textAreaNode.value = new TextAreaClass(textAreaNode).enter();
    cursorPosition += 1;
  }
  if (keyPressed === 'Backspace') {
    if (cursorPosition !== 0) {
      textAreaNode.value = new TextAreaClass(textAreaNode).backspace();
      cursorPosition -= 1;
    }
  }
  if (keyPressed === 'Del') {
    textAreaNode.value = new TextAreaClass(textAreaNode).delete();
  }
  if (keyPressed === ' ▲ ') {
    const arrTextBeforeCursor = textAreaNode.value.slice(0, cursorPosition).split('\n');
    const lengthLastRow = arrTextBeforeCursor[arrTextBeforeCursor.length - 1].length;
    if (arrTextBeforeCursor.length === 1) {
      cursorPosition = 0;
    } else if (lengthLastRow > arrTextBeforeCursor[arrTextBeforeCursor.length - 2].length) {
      cursorPosition -= lengthLastRow + 1;
    } else {
      cursorPosition -= arrTextBeforeCursor[arrTextBeforeCursor.length - 2].length + 1;
    }
  }
  if (keyPressed === ' ◄ ') {
    if (cursorPosition !== 0) {
      cursorPosition -= 1;
    }
  }
  if (keyPressed === ' ▼ ') {
    const arrTextBeforeCursor = textAreaNode.value.slice(0, cursorPosition).split('\n');
    const lengthLastRow = arrTextBeforeCursor[arrTextBeforeCursor.length - 1].length;
    const arrTextAfterCursor = textAreaNode.value.slice(cursorPosition).split('\n');
    const lengthFirstRow = arrTextAfterCursor[0].length;
    if (arrTextAfterCursor.length === 1) {
      cursorPosition = textAreaNode.value.length;
    } else if (lengthLastRow > arrTextAfterCursor[1].length) {
      cursorPosition += lengthFirstRow + arrTextAfterCursor[1].length + 1;
    } else {
      cursorPosition += lengthFirstRow + lengthLastRow + 1;
    }
  }
  if (keyPressed === ' ► ') {
    cursorPosition += 1;
  }
  textAreaNode.setSelectionRange(cursorPosition, cursorPosition);
}

keyBlocks.forEach((keyBlock) => {
  keyBlock.addEventListener('mousedown', (event) => {
    const keyDown = event.target.closest('.key');

    textAreaNode.focus();
    event.preventDefault();
    keyDown.classList.add('action');
    if (keyDown.classList.contains('CapsLock')) {
      if (isKeyCapsLockPressed) {
        isKeyCapsLockPressed = false;
        keyDown.classList.remove('action');
        showKeyboardKeys();
      } else {
        isKeyCapsLockPressed = true;
        showKeyboardKeys();
      }
    }
    if (keyDown.classList.contains('ShiftLeft') || keyDown.classList.contains('ShiftRight')) {
      if (isKeyShiftPressed) {
        isKeyTwoShiftPressed = true;
      }
      isKeyShiftPressed = true;
      showKeyboardKeys();
    }
    const keyPressed = keyDown.firstElementChild.textContent;
    editInTextArea(keyPressed);
  });
});

keyBlocks.forEach((keyBlock) => {
  keyBlock.addEventListener('mouseup', (event) => {
    const keyUp = event.target.closest('.key');

    textAreaNode.focus();
    if (keyUp.classList.contains('CapsLock')) return;
    keyUp.classList.remove('action');
    if (keyUp.classList.contains('ShiftLeft') || keyUp.classList.contains('ShiftRight')) {
      if (isKeyTwoShiftPressed) {
        isKeyTwoShiftPressed = false;
      } else {
        isKeyShiftPressed = false;
        showKeyboardKeys();
      }
    }
  });
});

document.addEventListener('keydown', (event) => {
  const indexKey = arrKeyName.indexOf(event.code);

  textAreaNode.focus();
  event.preventDefault();
  if (indexKey === -1) return;
  body.querySelector(`.${event.code}`).classList.add('action');
  if (event.code === 'CapsLock') {
    if (isKeyCapsLockPressed) {
      isKeyCapsLockPressed = false;
      body.querySelector(`.${event.code}`).classList.remove('action');
      showKeyboardKeys();
    } else {
      isKeyCapsLockPressed = true;
      showKeyboardKeys();
    }
  }
  if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
    if (isKeyShiftPressed) {
      isKeyTwoShiftPressed = true;
    }
    isKeyShiftPressed = true;
    showKeyboardKeys();
  }
  if (event.ctrlKey && event.altKey) {
    userLanguage = (userLanguage === 'ru') ? 'en' : 'ru';
    showKeyboardKeys();
  }
  const keyPressed = keyBlocks[indexKey].firstElementChild.textContent;
  editInTextArea(keyPressed);
});

document.addEventListener('keyup', (event) => {
  if (arrKeyName.indexOf(event.code) === -1) return;
  if (event.code === 'CapsLock') return;
  body.querySelector(`.${event.code}`).classList.remove('action');
  if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
    if (isKeyTwoShiftPressed) {
      isKeyTwoShiftPressed = false;
    } else {
      isKeyShiftPressed = false;
      showKeyboardKeys();
    }
  }
});
