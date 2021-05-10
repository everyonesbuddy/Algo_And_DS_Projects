// return true if the given string is a palindrome. otherwise return false

//my solution
function palindrome(str){
    let strArr = str.split("");
    strArr.reverse();
    let str2 = strArr.join("")

    if(str === str2){
        return true
    } else {
        return false
    }
}

//freeCodeCamp solution
function palindrome(str){
    return (
        str.replace(/[\W_]/g, "").toLowerCase() ===    
            str
            .replace(/[\W_]/g, "")
            .toLowerCase()
            .split("")
            .reverse()
            .join("")
    )
}


console.log(palindrome("eye"))