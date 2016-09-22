// 布尔值
let isSheep: boolean = true;

// 各种数值类型
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;

// 字符串，模板
let sheepName: string = 'sheep';
let hello: string = `sheep is ${sheepName}`;

// 数组
let list: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];
let list3: string[] = ['66', '77'];

// 元组tuple特殊的数组
let x: [string, number];
x = ['hi', 666];
console.log(x[3]);

// 枚举
enum Color {Red, Green, Blue};
let c: Color = Color.Green;

// 任意值
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false;

// null 和 undefined
let u: void = undefined;
let n: void = null;