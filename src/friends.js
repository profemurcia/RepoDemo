// src/friends.js
function friends(m, n) {
  return m === sumDivProp(n) && n === sumDivProp(m);
}

function sumDivProp(x) {
    let s = 1;
    for (let i = 2; i <= x/2; i++)
        if (x % i === 0)
            s += i;
    return s;
}

module.exports = {
  friends
};