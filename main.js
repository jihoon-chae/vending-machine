// 상품 정보 데이터 불러오기
//import itemList from "./items";


// 변수 설정
const vendingMachine = document.querySelector(".vending-machine");
const Items = vendingMachine.querySelectorAll(".list-items li");
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

// 1. 입금 기능
// [] 입금액 input 값을 받은 후 '입금' 버튼 누르면 잔액칸으로 값이 이동

// 잔액을 소지금에 포함하기
function getChange() {
  numMyMoney.textContent =
    parseInt(numBalance.textContent.slice(0, -2)) +
    parseInt(numMyMoney.textContent) +
    " 원";
  numBalance.textContent = " 원";
}

// 입금하기
function deposit() {
  if (
    parseInt(inputDeposit.value) > parseInt(numMyMoney.textContent.slice(0, -2))
  ) {
    alert("소지금이 부족합니다."); // 소지금 초과 입금시 소지금 부족 알림창 띄우기
  } else if (
    parseInt(inputDeposit.value) <=
    parseInt(numMyMoney.textContent.slice(0, -1))
  ) {
    // 소지금 이하 입금시 해당 금액을 잔액으로 이동
    numBalance.textContent = parseInt(inputDeposit.value) + " 원";

    // 입금액만큼 소지금에서 차감하기 (진행중)
    numMyMoney.textContent =
      parseInt(numMyMoney.textContent.slice(0, -2)) -
      parseInt(inputDeposit.value) +
      " 원";

    inputDeposit.value = " "; // 초기화는 나중에!
  }
}
btnPut.addEventListener("click", deposit);
