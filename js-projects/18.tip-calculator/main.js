const generateBillBtn = document.querySelector(".generate-bill");
const billAmount = document.querySelector(".bill-amount");
const discountPercentage = document.querySelector(".discount-percentage");
const tipPercentage = document.querySelector(".tip-percentage");
const noOfCustomers = document.querySelector(".no-of-customers");
const totalTip = document.querySelector(".total-tip");
const totalBillPaid = document.querySelector(".total-bill-to-pay");
const discountValue = document.querySelector(".discount-value");
const tipValue = document.querySelector(".tip-value");
const customerValue = document.querySelector(".customer-value");
const eachCustomerToPay = document.querySelector(".each-cus-to-pay");

// Generate Bill Functionality
generateBillBtn.addEventListener("click", () => {
  console.log(noOfCustomers.value);

  const billAmountAfterDiscount =
    billAmount.value - (billAmount.value * discountPercentage.value) / 100;

  const tipAmount = (billAmountAfterDiscount * tipPercentage.value) / 100;

  const totalBill = billAmountAfterDiscount + tipAmount;

  const eachCustomerBill = totalBill / noOfCustomers.value;

  totalTip.textContent = `$${tipAmount.toFixed(1)}`;
  totalBillPaid.textContent = `$${totalBill.toFixed(1)}`;
  eachCustomerToPay.textContent = `$${eachCustomerBill.toFixed(1)}`;
});

discountPercentage.addEventListener("input", () => {
  // Update the value of discount in percentage
  discountValue.textContent = `${discountPercentage.value}%`;
});

tipPercentage.addEventListener("input", () => {
  // update the value of tip percentage
  tipValue.textContent = `${tipPercentage.value}%`;
});

noOfCustomers.addEventListener("input", () => {
  // update the no of customer
  customerValue.textContent = `${noOfCustomers.value}`;
});
