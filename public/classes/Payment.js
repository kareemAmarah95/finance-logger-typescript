export class Payment {
    //   readonly client: string;
    //   private details: string;
    //   public amount: number;
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    //   constructor(c: string, d: string, a: number) {
    //     this.client = c;
    //     this.details = d;
    //     this.amount = a;
    //   }
    format() {
        return `${this.recipient} is owed ${this.amount}$ for ${this.details}`;
    }
}
