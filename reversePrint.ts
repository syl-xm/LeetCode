/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */

const reversePrint1 = function(head) {
    if (!head) return [];
    if (!head.next) return [head.val];

    let cur = head;
    let pre = null;

    while(cur !== null) {
        let tmp = cur.next;
        cur.next = pre;
        pre = cur;
        cur = tmp
    } 

    const result = [];
    while(pre !== null) {
        result.push(pre.val)
        pre = pre.next;
    }

    return result;

} 
var reversePrint = function(head) {

    let cur = head;
    const stack = [];

    while(cur !== null) {
        stack.push(cur.val)
        cur = cur.next
    }

    const len = stack.length;
    const print = []
    for (let i = 0; i < len; i ++) {
        print.push(stack.pop())
    }
    return print 
};

