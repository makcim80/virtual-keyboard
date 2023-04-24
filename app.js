class TextAreaClass {
    constructor(element = textAreaNode) {
        this.value = element.value;
        this.selectionStart = element.selectionStart;
    }
    add(key) {
        this.value = this.value.slice(0, this.selectionStart) + `${key}` + this.value.slice(this.selectionStart);
        return this.value;
    }
    tab() {
        this.value = this.value.slice(0, this.selectionStart) + "    " + this.value.slice(this.selectionStart);
        return this.value;
    }
    enter() {
        this.value = this.value.slice(0, this.selectionStart) + "\n" + this.value.slice(this.selectionStart);
        return this.value;
    }
    backspace() {
        this.value = this.value.slice(0, this.selectionStart - 1) + this.value.slice(this.selectionStart);
        return this.value;
    }
    delete() {
        this.value = this.value.slice(0, this.selectionStart) + this.value.slice(this.selectionStart + 1);
        return this.value;
    }
}

const arrKeyName = [
    'Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace',
    'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete',
    'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter',
    'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight',
    'ControlLeft', 'Win', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'
];
const arrKeyEngCaseDown = [
    '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
    'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del',
    'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter',
    'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', ' ▲ ', 'Shift',
    'Ctrl', 'Win', 'Alt', ' ', 'Alt', ' ◄ ', ' ▼ ', ' ► ', 'Ctrl'
];
const arrKeyEngCaseUp = [
    '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace',
    'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'Del',
    'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter',
    'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', ' ▲ ', 'Shift',
    'Ctrl', 'Win', 'Alt', ' ', 'Alt', ' ◄ ', ' ▼ ', ' ► ', 'Ctrl'
];
const arrKeyEngCaps = [
    '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
    'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\', 'Del',
    'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", 'Enter',
    'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', ' ▲ ', 'Shift',
    'Ctrl', 'Win', 'Alt', ' ', 'Alt', ' ◄ ', ' ▼ ', ' ► ', 'Ctrl'
];
const arrKeyEngCapsShift = [
    '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace',
    'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '{', '}', '|', 'Del',
    'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ':', '"', 'Enter',
    'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '<', '>', '?', ' ▲ ', 'Shift',
    'Ctrl', 'Win', 'Alt', ' ', 'Alt', ' ◄ ', ' ▼ ', ' ► ', 'Ctrl'
];
const arrKeyRusCaseDown = [
    'ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
    'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del',
    'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter',
    'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', ' ▲ ', 'Shift',
    'Ctrl', 'Win', 'Alt', ' ', 'Alt', ' ◄ ', ' ▼ ', ' ► ', 'Ctrl'
];
const arrKeyRusCaseUp = [
    'Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace',
    'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '/', 'Del',
    'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter',
    'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', ' ▲ ', 'Shift',
    'Ctrl', 'Win', 'Alt', ' ', 'Alt', ' ◄ ', ' ▼ ', ' ► ', 'Ctrl'
];
const arrKeyRusCaps = [
    'Ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
    'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '\\', 'Del',
    'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter',
    'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.', ' ▲ ', 'Shift',
    'Ctrl', 'Win', 'Alt', ' ', 'Alt', ' ◄ ', ' ▼ ', ' ► ', 'Ctrl'
];
const arrKeyRusCapsShift = [
    'ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace',
    'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '/', 'Del',
    'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter',
    'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', ',', ' ▲ ', 'Shift',
    'Ctrl', 'Win', 'Alt', ' ', 'Alt', ' ◄ ', ' ▼ ', ' ► ', 'Ctrl'
];

let userLanguage = "en";
let isKeyCapsLockPressed = false;
let isKeyShiftPressed = false;
let isKeyTwoShiftPressed = false;
let isKeyCtrlPressed = false;   ///
let isKeyAltPressed = false;   ///
let cursorPosition = 0;

function setLocalStorage() {
    localStorage.setItem('language', userLanguage);
}
window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage() {
    userLanguage = (localStorage.getItem('language')) ? localStorage.getItem('language') : "en";
    showKeyboardKeys();
}
window.addEventListener('load', getLocalStorage);

const body = document.querySelector("body");

function createAppOnPage() {
    const containerDiv = document.createElement("div");
    containerDiv.classList.add("container");
    const title = document.createElement("p");
    title.classList.add("title");
    title.textContent = "RSS Virtual Keyboard";
    containerDiv.append(title);
    const textArea = document.createElement("textarea");
    textArea.classList.add("textarea");
    containerDiv.append(textArea);
    const keyboard = document.createElement("div");
    keyboard.classList.add("keyboard");
    arrKeyName.forEach(keyName => {
        const keyBlock = document.createElement("div");
        keyBlock.classList.add("key");
        keyBlock.classList.add(`${keyName}`);
        keyboard.append(keyBlock);
    });
    containerDiv.append(keyboard);
    const description = document.createElement("p");
    description.classList.add("description");
    description.textContent = "Keyboard is made for OS Ubuntu";
    containerDiv.append(description);
    const descriptionLanguage = document.createElement("p");
    descriptionLanguage.classList.add("description__language");
    descriptionLanguage.textContent = "To switch the language combination: ctrl + alt (alt + ctrl)";
    containerDiv.append(descriptionLanguage);
    body.append(containerDiv);
}
createAppOnPage();

