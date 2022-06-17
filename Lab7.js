function number() {
    let a = Number(prompt('Яке число перевірити на парність?', 2));
    if (Number.isFinite(a)) {
        if (a % 2 === 0) {
            alert(`Число ${a} Парне`);
        } else {
            alert(`Число ${a} Непарне`)
        }
    } else {
        alert(`Аргумент не число`);
    }
}
number();

function argument() {
    let h = Number(prompt('Яку суму чисел потрібно додати?', 2));
    let m = "1";
    let b = 0
    let g = "";
    for (let i = 0; i < h; i++) {
        g = g + m;
        b = b + Number(g)
    }
    alert(b);
}
argument();


let arr = [4];
let a = 0;
let j = 0;

function gg(num) {
    for (var i = 2; i < num; i++) {
        if (num % i == 0) {
            j++;
        }
    }
    if (j == 0) {
        arr[a] = num;
        a++;
    } else {
        j = 0;
    }
}

function dd() {
    for (let b = 1; a < 5; b++) {
        gg(b)
    }
}
dd();
alert(`Вивід масиву`);
alert(arr[0]);
alert(arr[1]);
alert(arr[2]);
alert(arr[3]);
alert(arr[4]);