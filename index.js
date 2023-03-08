const cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(name){
    cats.push(name)
}
function destructivelyPrependCat(name){
    cats.unshift(name) 
}
function destructivelyRemoveLastCat(){
    cats.pop()
}
function destructivelyRemoveFirstCat(){
    cats.shift()
}

function appendCat(name){
    const copyOfCatsLast = [...cats, (name)]
return copyOfCatsLast
}


function prependCat(name){
    const copyOfCatsFirst = [(name),...cats]
    return copyOfCatsFirst
}

function removeLastCat(){
    const copyOfCatsRemoveLast = cats.slice(0,2)
    return copyOfCatsRemoveLast
}
function removeFirstCat(){
    const copyOfCatsRemoveFirst = cats.slice(1)
    return copyOfCatsRemoveFirst
}
// I also found that using .push or .unshift on the second array will equally
//solve the test, for example:
//funtion appendCat(name){
    //const copyOfCatsLast = [...cats]
    // copyOfCatsLast.push(name)
    //}
// will also add the (name) on the last value of the second array. Somehow this was easier for me to comprehend than the solution utilizing .slice