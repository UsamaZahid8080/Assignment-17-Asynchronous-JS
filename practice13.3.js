let globalCounter = 0;


function timeout(value) {
  return new Promise((resolve) => {
    setTimeout(() => {
      globalCounter += 1;
      resolve({ counter: globalCounter, value });
    }, 1000);
  });
}


async function asyncFunction(value) {
  const result = await timeout(value);
  console.log(`x value ${result.value} counter:${result.counter}`);
  return result; 
}


async function runLoop() {
  for (let i = 1; i <= 3; i++) {
    console.log(`ready ${i} counter:${globalCounter}`);
    await asyncFunction(i);
  }
}


runLoop();
