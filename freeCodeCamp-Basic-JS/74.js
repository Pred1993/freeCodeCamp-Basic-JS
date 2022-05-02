function testSize(num) {
  if (num <= 4) {
    return 'Tiny';
  } else if (num <= 8) {
    return 'Small';
  } else if (num <= 14) {
    return 'Medium';
  } else if (num <= 17) {
    return 'Large';
  } else {
    return 'Huge';
  }
}
testSize(0);
testSize(4);
testSize(5);
testSize(8);
testSize(10);
testSize(14);
testSize(15);
testSize(17);
testSize(20);
testSize(25);
