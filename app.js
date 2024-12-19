
const data = [
    { "name": "Bitcoin", "ticker": "BTC", "value": "9685", "change": "2.83%" },
    { "name": "Ethereum", "ticker": "ETH", "value": "210.5", "change": "6.17%" },
    { "name": "Ripple", "ticker": "XRP", "value": "0.2812", "change": "2.47%" },
    { "name": "Bitcoin Cash", "ticker": "BCH", "value": "441.4", "change": "5.01%" },
    { "name": "Bitcoin SV", "ticker": "BSV", "value": "303.17", "change": "5.53%" },
    { "name": "Litecoin", "ticker": "LTC", "value": "74.935", "change": "4.25%" },
    { "name": "Tether", "ticker": "USDT", "value": "0.9994", "change": "-1.7%" },
    { "name": "EOS", "ticker": "EOS", "value": "4.6161", "change": "3.15%" },
    { "name": "Binance Coin", "ticker": "BNB", "value": "19.824", "change": "-3.82%" },
    { "name": "Cardano", "ticker": "ADA", "value": "0.060389", "change": "2.93%" },
    { "name": "Tezos", "ticker": "XTZ", "value": "2.1247", "change": "6.12%" },
    { "name": "Ethereum Classic", "ticker": "ETC", "value": "12.5988", "change": "4.09%" },
    { "name": "Stellar", "ticker": "XLM", "value": "0.07034", "change": "-4.10%" },
    { "name": "Monero", "ticker": "XMR", "value": "79.523", "change": "3.45%" },
    { "name": "TRON", "ticker": "TRX", "value": "0.020881", "change": "5.21%" }
];

function createTable(data){
    let tableElement=document.createElement("table");
    let theadElement=document.createElement("thead");
    let trElement=document.createElement("tr");

    let headerText=["Name","Ticker","Value","Change"];
    headerText.forEach(element => {
        let thElement=document.createElement("th");
        thElement.innerHTML=element;
        trElement.appendChild(thElement);
    });

    theadElement.appendChild(trElement);
    tableElement.appendChild(theadElement);               //thead 

    let tbodyElement=document.createElement("tbody");

    data.forEach((item,index) => {
        let trElement2=document.createElement("tr");

        if (index%2!==0) {
            trElement2.style.backgroundColor="#e0e0e0";
        }
        let tdElement1=document.createElement("td");
        tdElement1.innerText=item.name;

        trElement2.appendChild(tdElement1);

        let tdElement2=document.createElement("td");
        tdElement2.innerText=item.ticker;

        trElement2.appendChild(tdElement2);

        let tdElement3=document.createElement("td");
        tdElement3.innerText=item.value;

        trElement2.appendChild(tdElement3);

        let tdElement4=document.createElement("td");
        tdElement4.innerText=item.change;

        trElement2.appendChild(tdElement4);                 //tbody

        if (parseFloat(tdElement4.innerText)>0) {
            tdElement4.style.color="green";
        }
        else{
            tdElement4.style.color="red";
        }

        tbodyElement.appendChild(trElement2);
    })

    tableElement.appendChild(tbodyElement);

    document.body.appendChild(tableElement);

    tableElement.style.borderCollapse="collapse";

    let head=document.querySelectorAll("th");
    head.forEach(th => {
        th.style.border="1px solid #ccc";
        th.style.backgroundColor="purple";
        th.style.fontFamily="'Roboto', sans-serif";
        th.style.padding="10px";
        th.style.paddingLeft="5px";
        th.style.textAlign="left";
        th.style.color="#fff";
        th.style.fontWeight="400";
    })

    let cells=document.querySelectorAll("td");
    cells.forEach(cell => {
        cell.style.border="1px solid #ccc";
        cell.style.fontFamily="'Roboto', sans-serif";
        cell.style.padding="5px";
    })
    
}

createTable(data);
