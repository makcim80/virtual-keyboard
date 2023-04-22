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
    'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '▲', 'Shift',
    'Ctrl', 'Win', 'Alt', ' ', 'Alt', '◄', '▼', '►', 'Ctrl'
];
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
    textArea.rows = 5;
    textArea.cols = 50;
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
    description.textContent = "Keyboard created in Ubuntu operating system";
    containerDiv.append(description);
    const descriptionLanguage = document.createElement("p");
    descriptionLanguage.classList.add("description__language");
    descriptionLanguage.textContent = "To switch the language combination: left ctrl + alt";
    containerDiv.append(descriptionLanguage);
    body.append(containerDiv);
}
createAppOnPage();

const keyBlocks = body.querySelectorAll(".key");

keyBlocks.forEach((keyBlock, index) => {
    const spanEng = document.createElement("span");
    spanEng.textContent = `${arrKeyEngCaseDown[index]}`;
    keyBlock.append(spanEng);
})

let arr = [];
document.addEventListener("keydown", (e) => {
    arr.push(e.key)
    console.log(arr)
})