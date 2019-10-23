interface Type1 {
  name: string;
  age: number;
}

interface Type2 {
  name: string;
  method: (name: string) => number;
}

const type1: Type1 = {
  name: 'type1',
  age: 20
};

const type2: Type2 = {
  name: 'type2',
  method(name) {
    return type1.age;
  }
};

const mixedType: Type1 & Type2 = { ...type1, ...type2 };

let union: number | string;

function unionFunc(union: number | string) {
  console.log(union.length);
}
