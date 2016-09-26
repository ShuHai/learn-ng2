function add(x: number, y: number): number {
    return x + y;
}

let myAdd = function(x: number, y: number): number { return x+y; };

//使用泛型
function identity(arg: any): any {
    return arg;
}

function identity2<T>(arg: T): T {
    return arg;
}