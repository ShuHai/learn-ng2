// 布尔值
var isSheep = true;
// 各种数值类型
var decLiteral = 6;
var hexLiteral = 0xf00d;
var binaryLiteral = 10;
var octalLiteral = 484;
// 字符串，模板
var sheepName = 'sheep';
var hello = "sheep is " + sheepName;
// 数组
var list = [1, 2, 3];
var list2 = [1, 2, 3];
var list3 = ['66', '77'];
// 元组tuple特殊的数组
var x;
x = ['hi', 666];
console.log(x[3]);
// 枚举
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
// 任意值
var notSure = 4;
notSure = "maybe a string instead";
notSure = false;
// null 和 undefined
var u = undefined;
var n = null;
//# sourceMappingURL=baseType.js.map