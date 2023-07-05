// fucntion to check an item form a set in an array

const hasVaulesFromArray = (set, arr) => arr.every((value) => set.has(value));

export default hasVaulesFromArray;
