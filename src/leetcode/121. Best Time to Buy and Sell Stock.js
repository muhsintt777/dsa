/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let [left, right] = [0, 0];
  let maxProfit = 0;
  const limit = prices.length;
  while (right < limit) {
    const pLeft = prices[left];
    const pRight = prices[right];
    if (pLeft > pRight) {
      left = right;
    } else {
      const currProfit = pRight - pLeft;
      if (maxProfit < currProfit) maxProfit = currProfit;
    }
    right++;
  }
  return maxProfit;
};
