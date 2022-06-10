import { CharectersCollection } from "./CharectersCollection";
import { LinkedList } from "./LinkedList";
import { NumbersCollection } from "./NumbersCollection";

const numbersCollection = new NumbersCollection([22, 28711, 2]);
numbersCollection.sort();

const charectersCollection = new CharectersCollection("Xkjkwd");
charectersCollection.sort();

const linkedList = new LinkedList();
linkedList.add(222);
linkedList.add(902);
linkedList.add(7781);
linkedList.add(1);
linkedList.sort();

console.log(numbersCollection.data);
console.log(charectersCollection.data);
linkedList.print();
