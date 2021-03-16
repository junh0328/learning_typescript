let student = {
  name: 'Jake',
  cours: 'Getting Started with TypeScript',
  codingIQ: 80,
  code: function () {
    console.log('brain is working hard');
  },
};

function carculateCodinIQ(lostPoints: any) {
  return 100 - lostPoints;
}

function carculateSomething(): void {
  console.log('wow');
}
