// TODO: write your code here

const obj = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40};

export default function orderByProps(obj, [name, level]) {
  const result = [];
  const keys = Object.keys(obj).sort(); 

  for (let i = 0; i < keys.length; i += 1) { 
    if (keys[i] === name) {
      result.unshift({ key: keys[i], value: obj[keys[i]] });
    } if (keys[i] === level) {
      result.push({ key: keys[i], value: obj[keys[i]] });
    }
  }

  for (const i in keys) { 
    if (keys[i] !== name && keys[i] !== level) {
      result.push({ key: keys[i], value: obj[keys[i]]});
    }
  }

  return result;
}

import sum from './basic';

console.log('worked');

console.log(sum([1, 2]));