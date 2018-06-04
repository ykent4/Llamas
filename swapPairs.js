function swapPairs(head) {

    if(!head) {
        return null;
    }

    if(!head.next) {
        return head;
    }

    var next = head.next;
    var result = next;
    var prevTail, curHead, nextHead;

    curHead = head;

    while(next) {
        nextHead = next.next;
        if(prevTail) {
            prevTail.next = next;
        }
        
        next.next = curHead;
        curHead.next = nextHead;
        prevTail = curHead;
        curHead = nextHead

        next = curHead && curHead.next;
    }

    return result;

}