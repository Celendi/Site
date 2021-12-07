let openConsole = function () { };
openConsole.toString = function () {
    this.opened = true;
};

console.log("%c", openConsole);

let id = setInterval(function () {
    if (openConsole.opened) {
        clearInterval(id);
        console.log('%cWarning!', "color:red;font-size:50px;")
        console.log('%cIf someone told you to paste something here you are most likely being scammed.', "color:white;font-size:20px;")
    }
}, 500);