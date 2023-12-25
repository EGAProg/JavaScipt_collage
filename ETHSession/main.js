import abi from "./abi.js";
import "./web3.min.js";
////////////// WEB3 REQUIREMENTS //////////////
const contractAddr = "0x264b6e93587DFaDa9bdB0df9edeeeD137B988fB6";
const web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:7545"));
const myContract = new web3.eth.Contract(abi, contractAddr);

////////////// HTML TAGS //////////////
const history = document.querySelector(".history");
////////////// CODE //////////////

console.log(await myContract.methods.calcCasualties().call());


async function getRTAHistory() {

    let calcCasualties = await myContract.methods.calcCasualties().call();

    for (let i = 0; i < calcCasualties.length; i++){
        const hisSpan = document.createElement('span');
        const br = document.createElement('br');
        hisSpan.className = 'hisSpan';
        hisSpan.innerText = `Driver ${calcCasualties[i].By} add new RTA. ${calcCasualties[i].LicPlate}, ${calcCasualties[i].Casualty}. Status: ${calcCasualties[i].Status}`;
        history.appendChild(hisSpan);
        history.appendChild(br);
    }
}
getRTAHistory();
