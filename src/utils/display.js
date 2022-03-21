export const timedFunc = (funcToDo, delay) => {
  setTimeout(function(){
    funcToDo();
  }, delay)
}
