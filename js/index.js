const Modal = {
  open() {
    document.querySelector(".modal-overlay").classList.add("active");
  },
  close() {
    document.querySelector(".modal-overlay").classList.remove("active");
  },
};

const transactions = [{ id: 1, description: "", amount: 0, date: "" }];

const Transactions = {
  incomes() {
    // add incomes
  },
  expenses() {
    // add expenses
  },
  total() {
    // add total
  },
};

const DOM = {
  addTransaction(transactions, index) {
    const tr = document.createElement("tr");
    tr.innerHTML = DOM.innerHTMLTransaction();
  },
  innerHTMLTransaction() {
    const html = `
        <td class="description"></td> 
        <td class="expense"></td> 
        <td class="date"></td> 
        <td>
        <img src="./assets/remove.svg" alt="Remove Transaction" />
        </td>
        `;

    return html;
  },
};
