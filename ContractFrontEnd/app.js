import abi from './abi.js';
const history = document.querySelector('.history');
const dropdownSender = document.querySelector('#acc');
const dropdown = document.querySelector('#resiever');
const balanceSpan = document.querySelector('#spanBalance');
const btnSend = document.querySelector('#btnSend');
const btnReceive = document.createElement('button');
const btnCansel = document.createElement('button');
const KeyCode = document.createElement("input");
const inputResieve = document.createElement('input');
const inputCansel = document.createElement('input');

const contractAddress = "0xf7fe5Ac782d6298b9863629fb44e74C4397EaAA7";

let myContract, accounts, currentAccount, balance;

const web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8545"));
const contracAdmin = web3.eth.accounts.wallet.add('0x817df4e4f98bfd8dbbe0f5f321c77254b954f725aef0a7996ac8d14092793fb6');
myContract = new web3.eth.Contract(abi, contractAddress);
console.log(myContract);

let arrayTransactions = await myContract.methods.calcTransaction().call();
console.log(arrayTransactions);

async function getAccounts() {
  accounts = await web3.eth.getAccounts();
  console.log(accounts);
  console.log(accounts.length);
  currentAccount = accounts[0];
  for (let i = 0; i < accounts.length; i++) {
    balance = await web3.eth.getBalance(accounts[i]);
    const option = document.createElement('option');
    option.value = i;
    option.innerText = `${accounts[i]}`;
    dropdownSender.appendChild(option);
  }
}
async function getAccountsResievers() {
  accounts = await web3.eth.getAccounts();
  currentAccount = accounts[0];
  for (let i = 0; i < accounts.length; i++) {
    
    const option = document.createElement('option');
    option.value = i;
    option.innerText = `${accounts[i]}`;
    dropdown.appendChild(option);
  }
}
getAccounts();
getAccountsResievers();



btnSend.addEventListener('click', sendMoney);
btnCansel.addEventListener('click', cancelTransaction);
btnReceive.addEventListener('click', getTransaction);

async function sendMoney() {
  const EthValue = document.querySelector("#sendMoney").value;
  const KeyCode = document.querySelector("#keySend").value;
  const Resiever = dropdown.options[dropdown.selectedIndex].text;
  const Sender = dropdownSender.options[dropdownSender.selectedIndex].text;
  let arrayTransactions = await myContract.methods.calcTransaction().call();
  let i = 0;
  
  for (i = 0; i < arrayTransactions.length; i++) {}
    //arrayTransactions.push([{id: i, keyWord: KeyCode, sender: Sender, resiever: Resiever, value: EthValue * 10**18, confermed: false}]);
    console.log(arrayTransactions[i]);
    console.log(Resiever, Sender);
    await myContract.methods.Deposit(i, KeyCode, Resiever).send({ from: Sender, value: (EthValue * 10**18), gas: 220000});
    const hisSpan = document.createElement('span');
    const br = document.createElement('br');
    hisSpan.className = 'hisSpan';
    hisSpan.innerText = `${Sender} -> ${Resiever} ETH: ${EthValue}.`;
    history.appendChild(hisSpan);
    history.appendChild(br);
}

async function cancelTransaction(){
  const br = document.createElement('br');
  const KeyDec = document.querySelector('#KeyDecline').value;
  const Sender = dropdownSender.options[dropdownSender.selectedIndex].text;
  let arrayTransactions = await myContract.methods.calcTransaction().call()
  for (let i = 0; i < arrayTransactions.lenght; i++) {
    if (arrayTransactions[i].sender === Sender) {
      await myContract.methods.CancelTransaction(i, KeyDec).send({ from: Sender, gas: 220000}); 
      hisSpan.className = 'hisSpan';
      hisSpan.innerText = `${Sender} canseled tranzaction.`;
      history.appendChild(hisSpan);
      history.appendChild(br);
    }
  }
}
async function createCanselSpacer() {
  let arrayTransactions = await myContract.methods.calcTransaction().call()
  const innerTrade = document.querySelector('.innerTrade');
  innerTrade.innerHTML = ``;
  const Sender = dropdownSender.options[dropdownSender.selectedIndex].text;
  console.log(Sender);
  for (let i = 0; i < arrayTransactions.length; i++) {
    if (arrayTransactions[i].sender == Sender) {
      console.log("Resiever: ", arrayTransactions[i].resiever);
      console.log("Resiever: ",Sender);
      const innerCansel = document.querySelector('.innerTrade');

      /*
      <input type="password" class="setNum" id="KeyDecline">
      <button id="btnCansel" class="btn btn-primary addBtn" onClick="canselTransaction">Отменить отправку</button>
      */ 
      console.log(true);
      btnCansel.id = "#btnCansel";
      btnCansel.className = 'btn btn-primary addBtn';
      btnCansel.innerText = 'Отменить транзакцию';
      inputCansel.className = 'setNum';
      inputCansel.type = 'password';
      inputCansel.id = i;
      innerCansel.appendChild(inputCansel);
      innerCansel.appendChild(inputCansel);
    }
  }
}

async function getTransaction() {
  let arrayTransactions = await myContract.methods.calcTransaction().call()
  const br = document.createElement('br');
  const KeyWord = document.querySelector(".setNum");
  let KeyCode = inputResieve.value;
  console.log(KeyCode);
  const Sender = dropdown.options[dropdown.selectedIndex].text;
  let i = 0;
  for (i = 0; i < arrayTransactions.length; i++) {
    if (arrayTransactions[i].resiever == Sender && arrayTransactions[i].confermed == false
      && arrayTransactions[i].keyWord == KeyCode) {
      break;
    }
  }
  await myContract.methods.getTransact(i, KeyCode).send({ from: Sender, gas: 220000});
      const hisSpan = document.createElement('span');
      hisSpan.className = 'hisSpan';
      hisSpan.innerText = `${Sender} resieved ETH.`;
      history.appendChild(hisSpan);
      history.appendChild(br);
}

async function createTransactionSpacer() {
  let arrayTransactions = await myContract.methods.calcTransaction().call()
  const innerTrade = document.querySelector('.innerTrade');
  innerTrade.innerHTML = ``;
  const Sender = dropdownSender.options[dropdownSender.selectedIndex].text;
  console.log(Sender);
  for (let i = 0; i < arrayTransactions.length; i++) {
    if (arrayTransactions[i].resiever == Sender) {
      console.log("Resiever: ", arrayTransactions[i].resiever);
      console.log("Resiever: ",Sender);
      const innerTrade = document.querySelector('.innerTrade');
      //innerTrade.innerHTML = ``;
      console.log(true);
      btnReceive.className = 'btn btn-primary addBtn';
      btnReceive.innerText = 'Получить транзакцию';
      inputResieve.className = 'setNum';
      inputResieve.type = 'password';
      inputResieve.id = i;
      innerTrade.appendChild(inputResieve);
      innerTrade.appendChild(btnReceive);
    }
  }
}


window.onload = () => {createTransactionSpacer();}
//createTransactionSpacer()
dropdownSender.addEventListener('change', async function updateBalance() {
  accounts = await web3.eth.getAccounts();
  balance = await web3.eth.getBalance(accounts[dropdownSender.options[dropdownSender.selectedIndex].value]);
  balanceSpan.innerHTML = `ETH: ${balance / (10**18)}`;
  createTransactionSpacer();
});