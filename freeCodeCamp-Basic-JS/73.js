function orderMyLogic(val) {
  if (val > 10) {
    return 'Greater than or equal to 10';
  } else if (val < 5) {
    return 'Less than 5';
  } else {
    return 'Less than 10';
  }
}

orderMyLogic(4);
orderMyLogic(6);
orderMyLogic(11);
