// First  

function createCb(str){
  return function(){
    console.log(str)
  }
}

function foo(x, cb){

if(x>10){
  console.log('x>10')
  cb()
}else{
  console.log('x<10')

}
}

foo(16, createCb('someStr'))


// Second

function parseJSON(jsonStr, successCB, failureCB){
  try{
    let result = JSON.parse(jsonStr)
    successCB(result)
  }catch(e){
    failureCB(e)
  }
  
}

function failureCB(error){
  console.log('unsuccsess', error)
}

function successCB(JSONresult){
  console.log('sucsessParse', JSONresult)
}

parseJSON('{"x:10}', successCB, failureCB)

// Third 

function delay(ms){
  let promise = new Promise(function(resolve, reject){
    setTimeout(()=>resolve('100'),ms)
  })
  return promise
}
delay(1000).then(value => console.log(`Done with ${value}`))


