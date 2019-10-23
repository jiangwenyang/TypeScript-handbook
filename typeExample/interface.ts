interface FooObj {
  name: string;
  age?: number;
}

interface Foo {
  (fooObj: FooObj): string;
  method: (bar: string) => string;
}

const foo = (fooObj: FooObj) => {
  console.log(fooObj.name); // 'foo'
};
foo.method = (bar: string) => {
  return bar;
};
