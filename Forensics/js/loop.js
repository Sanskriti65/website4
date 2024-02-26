/**
 * @param {number} x
 * @return {boolean}
 */
// var isPalindrome = function(x) {
//     let b=x;
//     console.log(x);
//     if(x===0){
//         return true;
//     }
//     else if(x<=0 || isNaN(x)){
//         return false;
//     } else {
//         let r,reverse=0;
//         while(b!=0){
//             r=b%10;
//             b=Math.floor(b/10);
//             console.log(b);
//             reverse=reverse*10+r;
//         }
//         console.log(reverse);
//         if(reverse===x){
//             return true;
//         } else{
//             return false;
//         }
//     }
// }


var romanToInt = function(s) {
    let roman = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    let r=0;
    for (i=0;i<s.length;i++){
        // agr current character is smaller than the next , we subtract instead of adding to result
        if (i+1 < s.length && roman[s[i]] < roman[s[i + 1]]) {
            r += roman[s[i + 1]] - roman[s[i]];
            i++;
        }   else {
            r += roman[s[i]];
        }
    }
    return r;
};