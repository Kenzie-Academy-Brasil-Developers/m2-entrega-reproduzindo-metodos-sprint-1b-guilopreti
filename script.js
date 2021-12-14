// Escreva seu código aqui.

//forEach
const callbackForEach = (currentValue, index, array) => {
    console.log(currentValue * currentValue)
}

const newForEach = (array, callForEach) => {
    for(let i = 0; i < array.length; i++){
        callForEach(array[i], i, array)
    }
}

console.log(newForEach([2,3,4], callbackForEach))

//map
const callbackMap = (currentValue, index, array) => {
   
    if(isNaN(currentValue)){
        return `${currentValue} não é um número`
    }
    if(currentValue % 2 === 0){
        return `${currentValue} é par`
    }
    if(currentValue % 2 !== 0){
        return `${currentValue} é impar`
    }
}

const newMap = (array, callMap) => {
    let newArray = []

    for(let i = 0; i < array.length; i++){
        newArray.push(callMap(array[i], i, array))
    }
    
    return newArray
}

console.log(newMap([1,2,3,4,5,"batata",6], callbackMap))

//filter
const callbackFilter = (currentValue, index, array) =>{
   return currentValue > 10
}

const newFilter = (array, callFilter) =>{
    let newArray = []

    for(let i = 0; i < array.length; i++){
        if(callFilter(array[i], i, array)){
            newArray.push(array[i])
        }
    }

    return newArray
}

console.log(newFilter([1, 4, 8, 10, 15, 18, 20], callbackFilter))

//find
const brasileirao2021 = [
    {
        time: "Corinthians",
        rebaixado: false
    },
    {
        time: "Grêmio",
        rebaixado: true
    },
    {
        time: "Flamengo",
        rebaixado: false
    },
    {
        time: "Chapecoense",
        rebaixado: true
    }
]

const callbackFind = (currentValue, index, array) => {
    return currentValue.rebaixado
}

const newFind = (array, callFind) => {
    for(let i = 0; i < array.length; i++){
        if(callFind(array[i], i, array)){
            return array[i]
        }
    }
}

console.log(newFind(brasileirao2021, callbackFind))

// findIndex
const callbackFindIndex = (currentValue, index, array) =>{
    return currentValue.length > 5
}

const newFindIndex = (array, callFindIndex) =>{
    for(let i = 0; i < array.length; i++){
        if(callFindIndex(array[i], i, array)){
            return i
        }
    }
    return -1
}

console.log(newFindIndex(['pedra', 'papel', 'tesoura', 'batata'], callbackFindIndex))

//reduce
const callbackReduce = (acumulador, currentValue, index, array) => {
    return acumulador += currentValue
}

const newReduce = (array, callReduce, valorInicial = array[0]) => {
    if(valorInicial === array[0]){
        for(let i = 1; i < array.length; i++){
            valorInicial = callReduce(valorInicial, array[i], i, array)
        }
        return valorInicial
    }
    
    for(let i = 0; i < array.length; i++){
        valorInicial = callReduce(valorInicial, array[i], i, array)
    }
    return valorInicial
}

console.log(newReduce([1,2,3,4], callbackReduce, 0))

//some
const callbackSome = (currentValue, index, array) => {
    return currentValue % 2 === 0
}

const newSome = (array, callSome) => {
    for(let i = 0; i < array.length; i++){
        if(callSome(array[i], i, array)){
            return true
        }
    }
    return false
}

console.log(newSome([1,3,5,7,10], callbackSome))
console.log(newSome([1,3,5,7,9], callbackSome))

//every
const callbackEvery = (currentValue, index, array) =>{
    return currentValue * currentValue > 10
}

const newEvery = (array, callEvery) =>{
    for(let i = 0; i < array.length; i++){
        if(!callEvery(array[i], i, array)){
            return false
        }
    }
    return true
}

console.log(newEvery([4,5,6,7], callbackEvery))
console.log(newEvery([3,4,5,6,7], callbackEvery))

//fill
let banana = ["maça", "maça", "mala", "chuva", "casa", "bola", "jogo"]

const newFill = (array, valor, inicio = 0, fim = array.length) =>{
    
    if(inicio >= 0 && fim >= 0){
        for(let i = inicio; i < fim; i++){
            array[i] = valor
        }
    } else if(inicio >= 0 && fim < 0){
        for(let i = inicio; i < array.length + (fim); i++){
            array[i] = valor
        }
    } else if(inicio < 0 && fim >= 0){
        for(let i = array.length + (inicio); i < fim; i++){
            array[i] = valor
        }
    } else if(inicio < 0 && fim < 0){
        for(let i = array.length + (inicio); i < array.length + (fim); i++){
            array[i] = valor
        }
    }
    
}

console.log(banana)
newFill(banana, "banana", 1, 5)
console.log(banana)