let textAreaNode = body.querySelector(".textarea");
const keyBlocks = body.querySelectorAll(".key");

// console.log(textAreaNode); ///

textAreaNode.value = 'qwerty';  // simple
textAreaNode.setSelectionRange(3, 3);        ///
textAreaNode.focus();       ///

// textAreaNode = new TextAreaClass(); ///
// console.log(textAreaNode);  ///

function showKeyEngCaseDown() {
    keyBlocks.forEach((keyBlock, index) => {
        keyBlock.textContent = "";
        const spanShowingSymbol = document.createElement("span");
        spanShowingSymbol.textContent = `${arrKeyEngCaseDown[index]}`;
        keyBlock.append(spanShowingSymbol);
    })
};
function showKeyEngCaseUp() {
    keyBlocks.forEach((keyBlock, index) => {
        keyBlock.textContent = "";
        const spanShowingSymbol = document.createElement("span");
        spanShowingSymbol.textContent = `${arrKeyEngCaseUp[index]}`;
        keyBlock.append(spanShowingSymbol);
    })
};
function showKeyEngCaps() {
    keyBlocks.forEach((keyBlock, index) => {
        keyBlock.textContent = "";
        const spanShowingSymbol = document.createElement("span");
        spanShowingSymbol.textContent = `${arrKeyEngCaps[index]}`;
        keyBlock.append(spanShowingSymbol);
    })
};
function showKeyEngCapsShift() {
    keyBlocks.forEach((keyBlock, index) => {
        keyBlock.textContent = "";
        const spanShowingSymbol = document.createElement("span");
        spanShowingSymbol.textContent = `${arrKeyEngCapsShift[index]}`;
        keyBlock.append(spanShowingSymbol);
    })
};
function showKeyRusCaseDown() {
    keyBlocks.forEach((keyBlock, index) => {
        keyBlock.textContent = "";
        const spanShowingSymbol = document.createElement("span");
        spanShowingSymbol.textContent = `${arrKeyRusCaseDown[index]}`;
        keyBlock.append(spanShowingSymbol);
    })
};
function showKeyRusCaseUp() {
    keyBlocks.forEach((keyBlock, index) => {
        keyBlock.textContent = "";
        const spanShowingSymbol = document.createElement("span");
        spanShowingSymbol.textContent = `${arrKeyRusCaseUp[index]}`;
        keyBlock.append(spanShowingSymbol);
    })
};
function showKeyRusCaps() {
    keyBlocks.forEach((keyBlock, index) => {
        keyBlock.textContent = "";
        const spanShowingSymbol = document.createElement("span");
        spanShowingSymbol.textContent = `${arrKeyRusCaps[index]}`;
        keyBlock.append(spanShowingSymbol);
    })
};
function showKeyRusCapsShift() {
    keyBlocks.forEach((keyBlock, index) => {
        keyBlock.textContent = "";
        const spanShowingSymbol = document.createElement("span");
        spanShowingSymbol.textContent = `${arrKeyRusCapsShift[index]}`;
        keyBlock.append(spanShowingSymbol);
    })
};

function showKeyboardKeys() {
    if (userLanguage === "ru") {
        if (!isKeyCapsLockPressed  && !isKeyShiftPressed) showKeyRusCaseDown();
        if (!isKeyCapsLockPressed  && isKeyShiftPressed) showKeyRusCaseUp();
        if (isKeyCapsLockPressed  && !isKeyShiftPressed) showKeyRusCaps();
        if (isKeyCapsLockPressed  && isKeyShiftPressed) showKeyRusCapsShift();
    } else {
        if (!isKeyCapsLockPressed  && !isKeyShiftPressed) showKeyEngCaseDown();
        if (!isKeyCapsLockPressed  && isKeyShiftPressed) showKeyEngCaseUp();
        if (isKeyCapsLockPressed  && !isKeyShiftPressed) showKeyEngCaps();
        if (isKeyCapsLockPressed  && isKeyShiftPressed) showKeyEngCapsShift();
    }
}

