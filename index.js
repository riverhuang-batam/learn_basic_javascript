// class stopwatchs {
//     constructor(){
//         this.dt = ''
        
//     }
//     start(){
//         this.dt = new Date()
//         return this.dt;
//     }
//     stop(){
//         this.dt = new Date()
//         return this.dt;
//     }
//     duration(){
//         console.log(this.start().getTime())
//         return parseInt(this.start().getTime()) - parseInt(this.stop().getTime())
//     }
// }
// const stopwatch = new stopwatchs()

// console.log(stopwatch)
// // stopwatch.start();
// // let stopwatch = 10000
// // stopwatch.start()
// // // stopwatch.stop()
// // // stopwatch.duration()
// // console.log(stopwatch)

class Coffee {
    constructor(obj = {}){
        this.bean = obj.bean,
        this.method = obj.method
    }
}

const newCoffee = new Coffee({
    bean: 'Gayo Read Honey',
    method: 'manual'
})
class cafe extends Coffee{
    constructor(obj = {}){
        super(obj)
        this.name = obj.name
    }
}
const name = new cafe({
    name: 'hasih'
})
console.log(name)

