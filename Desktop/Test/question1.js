const arrfirst = [1, 2, 3];
const arrSecond = [2, 3, 4];
const result = intersectionArrays(arrfirst,arrSecond)


function intersectionArrays(arrfirst,arrSecond){
    const intersection = []
    for(const num of arrfirst){
        if(arrSecond.includes(num)){
            intersection.push(num)
        }
    }
    return intersection

}
console.log(result)
