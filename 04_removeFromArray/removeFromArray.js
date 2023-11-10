const removeFromArray = function(arr, ...nums) {

    const arrout = [];

    arr.forEach(num => {
      if (!nums.includes(num)) {
        arrout.push(num)
      }
    })

    return arrout;

};

// Do not edit below this line
module.exports = removeFromArray;
