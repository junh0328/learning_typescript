class Employee {

  constructor(
    private _fullName: string, 
    private _perAge: number, 
    private _jobTitle:string, 
    private _hourlyRate: number, 
    public workingHoursPerWeek: number){

    }

  get fullName (){
    return this._fullName;
  }

  set fullName (value : string) {
    this._fullName = value;
  }

  printEmployeeDetails = ():void =>{
    console.log(`${this._fullName}의 직업은 ${this._jobTitle}이고 일주일의 수입은 ${this._hourlyRate*this.workingHoursPerWeek} 달러 입니다.`)
  }
}

let employee1 = new Employee('준모', 25, '주니어 웹 개발자', 40, 35);
console.log(employee1.fullName);
employee1.fullName = '헨리'
console.log(employee1.fullName);
employee1.fullName = '민수';
console.log(employee1.fullName);
employee1.printEmployeeDetails();