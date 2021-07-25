let task6New = ()=>{
  const userModule = (()=>{
    return {
      name: 'Max',
      value: 100,
      role: { name: 'Admin' },
      cases: [{ id: '1' }],
         };
  })()

  const result = []

  for(let userChar in userModule){
    if(userChar === 'role'){
      result.push(userModule[userChar].name)
      continue
    }

    if(userChar === 'cases'){
      result.push(userModule[userChar][0].id)
      continue
    }

    result.push(userModule[userChar])
  }


  result.splice(3,0, userModule.hasOwnProperty('isActive') ? userModule.isActive :  false)
  return result 
}
console.log(task6New());


// TASK 7 


let task7New = ()=>{
  return Object.assign({test:0}, {foo:1, bar:2})
}

console.log(task7New())

// TASK 8 

function task8New() {
  const obj = {
    nums: [0, 2, 5, 10, 15],
    fives: [], 
    calculateNumsFive(){
      this.fives = this.nums.filter(item => item % 5 === 0)
      return this.fives
    },
  }
  
  return obj.calculateNumsFive()
}

console.log(task8New())


// TASK 9

function task9New() {
 return ['test'.includes('est'), [22, 1, 90, 70].find(x => x<3)]

}

console.log(task9New())

// TASK 10 TO DO  setters getters
class newA{ 
  #color = null;
  constructor(name){
    this.name = name
  }

  getName(){
    return this.name
  }

}

class newB extends newA{
   constructor(name, age){
    super(name)
    this.age = age
    this.color = null
  }

  getName(text){
    return `${this.name} ${text}`
  }

  defaultuser(){
    return new newB('test', 0)
  }

  getAge(){
    return this.age
  }
}

let max = new newB('max', 13)


//TASK 11
function task11(obj, fieldName){
  return obj[fieldName] || ( obj[fieldName] ?? false)
}

console.log(task11({a: 1}, 'a')); 


//task 12 

function tasknew(obj, nameLevel1, nameLevel2){
  return obj ?.[nameLevel1] && obj[nameLevel1] ?.[nameLevel2]
}

