function filter(array, callback) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
  if(callback(array[i])){
      newArray.push(array[i]);
    }
  }
    return newArray;
  }
  const array = [1, 2, 3, 4, 5];
  const resultantArray = filter(array, (num) => num %2!=0);
  console.log(resultantArray);
  