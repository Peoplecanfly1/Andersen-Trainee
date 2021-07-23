First task 

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
