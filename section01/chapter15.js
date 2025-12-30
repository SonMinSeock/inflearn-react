const animal = {
    type: '고양이',
    name: '나비',
    color: '흰색',
};

animal.age = 2; // 프로퍼티 추가
animal.name = '솜이'; // 프로퍼티 수정
delete animal.color; // 프로퍼티 삭제

console.log(animal.name);
console.log(animal['type']);

const person = {
    name: 'Son',
    sayHi: function () {
        console.log('Hello!');
    },
    sayFavorite: () => {
        console.log('Playing Console Game');
    },
    sayJob() {
        console.log('My Job Software Enginere');
    },
};

person.sayHi();
person.sayFavorite();
person['sayJob']();
