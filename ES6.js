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
