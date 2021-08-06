import {User} from './User'; 
import {Company} from "./Company";
import { CustomMap } from './CustomMap';

const user = new User();

console.log(user);

const company = new Company();

console.log(company);

const customMap = new CustomMap('map', user, company);

console.log(customMap);


