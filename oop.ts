class Employee {
  private _fullName: string; 
  perAge: number;
  jobTitle: string; 
  hourlyRate: number; 
  workingHoursPerWeek: number; 

  constructor(fullName: string, perAge: number, jobTitle:string, hourlyRate: number, workingHoursPerWeek: number){
    this._fullName = fullName;
    this.perAge = perAge;
    this.jobTitle = jobTitle;
    this.hourlyRate = hourlyRate;
    this.workingHoursPerWeek = workingHoursPerWeek;
  }

  get fullName (){
    return this._fullName;
  }

  set fullName (value : string) {
    this._fullName = value;
  }

  printEmployeeDetails = ():void =>{
    console.log(`${this._fullName}의 직업은 ${this.jobTitle}이고 일주일의 수입은 ${this.hourlyRate*this.workingHoursPerWeek} 달러 입니다.`)
  }
}

let employee1 = new Employee('준모', 25, '주니어 웹 개발자', 40, 35);
console.log(employee1.fullName);
employee1.fullName = '헨리'
console.log(employee1.fullName);
employee1.fullName = '민수';
console.log(employee1.fullName);
employee1.printEmployeeDetails();