function editInTextArea(keyPressed, cursorPosition) {
    if (keyPressed.length < 2) {
        textAreaNode.value = new TextAreaClass().add(keyPressed);
        cursorPosition++;
    }
    if (keyPressed === "Tab") {
        textAreaNode.value = new TextAreaClass().tab();
        cursorPosition += 4;
    }
    if (keyPressed === "Enter") {
        textAreaNode.value = new TextAreaClass().enter();
        cursorPosition++;
    }
    if (keyPressed === "Backspace") {
        if (cursorPosition !== 0) {
            textAreaNode.value = new TextAreaClass().backspace();
            cursorPosition--;
        }
    }
    if (keyPressed === "Del") {
        textAreaNode.value = new TextAreaClass().delete();
    }
    if (keyPressed === " ▲ ") {
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
    if (keyPressed === " ◄ ") {
        if (cursorPosition !== 0) {
            cursorPosition--;
        }
    }
    if (keyPressed === " ▼ ") {
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
    if (keyPressed === " ► ") {
        cursorPosition++;
    }
    textAreaNode.setSelectionRange(cursorPosition, cursorPosition);
}

keyBlocks.forEach((keyBlock, index) => {
    keyBlock.addEventListener("mousedown", (event) => {
        const keyDown = event.target.closest(".key");
        cursorPosition = textAreaNode.selectionStart;

        textAreaNode.focus();
        event.preventDefault();
        keyDown.classList.add("action");
        if (keyDown.classList.contains("CapsLock")) {
            if(isKeyCapsLockPressed) {
                isKeyCapsLockPressed = false;
                keyDown.classList.remove("action");
                showKeyboardKeys();
            } else {
                isKeyCapsLockPressed = true;
                showKeyboardKeys();
            }
        }
        if (keyDown.classList.contains("ShiftLeft") || keyDown.classList.contains("ShiftRight")) {
            if (isKeyShiftPressed) {
                isKeyTwoShiftPressed = true;
            }
            isKeyShiftPressed = true;
            showKeyboardKeys();
        }
        const keyPressed = keyDown.firstElementChild.textContent;
        editInTextArea(keyPressed, cursorPosition);
    })
})

keyBlocks.forEach((keyBlock, index) => {
    keyBlock.addEventListener("mouseup", (event) => {
        const keyUp = event.target.closest(".key");

        textAreaNode.focus();
        if (keyUp.classList.contains("CapsLock")) return;
        keyUp.classList.remove("action");
        if (keyUp.classList.contains("ShiftLeft") || keyUp.classList.contains("ShiftRight")) {
            if (isKeyTwoShiftPressed) {
                isKeyTwoShiftPressed = false;
            } else {
                isKeyShiftPressed = false;
                showKeyboardKeys();
            }
        }
    })
})

document.addEventListener("keydown", (event) => {
    const indexKey = arrKeyName.indexOf(event.code);
    cursorPosition = textAreaNode.selectionStart;

    textAreaNode.focus();
    event.preventDefault();
    // if (event.repeat) return;
    if (indexKey === -1) return;
    body.querySelector(`.${event.code}`).classList.add("action");
    if (event.code === "CapsLock") {
        if(isKeyCapsLockPressed) {
            isKeyCapsLockPressed = false;
            body.querySelector(`.${event.code}`).classList.remove("action");
            showKeyboardKeys();
        } else {
            isKeyCapsLockPressed = true;
            showKeyboardKeys();
        }
    }
    if (event.code === "ShiftLeft" || event.code === "ShiftRight") {
        if (isKeyShiftPressed) {
            isKeyTwoShiftPressed = true;
        }
        isKeyShiftPressed = true;
        showKeyboardKeys();
    }
    if (event.ctrlKey && event.altKey) {
        userLanguage = (userLanguage === "ru") ? "en" : "ru";
        showKeyboardKeys();
    }
    const keyPressed = keyBlocks[indexKey].firstElementChild.textContent;
    editInTextArea(keyPressed, cursorPosition);
})

document.addEventListener("keyup", (event) => {
    if (arrKeyName.indexOf(event.code) === -1) return;
    if (event.code === "CapsLock") return;
    body.querySelector(`.${event.code}`).classList.remove("action");
    if (event.code === "ShiftLeft" || event.code === "ShiftRight") {
        if (isKeyTwoShiftPressed) {
            isKeyTwoShiftPressed = false;
        } else {
            isKeyShiftPressed = false;
            showKeyboardKeys();
        }
    }
})

// let arr = [];
document.addEventListener("keydown", (e) => {
    // arr.push(e.key)
    // console.log(textAreaNode.selectionStart)
    // console.log(e.getModifierState("CapsLock"))
})
document.addEventListener("keyup", (e) => {
    // arr.push(e.key)
    // console.log(e)
    // console.log(textAreaNode.selectionStart)
    // console.log(e.getModifierState("CapsLock"))
})
// console.log(KeyboardEvent.getModifierState("CapsLock"))