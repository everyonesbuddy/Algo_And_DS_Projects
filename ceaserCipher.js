// One of the simplest and most widely known cipher is a caesar cipher, also know as shift cipher. in a shift the meaning of the letters are shifted by some set amount.


//freeCodeCamp solution
function rot13(str) {
    // Split str into a character array
    return (
    str
        .split("")
        // Iterate over each character in the array
        .map.call(str, function(char) {
          // Convert char to a character code
        var x = char.charCodeAt(0);
          // Checks if character lies between A-Z
        if (x < 65 || x > 90) {
            return String.fromCharCode(x); // Return un-converted character
        }
          //N = ASCII 78, if the character code is less than 78, shift forward 13 places
        else if (x < 78) {
            return String.fromCharCode(x + 13);
        }
          // Otherwise shift the character 13 places backward
        return String.fromCharCode(x - 13);
        })
        .join("")
    ); // Rejoin the array into a string
}

rot13("SERR PBQR PNZC");