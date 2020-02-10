const testList = [1, 2, 3, 4];

function sumFor(list) {
  let sum = 0;
  for (const nums of list) {
    sum += nums;
  }
  return sum;
}

console.log(sumFor(testList));

function sumWhile(list) {
  let sum = 0;
  let i = 0;
  while (i < list.length) {
    sum += list[i];
    i++;
  }
  return sum;
}

console.log(sumWhile(testList));

function sumRecursion(list) {
  if (list.length === 0) {
    return 0;
  }
  return list[0] + sumRecursion(list.slice(1, list.length));
}

console.log(sumRecursion(testList));

function sumTheSimpleWay(list) {
  return _.reduce(list, (memo, num) => memo + num, 0);
}

console.log(sumTheSimpleWay(testList));
