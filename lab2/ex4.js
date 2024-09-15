function filterLessThanTwenty(arr) {
    return arr.filter(value => value >= 20);
  }
  
  var values  = [1, 60, 34, 30, 20, 5];
  const filteredNumbers = filterLessThanTwenty(values);
  console.log(filteredNumbers);
  