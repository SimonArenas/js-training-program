/*
  Create an average function with accumalative values.
  For instance:

  averageOf(2) => 2 / 1  = 2;
  averageOf(4) => 2 + 4 / 2 = 6 / 2 = 3;
  averageOf(6) => 2 + 4 + 6 / 3 = 12 / 3 = 4;
  
*/

function average() {
  let numbers = 0;
  let counter = 0;
  const addNumber = (number) => {
    counter += 1;
    let result = (numbers += number) / counter;
    return result;
  };
  return addNumber;
}

module.exports = {
  average,
};
