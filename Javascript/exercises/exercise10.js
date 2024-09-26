function testLoop(value1, set) {
    console.log(`${value1}`);
  }
  
let names = new Set(["Gerald","Cathy","Canon","HP","Brothers","Addidas","Nike","Milo","Ciggies","Vaping"]);//.forEach(testLoop);

names.add("Joseph");
console.log(names);
names.delete("Gerald");
console.log(names);
names.forEach(testLoop);

names.clear();

console.log(names);

