var digits = 5

console.log("==================================\n\nStarting Calculation...\n\n==================================")

var collisions = 0
var startTime = Date.now()

var m1 = 100
var m2 = 1
var v1 = -1
var v2 = 0

start()
function start(){
    m1 = 100 ** (digits - 1)
    collision()
}

function collision(){
    if(v1 > 0 && v2 > 0 && v1 > v2){
        return console.log(`${collisions}\n${(Date.now() - startTime) / 1000} s`)
    }

    var ov1 = v1
    v1 = (((m1 - m2) * v1) + (2 * m2 * v2)) / (m1 + m2)
    v2 = ((2 * m1 * ov1) + (m2 - m1) * v2) / (m1 + m2)
    collisions++
    //console.log(`\n${collisions}\n${v1}\n${v2}`)
    if(v2 > 0){
        return console.log(`${collisions}\n${(Date.now() - startTime) / 1000} s`)
    }

    if(v2 < v1 || (v1 > 0 && v2 > v1)){
        collisions++
        v2 = v2 * -1

        //console.log(`\n${collisions} - wall\n${v1}\n${v2}`)
        setImmediate(() => { collision(); })
        //collision();
    }
    
    if(v1 < 0 && v2 < v1){
        setImmediate(() => { collision(); })
        //collision();
    }
}