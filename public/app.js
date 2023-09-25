import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
import { ListTemplate } from "./classes/ListTemplates.js";
const me = {
    name: "Kareem",
    age: 28,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log("I spent ", amount);
        return amount;
    },
};
const greetPerson = (person) => {
    console.log("hello ", person.name);
};
greetPerson(me);
// const invOne = new Invoice("mario", "work on mario website", 250);
// const invTwo = new Invoice("Kareem", "work on Kareem's website", 500);
// let invoices: Invoice[] = [];
// invoices.push(invOne);
// invoices.push(invTwo);
// invoices.forEach((inv) => {
//   console.log(inv.client, inv.amount, inv.format());
// });
const form = document.querySelector(".new-item-form");
const type = document.querySelector("#type");
const toFrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
// list template instance
const ul = document.querySelector("ul");
const list = new ListTemplate(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let values;
    values = [toFrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === "invoice") {
        // doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    console.log(doc);
    list.render(doc, type.value, "end");
});
// GENERICS
const addUID = (obj) => {
    let uid = Date.now();
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: "yoshi", age: 40 });
console.log(docOne.name);
