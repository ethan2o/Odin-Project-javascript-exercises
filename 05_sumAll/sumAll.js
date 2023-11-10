const sumAll = function(arg1, arg2) {
    var sum = 0;

    var tmp = arg1;

    if (arg1 < 0 || arg2< 0) {
        return "ERROR";
    }

    if (typeof arg1 != "number" || typeof arg2 != "number") {
        return "ERROR";
    }

    if (arg1 > arg2) {
        tmp = arg1;
        arg1 = arg2;
        arg2 = tmp;
    }

    for (let i=arg1; i<=arg2; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