//includes
let things = ["maça", "livro", "mala", "chuva", "casa", "bola", "jogo"]
const newIncludes = (array, searchElement, fromIndex = 0) => {
    if(fromIndex >= 0){
        for(let i = fromIndex; i < array.length; i++){
            if(array[i] === searchElement){
                return true
            }
        }
    } 
    if(fromIndex < 0){
        for(let i = array.length + (fromIndex); i < array.length; i++){
            if(array[i] === searchElement){
                return true
            }
        }
    }
    
    return false
}

console.log(newIncludes(things, "chuva", -3))

//indexOf
const newIndexOf = (array, elementoDePesquisa, pontoInicial = 0) => {

    if(pontoInicial >= 0){
        for(let i = pontoInicial; i < array.length; i++){
            if(array[i] === elementoDePesquisa){
                return i
            }
        }
    }
    if(pontoInicial < 0){
        for(let i = array.length + (pontoInicial); i < array.length; i++){
            if(array[i] === elementoDePesquisa){
                return i
            }
        }
    }
    
    return -1
}

console.log(newIndexOf(things, "chuva", -4))

//concat
let carros = ["fusca", "palio", "opala", "celta", "onix"]
const newConcat = (...valores) => {
    let argumentos = [...valores]

    let tamanhos = []

    for(let i = 0; i < argumentos.length; i++){
        if(Array.isArray(argumentos[i])){
            tamanhos.push(argumentos[i].length)
        }
    }

    let bigestArray = Math.max(...tamanhos)
    
    let newArray = []
    for(let i = 0; i < argumentos.length; i++){
        if(Array.isArray(argumentos[i])){
            for(let j = 0; j < bigestArray; j++){
                if(argumentos[i][j] !== undefined){
                    newArray.push(argumentos[i][j])
                }
            }
        } else{
            newArray.push(argumentos[i])
        }
    }

    return newArray
}

console.log(newConcat(things, banana, 1, carros, "batata", {cantora: "Aurora"}, "frita"))

//join
const newJoin = (array, separador = ",") =>{
    let newString = ""
    
    for(let i = 0; i < array.length; i++){
        if(i === array.length - 1){
            newString += `${array[i]}`
        } else if(array[i] === undefined || array[i] === null){
            newString += "" + separador
        } else{
            newString += `${array[i]}${separador}`
        }
    }
    
    if(!array.length){
        return ""
    }
    
    return newString
}


console.log(newJoin(carros))

//PARTE EXTRA

//slice
const newSlice = (array, inicio, fim) => {
    let subArray = []
    if(!inicio){
        for(let i = 0; i < array.length; i++){
            subArray.push(array[i])
        }
    } else if(inicio && fim === undefined || fim > array.length){
        if(inicio > 0){
            for(let i = inicio; i < array.length; i++){
                subArray.push(array[i])
            }
        } else{
            for(let i = array.length + (inicio); i < array.length; i++){
                subArray.push(array[i])
            }
        }
    } else{
        if(inicio > 0 && fim > 0){
            for(let i = inicio; i < fim; i++){
                subArray.push(array[i])
            }
        } else if(inicio > 0 && fim < 0){
            for(let i = inicio; i < array.length + (fim); i++){
                subArray.push(array[i])
            }
        } else if(inicio < 0 && fim > 0){
            for(let i = array.length + (inicio); i < fim; i++){
                subArray.push(array[i])
            }
        } else if(inicio < 0 && fim < 0){
            for(let i = array.length + (inicio); i < array.length + (fim); i++){
                subArray.push(array[i])
            }
        }
    }
   
    return subArray
}

console.log(newSlice(carros, -3, 5))
console.log(carros.slice(-3, 5))

//flat
const newFlat = (array, depth) => {

    let tamanhos = []

    for(let i = 0; i < array.length; i++){
        if(array[i] !== undefined){
            if(array[i].length !== undefined){
                for(let j = 0; j < array[i].length; j++){
                    tamanhos.push(array[i][j])
                }
            } else if(array[i].length === undefined){
                tamanhos.push(array[i])
            }
        }
    }
   return tamanhos
}

console.log(newFlat([1, 2, , [3, 4]]))

//flatMap
let theBest = ["One piece é", "o melhor", "anime"]
const callbackFlatMap = (currentValue, index, array) => {
    
    let gaurdaValor = []
    let stringNova = ""
    for(let i = 0; i < currentValue.length; i++){
        if(currentValue[i] !== " " && i !== (currentValue.length - 1)){
            stringNova += currentValue[i]
        } else if(currentValue[i] === " "){
            gaurdaValor.push(stringNova)
            stringNova = ""
        } else if(i === (currentValue.length - 1)){
            stringNova += currentValue[i]
            gaurdaValor.push(stringNova)
        }
    }
    
    return gaurdaValor
}

const newFlatMap = (array, callFlatMap) => {
    let arrayFlat = []

    for(let i = 0; i < array.length; i++){
        let recebeArray = callFlatMap(array[i], i, array)
        for(let j = 0; j < recebeArray.length; j++){
            arrayFlat.push(recebeArray[j])
        }
    }

    return arrayFlat
}

console.log(newFlatMap(theBest, callbackFlatMap))
console.log(theBest.flatMap(x => x.split(" ")))