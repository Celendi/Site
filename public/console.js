let openConsole = function () {};
openConsole.toString = function () {
    this.opened = true;
};

console.log("%c", openConsole);

let id = setInterval(function () {
    if (openConsole.opened) {
        clearInterval(id);
        console.log('%cWarning!', "color:red;font-size:25px;")
        console.log('%cNever paste here something unless you exactly know what you\'re doing!', "color:yellow;font-size:20px;")
        console.log('%cIf someone told you to paste something here you are most likely being scammed.', "color:yellow;font-size:18px;")
    }
}, 500);
