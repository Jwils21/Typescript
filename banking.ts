abstract class Account{
	static nextId: number =0;
	id: number;
	description: string;
	balance: number;

	constructor(description: string) {
		this.id = ++Account.nextId;
		this.description = description;
		this.balance = 0;
	}

	get getId(): number{
		return this.id;
	}

	deposit(amount: number): void{
		this.balance += amount;
	}
	withdrawal(amount: number): void{
		this.balance -= amount;
	}
	getBalance(): number{
		return this.balance;
	}
}

class Savings extends Account {
	intRate: number

	constructor(id: number, description: string, intRate: number = 0.01){
		super(id, description)
		this.intRate = intRate;
	}
	calcInterest(): void {
		let interest = this.balance * this.intRate
		this.deposit(interest);
	}
}

let sav1: Savings = new Savings(0, 'savings account', 0.02);
console.log(sav1.getBalance());
sav1.deposit(100);
console.log(sav1.getBalance());
sav1.withdrawal(50);
console.log(sav1.getBalance());
sav1.calcInterest();
console.log(sav1.getBalance());