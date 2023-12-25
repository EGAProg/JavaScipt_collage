const abi = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_LicPlate",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_Casualty",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "_By",
				"type": "address"
			}
		],
		"name": "AddCasualty",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "calcCasualties",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "id",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "By",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "LicPlate",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "Casualty",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "Status",
						"type": "string"
					}
				],
				"internalType": "struct Session.Casualties[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "casualties",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "By",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "LicPlate",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "Casualty",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "Status",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

export default abi;