

let a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p;
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

let firstCounter = 0;
let secondCounter = 0;

numbers.forEach( (number) => {
    a = number;
    numbers.forEach( (number) => {
        b = number;
        if (a === b ) {
            return;
        }
        numbers.forEach( (number) => {
            c = number;
            if (c === b || c === a ) {
                return;
            }
            numbers.forEach( (number) => {
                d = number;
                if (a === d || b === d || c === d) {
                    return;
                }
                if (c === 3 && d === 4) {
                    return
                }
                let lineOne = a + b + c + d;
                if (lineOne !== 34) {
                    return;
                }
                numbers.forEach ((number) =>{
                    e = number;
                    if (a === e || b === e || c === e || d === e ) {
                        return;
                    }
                    numbers.forEach( (number) => {
                        f = number;
                        if (a === f || b === f || c === f || d === f || e === f ) {
                            return;
                        }
                        numbers.forEach( (number) => {
                            g = number;
                            if (a === g || b === g || c === g || d === g || e === g || f === g) {
                                return;
                            }
                            numbers.forEach( (number) => {
                                h = number;
                                if (a === h || b === h || c === h || d === h || e === h || f === h || g === h ) {
                                    return;
                                }
                                let lineTwo = e + f + g + h;
                                if (lineTwo !== 34) {
                                    return;
                                }
                                numbers.forEach( (number) => {
                                    i = number;
                                    if (a === i || b === i || c === i || d === i || e === i || f === i || g === i || h === i) {
                                        return;
                                    }
                                    numbers.forEach( (number) => {
                                        j = number;
                                        if (a === j || b === j || c === j || d === j || e === j || f === j || g === j || h === j || i === j) {
                                            return;
                                        }
                                        numbers.forEach( (number) => {
                                            k = number;
                                            if (a === number || b === number || c === number || d === number || e === number || f === number || g === number || h === number || i === number || j === number) {
                                                return;
                                            }
                                            numbers.forEach( (number) => {
                                                l = number;
                                                if (a === number || b === number || c === number || d === number || e === number || f === number || g === number || h === number || i === number || j === number || k === number) {
                                                    return;
                                                }
                                                let lineThree = i + j + k + l;
                                                if (lineThree !== 34) {
                                                    return;
                                                }
                                                numbers.forEach( (number) => {
                                                    m = number;
                                                    if (a === number || b === number || c === number || d === number || e === number || f === number || g === number || h === number || i === number || j === number || k === number || l === number) {
                                                        return;
                                                    }
                                                    numbers.forEach( (number) => {
                                                        n = number;
                                                        if (a === number || b === number || c === number || d === number || e === number || f === number || g === number || h === number || i === number || j === number || k === number || l === number || m === number) {
                                                            return;
                                                        }
                                                        numbers.forEach( (number) => {
                                                            o = number;
                                                            if (a === number || b === number || c === number || d === number || e === number || f === number || g === number || h === number || i === number || j === number || k === number || l === number || m === number || n === number) {
                                                                return;
                                                            }
                                                            numbers.forEach( (number) => {
                                                                p = number;
                                                                if (a === b || a === c || a === d || a === e || a === f || a === g || a === h || a === i || a === j || a === k || a === l || a === m || a === n || a === o || a === p || b === c || b === d || b === e || b === f || b === g || b === h || b === i || b === j || b === k || b === l || b === m || b === n || b === o || b === p || c === d || c === e || c === f || c === g || c === h || c === i || c === j || c === k  || c === l || c === m || c === n || c === p || c === o || c === p || d === e || d === f || d === g || d === h || d === i || d === j || d === k || d === l || d === m || d === n || d === o || d === p  || e === f || e === g || e === h || e === i || e === j || e === k || e === l || e === m || e === n || e === o || e === p || f === g || f === h || f === i || f === j || f === k  || f === l || f === m || f === n || f === o || f === p || g === h || g === i || g === j || g === k || g === l || g === m || g === n || g === o || g === p || h === i || h === j || h === k || h === l || h === m || h === n || h === o || h === p || i === j || i === k || i === l || i === m || i === n || i === o || i === p || j === k || j === l || j === m || j === n || j === o || j === p || k === l || k === m || k === n || k === o || k === p || l === m || l === n || l === o || l === p || m === n || m === o || m === p || n === o || n === p || o === p ) {
                                                                    return;
                                                                }

                                                                let lineFour = m + n + o + p;
                                                                let lineFive = a + e + i + m;
                                                                let lineSix = b + f + j + n;
                                                                let lineSeven = c + g + k + o;
                                                                let lineEight = d + h + l + p;

                                                                let lineNine = a + f + k + p;
                                                                let lineTen = d + g + j + m;

                                                                if (lineFour !== 34 || lineFive !== 34 || lineSix !== 34 || lineSeven !== 34 || lineEight !== 34 || lineNine !== 34 || lineTen !== 34) {
                                                                    return;
                                                                }

                                                                firstCounter ++;
                                                                let remainder = firstCounter % 100000000;
                                                                if (remainder === 0) {
                                                                    secondCounter ++;
                                                                    console.log(`Counter: ${secondCounter}`);
                                                                    console.log(`c: ${c}`);
                                                                    console.log(`d: ${d}`);
                                                                    console.log(`e: ${e}`);
                                                                }
                                                    

                                                                if (lineOne === 34 && lineTwo === 34 && lineThree === 34 && lineFour === 34 && lineFive === 34 && lineSix === 34 && lineSeven === 34 && lineEight === 34 && lineNine === 34 && lineTen === 34) {
                                                                    console.log(`a: ${a}`);
                                                                    console.log(`b: ${b}`);
                                                                    console.log(`c: ${c}`);
                                                                    console.log(`d: ${d}`);
                                                                    console.log(`e: ${e}`);
                                                                    console.log(`f: ${f}`);
                                                                    console.log(`g: ${g}`);
                                                                    console.log(`h: ${h}`);
                                                                    console.log(`i: ${i}`);
                                                                    console.log(`j: ${j}`);
                                                                    console.log(`k: ${k}`);
                                                                    console.log(`l: ${l}`);
                                                                    console.log(`m: ${m}`);
                                                                    console.log(`n: ${n}`);
                                                                    console.log(`o: ${o}`);
                                                                    console.log(`p: ${p}`);
                                                                    console.log(` -------------------------------------------
                                                                    

                                                                    
                                                                    `)
                                                                    
                                                                }

                                                            })
                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})

