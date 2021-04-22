export const isEmpty = (obj) => [Object, Array].includes((obj || {}).constructor) && !Object.entries((obj || {})).length;

export const randomItemFromArray = (arr) => arr[Math.floor(Math.random() * arr.length)];
