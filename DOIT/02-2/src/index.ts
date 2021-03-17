import IPerson from './person/IPerson'; // 타입들을 모아놓은 인터페이스의 기능을 하는 IPerson
import Person from './person/Person'; // IPerson 인터페이스를 통해 생성자를 만든 객체 Person
import Chance from 'chance'; // faker와 같은 기능을 하는 랜덤한 이름을 출력해주는 라이브러리
import * as R from 'ramda'; // Math 오브젝트 보다 간단하고 편한 기능을 제공하는 라이브러리

const chance = new Chance();
let persons: IPerson[] = R.range(0, 2).map((n: number) => new Person(chance.name(), chance.age()));
console.log(persons);
