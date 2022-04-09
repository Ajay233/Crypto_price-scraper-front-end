export const repeatFunc = (funcToDo, interval) => {
  const intervalId = setInterval(() => {
    funcToDo()
  }, interval);
  return intervalId
}
