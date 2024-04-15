function isPalindrome(str){
    str = str.toLowerCase().replaceAll(' ', '')
    let reverseFrase = ''

    for (let i = str.length -1; i >= 0; i--) {
        reverseFrase += str[i]
    }
    
    if (str === reverseFrase) {
        return true
    } else {
        return false
    }
}

function arrayMaxMin(arr){
    let min = Number.MAX_VALUE
    let max = Number.MIN_VALUE

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i]
        } 
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    const result = [min, max]
    return result
}
