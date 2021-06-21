

console.log("-index.js-");



//-----------------------------------------
// way-1 : plain JS
//-----------------------------------------

let inCloclEle = document.getElementById('in-clock-1')
let usCloclEle = document.getElementById('us-clock-1')
let uaeCloclEle = document.getElementById('uae-clock-1')


function ClockUI(timeZone) {
    return `
    <div class="card">
        <div class="card-header">${timeZone}</div>
        <div class="card-body">
            <span class="badge badge-dark">${new Date().toLocaleTimeString("en-US", { timeZone })}</span>
        </div>
    </div>
    `;
}

setInterval(() => {
    inCloclEle.innerHTML = ClockUI('Asia/Kolkata');
    usCloclEle.innerHTML = ClockUI('America/New_York');
    uaeCloclEle.innerHTML = ClockUI('Asia/Dubai');
}, 1000);



//-----------------------------------------
// way-2 : React JS
//-----------------------------------------


let inCloclEle2 = document.getElementById('in-clock-2')
let usCloclEle2 = document.getElementById('us-clock-2')
let uaeCloclEle2 = document.getElementById('uae-clock-2')


function ReactClockUI(timeZone) {

    // let div1Ele = React.createElement('div', { key: 1, className: 'card-header' }, timeZone)
    // let spanEle = React.createElement('span', { className: 'badge badge-dark' }, new Date().toLocaleTimeString("en-US", { timeZone }))
    // let div2Ele = React.createElement('div', { key: 2, className: 'card-body' }, spanEle)
    // let divEle = React.createElement('div', { className: 'card' }, [div1Ele, div2Ele])
    // return divEle;

    // JSX
    return (
        <div className="card">
            <div className="card-header">{timeZone}</div>
            <div className="card-body">
                <span className="badge badge-dark">{new Date().toLocaleTimeString("en-US", { timeZone })}</span>
            </div>
        </div>
    )
}

setInterval(() => {
    ReactDOM.render(ReactClockUI('Asia/Kolkata'), inCloclEle2)
    ReactDOM.render(ReactClockUI('America/New_York'), usCloclEle2)
    ReactDOM.render(ReactClockUI('Asia/Dubai'), uaeCloclEle2)
}, 1000);
