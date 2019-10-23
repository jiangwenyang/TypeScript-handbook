/* 字符串 */
// 普通字符串
let firstName: string = 'TypeScript';
let lastName: string = 'Language';
// 模板字符串
let fullName: string = `${firstName} ${lastName}`;

/* 布尔值 */
let isGood: boolean = true;

/* 数字 */
let myAge: number = 10;

/* 数组 */
// 使用元素类型+[]的方式定义
let list: number[] = [1, 2, 3, 4];
// 使用数组范型的方式定义
let list2: Array<string> = ['foo', 'bar'];

/* 元组Tuple */
// ”元组类型“是已知道元素数量和类型的数组的语义类型，在Typescript中并没有定义这一种类型。
let list3: [string, number, boolean] = ['foo', 20, true];

/* 枚举 */
enum Color {
  Red,
  Green,
  Blue
}
let c: Color = Color.Green;

/* Any */
// Any类型是一种动态类型，即可以为任意类型，适用于在编程阶段无法确定的类型（不要滥用Any类型）。
let notSure: any = 4;
notSure = 'foo';
notSure = false;
notSure = [1, 2, 3];
// 当不知道数组中元素类型时，可以使用any类型
let list4: any[] = [1, true, 'free', {}, undefined, null];

/* Void */
// Void类型代表没有任何类型，Void类型只能赋予undefined和null，一般用于没有返回值的函数的返回值类型
function noReturn(): void {
  console.log('This is a function no return value!');
}

/* Null 和 Undefined */
// null 和 undefined 各自对应 null 和 undefined 类型，这两个类型是所有其他类型的子类型。
let u: undefined = undefined;
let n: null = null;

/* Never类型 */
// never类型表示的是那些永不存在的值的类型
function error(message: string): never {
  throw new Error(message);
}

// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
  while (true) {}
}

// Object类型
const obj: object = {};
const obj3: object = Object.create({});
