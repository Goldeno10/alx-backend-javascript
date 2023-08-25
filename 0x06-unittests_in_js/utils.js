const Utils = {
  calculateNumber: function (type, a, b) {
    const roundA = Math.round(a);
    const roundB = Math.round(b);
    if (type === 'SUM') {
      return roundA + roundB;
    } else if (type === 'SUBTRACT') {
      return roundA - roundB;
    } else if (type === 'DIVIDE') {
      if (roundB === 0) {
        return 'Error';
      }
      return roundA / roundB;
    }
    return sum;
  },
};
  
module.exports = Utils;
  