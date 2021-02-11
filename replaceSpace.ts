/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function(s) {
    let s1 = ''
    for(let i = 0; i < s.length; i ++) {
        if (s[i].charCodeAt() == 32) {
            s1 += '%20' 
        } else {
            s1 += s[i]
        }
    }
    console.log('s1', s1)
    return s1
};
replaceSpace(`"We are happy."`)