



function f1() {
    console.log('f1()');
}

function f2() {
    console.log('f2()');
}

function logWrapper(f) {
    return function () {
        console.log("before :: LOG");
        f();
        console.log("after :: LOG");
    }
}
let f1WithLog = logWrapper(f1);
f1WithLog();
let f2WithLog = logWrapper(f2);
f2WithLog();

