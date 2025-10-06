// TODO: write your code here
export default function orderByProps(obj, [name, level]) {
  const obj = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40};
  const arrSort = [];
  const keys = Object.keys(obj).sort(); 

  for (let i = 0; i < keys.length; i += 1) { 
    if (keys[i] === name) {
      arrSort.unshift({ key: keys[i], value: obj[keys[i]] });
    } if (keys[i] === level) {
      arrSort.push({ key: keys[i], value: obj[keys[i]] });
    }
  }

  for (const i in keys) { 
    if (keys[i] !== name && keys[i] !== level) {
      arrSort.push({ key: keys[i], value: obj[keys[i]]});
    }
  }

  return arrSort;
}