import abi from "./abi.js";
import "./web3.min.js";
////////////// WEB3 REQUIREMENTS //////////////
const contractAddr = "0x264b6e93587DFaDa9bdB0df9edeeeD137B988fB6";
const web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:7545"));
const myContract = new web3.eth.Contract(abi, contractAddr);

////////////// HTML TAGS //////////////
const dropdown = document.querySelector("#dropdown");
const LicPlateInput = document.querySelector("#licPlate");
const rtaDesc = document.querySelector("#rtaDescript");
const addRTA = document.querySelector("#addRTABtn");

const history = document.querySelector(".history");
////////////// CODE //////////////

async function getAccounts() { // Get all accounts from the contract
    let accounts = await web3.eth.getAccounts();
    
    for (let i = 0; i < accounts.length; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.innerText = `${accounts[i]}`;
        dropdown.appendChild(option);
    }
}
getAccounts();

async function getRTAHistory() {
    history.innerHTML = ``;

    let calcCasualties = await myContract.methods.calcCasualties().call();

    for (let i = 0; i < calcCasualties.length; i++){
        const hisSpan = document.createElement('span');
        if (calcCasualties[i].By == dropdown.options[dropdown.selectedIndex].text) {
            console.log(calcCasualties[i].By, calcCasualties[i].LicPlate, calcCasualties[i].Casualty, calcCasualties[i].Status);
            const br = document.createElement('br');
            hisSpan.className = 'hisSpan';
            hisSpan.innerText = `Driver ${calcCasualties[i].By} add new RTA. ${calcCasualties[i].LicPlate}, ${calcCasualties[i].Casualty}. Status: ${calcCasualties[i].Status}`;
            history.appendChild(hisSpan);
            history.appendChild(br);
        }
    }
}
getRTAHistory();

async function AddCasualty() { // Add new RTA
    const Sender = dropdown.options[dropdown.selectedIndex].text;
    let arrayCasualties = await myContract.methods.calcCasualties().call();
    
    // casualties.push(Casualties(casualties.length + 1, _By, _LicPlate, _Casualty, "New"));
    console.log(arrayCasualties[arrayCasualties.length + 1]);
    console.log(Sender);
    console.log(LicPlateInput.value, rtaDesc.value)
    if (LicPlateInput.value !== "" && rtaDesc.value !== "") {
        await myContract.methods.AddCasualty( LicPlateInput.value, rtaDesc.value, Sender).send({ from: Sender, gas: 220000});
    }
    else {
        alert("Something goes wrong! Check the fields.");
    }
    getRTAHistory();
}

dropdown.addEventListener("change", getRTAHistory)

addRTA.addEventListener("click", AddCasualty);