const isFunction = require('./isFunction');

const copyBuffer = (cur) =>
  cur instanceof Buffer
    ? Buffer.from(cur)
    : new cur.constructor(cur.buffer.slice(), cur.byteOffset, cur.length);

function cloneRegExp(obj) {
  const flags =
    (obj.global ? 'g' : '') +
    (obj.ignoreCase ? 'i' : '') +
    (obj.multiline ? 'm' : '') +
    (obj.sticky ? 'y' : '') +
    (obj.unicode ? 'u' : '');
  return new RegExp(obj.source, flags);
}

function clonefn(cloneProto) {
  const refs = [];
  const refsNew = [];
  function innerclone(o) {
    if (typeof o !== 'object' || o === null) {
      return o;
    }
    if (o instanceof Date) {
      return new Date(o);
    }
    if (Array.isArray(o)) {
      return o.map((x) => innerclone(x));
    }
    if (o instanceof Map) {
      return new Map(innerclone(Array.from(o)));
    }
    if (o instanceof Set) {
      return new Set(innerclone(Array.from(o)));
    }
    if (o instanceof RegExp) {
      return cloneRegExp(o);
    }
    if (ArrayBuffer.isView(o)) {
      return copyBuffer(o);
    }
    const i = refs.indexOf(o);
    if (i > -1) {
      return refsNew[i];
    }
    if (isFunction(o.constructor.clone)) {
      return o.constructor.clone(o);
    }
    const result = {};
    refs.push(o);
    refsNew.push(result);
    // eslint-disable-next-line
    for (const key in o) {
      if (cloneProto || Object.hasOwnProperty.call(o, key)) {
        result[key] = innerclone(o[key]);
      }
    }
    refs.pop();
    refsNew.pop();
    return result;
  }
  return innerclone;
}

function clone(obj, cloneProto = false) {
  return clonefn(cloneProto)(obj);
}

module.exports = clone;
