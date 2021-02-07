/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

function getNext(str) {
    const next = [0];
    let pos = 0;

    for (let i = 1; i < str.length;) {
        if (str[pos] === str[i]) {
            pos ++;
            next[i] = pos;
            i ++
        } else if(pos > 0){
            pos = next[pos - 1] 
        } else {
            next[i] = 0;
            i ++;
        }
    }

    console.log(next)
    return next;
}

var strStr = function(haystack, needle) {
    if (!needle) return 0;
    if (!haystack || (needle.length > haystack.length)) return -1;

    const next = getNext(needle);
    const len = haystack.length;

    let index = 0;
    let pos = 0;

    for (let i = 0; i < len;) {
        if (needle[pos] === haystack[i]) {
            if (pos === needle.length - 1) {
                index = i - pos;
                break;
            }
            pos ++;
            i ++;
        } else {
            index = -1;
            if (pos > 0) {
                pos = next[pos - 1];
            } else {
                i ++;
            }
        }
    }

    console.log(index)
    return index;
};
strStr("aabaaabaaac", "aabaaac");
strStr("adcadcaddcadde", "adcadde");