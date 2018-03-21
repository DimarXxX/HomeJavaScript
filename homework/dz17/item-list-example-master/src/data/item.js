const guid = () => {
  const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

export default class Item {
  constructor(name = '', count = 0) {
    this.id = guid();
    this.name = name;
    this.count = count;
  }
}