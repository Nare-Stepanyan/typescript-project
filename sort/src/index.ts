import {Sorter} from './Sorter';
import { NumbersCollection } from './NumbersCollection';

const numbersCollection = new NumbersCollection([0,6,-6,3]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);