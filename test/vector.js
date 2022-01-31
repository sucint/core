const {
  addOpTag,
  andOpTag,
  negateOpTag,
  notOpTag,
  divOpTag,
} = require('../src/tags');

class Vector {
  constructor(arr = []) {
    this.arr = [...arr];
  }

  get length() {
    return this.arr.length;
  }

  push(value) {
    this.arr.push(value);
  }

  static clone(vector) {
    return new Vector(vector.arr);
  }

  static [addOpTag](a, b) {
    const l = Math.min(a.length, b.length);
    const result = new Vector();
    for (let i = 0; i < l; i += 1) {
      result.push(a.arr[i] + b.arr[i]);
    }
    return result;
  }

  static [divOpTag](a, b) {
    if (a instanceof Vector) {
      const result = new Vector();
      const numb = Number(b);
      for (let i = 0; i < a.length; i += 1) {
        result.push(a.arr[i] / numb);
      }
      return result;
    }
    if (b instanceof Vector) {
      const result = new Vector();
      for (let i = 0; i < b.length; i += 1) {
        result.push(a / b.arr[i]);
      }
      return result;
    }
    return a / b;
  }

  static [negateOpTag](a) {
    const l = a.length;
    const result = new Vector();
    for (let i = 0; i < l; i += 1) {
      result.push(-a.arr[i]);
    }
    return result;
  }

  static [notOpTag](a) {
    const l = a.length;
    let total = 0;
    for (let i = 0; i < l; i += 1) {
      total += a.arr[i];
    }
    return total <= 0;
  }

  static [andOpTag](a, b) {
    const valueA = a instanceof Vector ? !Vector[notOpTag](a) : a;
    const valueB = b instanceof Vector ? !Vector[notOpTag](b) : b;
    return valueA && valueB;
  }
}

module.exports = Vector;
