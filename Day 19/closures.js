// javascript allows writing function inside an outer function. we can write as many inner functtions as we want.
// id the inner func access the variables of outer func then it is called clousre.

function outerFunc() {
    let count = 0;
    function innerFunc() {
        count++
        console.log(count) 
    }
    return innerFunc()
}
// const theInner = outerFunc()
// console.log(theInner())
// console.log(theInner())
// console.log(theInner())
outerFunc()
outerFunc()
outerFunc()
outerFunc()