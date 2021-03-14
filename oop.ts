class Employee {
  fullName: string; 
  perAge: number;
  jobTitle: string; 
  hourlyRate: number; 
  workingHoursPerWeek: number; 

  printEmployeeDetails = ():void =>{
    console.log(`${this.fullName}의 직업은 ${this.jobTitle}이고 일주일의 수입은 ${this.hourlyRate*this.workingHoursPerWeek} 달러 입니다.`)
  }
}

let employee1 = new Employee();
employee1.fullName = '준모';
employee1.jobTitle = '주니어 웹 개발자';
employee1.hourlyRate = 40;
employee1.workingHoursPerWeek = 35;
employee1.printEmployeeDetails();