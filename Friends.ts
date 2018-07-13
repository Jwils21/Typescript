class Friends{
	static nextId: number = 0;
	Id: number;
	Name: string;
	YrsKnown: number;
	CityState: string;

	constructor(Name: string, YrsKnown: number, CityState: string;) {
		this.Id = Friends.nextId++;
		this.Name = Name;
		this.YrsKnown = YrsKnown;
		this.CityState = CityState;
	}

	print(): void{
		console.log(`${this.Id}, ${this.Name}, ${this.YrsKnown}, ${this.CityState}`);
	}
}

let f1: Friends = new Friends("Connor",13,"Logandale NV");
let f2: Friends = new Friends("Cole",15,"Overton NV");
let f3: Friends = new Friends("Dave",26,"Las Vegas NV");
let f4: Friends = new Friends("James",15,"Yuma AZ");
let f5: Friends = new Friends("Tyler",0,"Cincinnati OH");
let f6: Friends = new Friends("Brailee",0,"Cincinnati OH");

let FrArr: Friends[] = [];
FrArr.push(f1);
FrArr.push(f2);
FrArr.push(f3);
FrArr.push(f4);
FrArr.push(f5);
FrArr.push(f6);

for(let friend of FrArr) {
	friend.print();
}