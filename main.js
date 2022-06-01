// 변수 설정
const vendingMachine = document.querySelector(".vending-machine");
const Items = vendingMachine.querySelectorAll("li");
const contBuy = vendingMachine.querySelector(".container-buy");
const btnReturn = vendingMachine.querySelector(".button-return");
const numBalance = contBuy.querySelector(".number-balance");
const inputDeposit = contBuy.querySelector(".input-put");
const btnPut = contBuy.querySelector(".button-put");
const btnGet = contBuy.querySelector(".button-get");

const containerItems = document.querySelector(".container-items");
const listItemsScreen = containerItems.querySelector(".list-items-screen");
const myInfo = document.querySelector(".my-info");
const numMyMoney = myInfo.querySelector(".number-mymoney");
const buyItemsScreen = myInfo.querySelector(".list-item-screen");
