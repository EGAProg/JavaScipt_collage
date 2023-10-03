const history = document.querySelector('.history');
const dropdownSender = document.querySelector('#acc');
const dropdown = document.querySelector('#resiever');

const contractAddress = "0x620ED615CFAC1888b41fe5Ffb03f4Ba16ef9fBcc";
const abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "KeyCode",
        type: "string",
      },
      {
        internalType: "address",
        name: "Resiever",
        type: "address",
      },
    ],
    name: "Deposit",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "KeyCode",
        type: "string",
      }
    ],
    name: "CancelTransaction",
    outputs: [],
    stateMutability: "payable",
    type: "f,unction",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "KeyCode",
        type: "string",
      },
    ],
    name: "getTransact",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  }
];


let myContract, accounts, currentAccount;
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
const contracAdmin = web3.eth.accounts.wallet.add('0x817df4e4f98bfd8dbbe0f5f321c77254b954f725aef0a7996ac8d14092793fb6');

async function getAccounts() {
  const dropdown = document.querySelector('#acc');
  accounts = await web3.eth.getAccounts();
  console.log(accounts);
  console.log(accounts.length);
  currentAccount = accounts[0];
  for (let i = 0; i < accounts.length; i++) {
    let balance = await web3.eth.getBalance(accounts[i]);
    const option = document.createElement('option');
    option.value = i;
    //option.innerText = `${accounts[i]} | ETH: ${(balance / 10**18)}`;
    option.innerText = `${accounts[i]}`;
    dropdown.appendChild(option);
  }
}
async function getAccountsResievers() {
  const resieverDropdown = document.querySelector('#resiever');
  accounts = await web3.eth.getAccounts();
  currentAccount = accounts[0];
  for (let i = 0; i < accounts.length; i++) {
    let balance = await web3.eth.getBalance(accounts[i]);
    const option = document.createElement('option');
    option.value = i;
    option.innerText = `${accounts[i]}`;
    resieverDropdown.appendChild(option);
  }
}
getAccounts();
getAccountsResievers();

myContract = new web3.eth.Contract(abi, contractAddress);
console.log(myContract);

async function sendMoney() {
  const history = document.querySelector('.history');
  const EthValue = document.querySelector("#sendMoney").value;
  const KeyCode = document.querySelector("#keySend").value;
  
  const Resiever = dropdown.options[dropdown.selectedIndex].text;
  const Sender = dropdownSender.options[dropdownSender.selectedIndex].text;
  console.log(Sender);
  console.log(Resiever);

  await myContract.methods.Deposit(KeyCode, Resiever).send({ from: Sender, value: (EthValue * 10**18), gas: 220000}); 
  console.log("Transaction: ", await myContract.methods.Deposit(KeyCode, Resiever).send({ from: Sender, value: (EthValue * 10**18), gas: 220000}));

  const hisSpan = document.createElement('span');
  hisSpan.className = 'hisSpan';
  hisSpan.innerText = `${Sender} -> ${Resiever} ETH: ${EthValue}.`;
  history.appendChild(hisSpan);
}

async function cancelTransaction(){
  const keyDec = document.querySelector('#KeyDecline');
  const Sender = dropdownSender.options[dropdownSender.selectedIndex].text;
  await myContract.methods.CancelTransaction(KeyCode).send({ from: Sender, gas: 220000}); 
  hisSpan.className = 'hisSpan';
  hisSpan.innerText = `${Sender} canseled tranzaction.`;
  history.appendChild(hisSpan);
}

async function getTransaction() {
  const KeyCode = document.querySelector("#KeyGet").value;
  const Sender = dropdown.options[dropdown.selectedIndex].text;
  await myContract.methods.getTransact(KeyCode).send({ from: Sender, gas: 220000}); 
  const hisSpan = document.createElement('span');
  hisSpan.className = 'hisSpan';
  hisSpan.innerText = `${Sender} resieved ETH.`;
  history.appendChild(hisSpan);
}