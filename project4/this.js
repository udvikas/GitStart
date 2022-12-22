// 'use strict';
// // house 
// // this.table = 'window table'
// // // const cleanTable = function(soap) {
// // //     let that = this;
// // //     const innerfunction = function(_soap) {
// // //         console.log(`cleaning ${that.table} using ${_soap}`);
// // //     }
// // //     innerfunction(soap)
// // // }
// // this.table = 'window table'
// // const cleanTable = function(soap) {
// //     const innerfunction = function(_soap) {
// //         console.log(`cleaning ${this.table} using ${_soap}`);
// //     }
// //     // innerfunction.call(this, soap)
// //     innerfunction.bind(this)(soap);
// // }

// this.table = 'window table'
// // const cleanTable = function(soap) {
// //     const innerfunction = (_soap) => {
// //         console.log(`cleaning ${this.table} using ${_soap}`);
// //     }
// //     // innerfunction.call(this, soap)
// //     innerfunction(soap);
// // }
// this.garage = {
//     table: 'garage table',
//     // cleanTable() {
//     //     console.log(`Cleaning ${this.table}`);
//     // } 
// }
// class createRoom {
//     constructor(name) {
//         this.table = `${name}s table`;
//     }
//     cleanTable(soap) {
//         console.log(`cleaning ${this.table} using ${soap}`)
//     }
// }
// // this.garage.cleanTable();
// let createRoom = function(name) {
//     this.table = `${name}s table`;
// }
// createRoom.prototype.cleanTable = function(soap) {
//     console.log(`cleaning ${this.table} using ${soap}`);
// }

// const jillsRoom = new createRoom('jill');
// const johnsRoom = new createRoom('john');

// jillsRoom.cleanTable('some soap');
// johnsRoom.cleanTable('some soap');
// // let johnsRoom = {
//     table: 'johns Table',
//     // cleanTable() {
//     //     console.log(`Cleaning ${this.table}`);
//     // }
// }
// cleanTable.call(this, 'some soap');
// cleanTable.call(this.garage, 'some soap');
// // cleanTable.call(johnsRoom, 'some soap');
// cleanTable.call(jillsRoom, 'some soap');
// cleanTable.call(johnsRoom, 'some soap');
// johnsRoom.cleanTable();

class Student {
    static count = 0;
    constructor(name, age, phoneNo, marks) {
        this.name = name;
        this.age = age;
        this.phoneNo = phoneNo;
        this.marks = marks;
        Student.countStudent();
    }
    static countStudent() {
        return Student.count++;
    }
    elegible() {
        if(this.marks >= 40) {
            console.log('Eligible');
        } else {
            console.log('Not Eligible')
        }
    }
    display() {
        console.log(this.name, this.age, this.phoneNo, this.marks);
    }
}
const student1 = new Student('karl', 28, 123456, 38);
const student2 = new Student('john', 30, 123456, 38);
const student3 = new Student('david', 25, 123456, 38);
const student4 = new Student('hari', 32, 123456, 38);
const student5 = new Student('rock', 24, 123456, 38);


student1.display();
student1.elegible();
console.log(Student.countStudent());