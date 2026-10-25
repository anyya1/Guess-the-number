let a = 10;
let b = 0;
let max=5;
while(true){
const c = Math.floor(Math.random() * max) + 1;
let u = prompt(`угадай число от 1 до ${max}`)

if (u == "изменить"){
let uc = +prompt("введи новый диапазон")
while(Number.isNaN(uc)||uc<1){
uc = +prompt("введи новый диапазон")
}
max=uc
continue
}

u=Number(u)
if(Number.isNaN(u) || u<1 || u>max){
alert(`не корректное число!`)
continue
}

if(c===u){
alert(`ты угадал, осталось жизней:${a}`)
}else{
a-=1
alert(`ты не угадал, было загадано число${c}, осталось жизней:${a}`)
}
if (a<=0){
break
}
}