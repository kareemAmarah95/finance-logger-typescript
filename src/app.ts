import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";
import { ListTemplate } from "./classes/ListTemplates.js";

// let docOne: HasFormatter;
// let docTwo: HasFormatter;

// docOne = new Invoice("ahmed", "web work", 2500);
// docTwo = new Payment("mario", "plumbing work", 200);

// let docs: HasFormatter[] = [];

// docs.push(docOne);
// docs.push(docTwo);

// console.log(docs);

// interfaces
interface IsPerson {
  name: string;
  age: number;
  speak(a: string): void;
  spend(a: number): number;
}

const me: IsPerson = {
  name: "Kareem",
  age: 28,
  speak(text: string): void {
    console.log(text);
  },
  spend(amount: number): number {
    console.log("I spent ", amount);
    return amount;
  },
};

const greetPerson = (person: IsPerson) => {
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

const form = document.querySelector(".new-item-form") as HTMLFormElement;

const type = document.querySelector("#type") as HTMLSelectElement;

const toFrom = document.querySelector("#tofrom") as HTMLInputElement;

const details = document.querySelector("#details") as HTMLInputElement;

const amount = document.querySelector("#amount") as HTMLInputElement;

// list template instance
const ul = document.querySelector("ul")!;
const list = new ListTemplate(ul);
form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  let values: [string, string, number];
  values = [toFrom.value, details.value, amount.valueAsNumber];
  let doc: HasFormatter;
  if (type.value === "invoice") {
    // doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    doc = new Invoice(...values);
  } else {
    doc = new Payment(...values);
  }
  console.log(doc);
  list.render(doc, type.value, "end");
});

// GENERICS
const addUID = <T extends object>(obj: T) => {
  let uid = Date.now();
  return { ...obj, uid };
};

let docOne = addUID({ name: "yoshi", age: 40 });

console.log(docOne.name);
