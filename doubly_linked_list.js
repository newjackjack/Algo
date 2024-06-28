/* 
TODO: Create the DLLNode class and implement the DoublyLinkedList constructor
and the empty methods below the constructor.
*/

/**
 * A class to represent a doubly linked list and contain all of it's methods.
 * A doubly linked list is a singly linked list that can be traversed in both
 * directions.
 */
// Remember that DoublyLinkedList and Node are two different classes.
// Check any of the week 1 algorithm for more hints

class DLLNode {
    //a node class that has two pointer .next and .prev
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    /**
     * Executed when the new keyword is used to construct a new DoublyLInkedList
     * instance that inherits these methods and properties.
     */
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // TODO: implement the constructor.

    /**
     * Creates a new node and adds it at the front of this list.
     * - Time: O(?).
     * - Space: O(?).
     * @param {any} data The data for the new node.
     * @returns {DoublyLinkedList} This list.
     */
    insertAtFront(data) {
        //create a new node
        const newNode = new DLLNode(data);
        //edge case: check if the Doubly-linked list is empty
        if (this.isEmpty()) {
            // Edge case: 
            //if it is an empty List => this.head and this.tail are pointing to the newNode
            this.head = newNode;
            this.tail = newNode;
        } else {
            //if the DLL is not empty => newNode.next needs to point to the head of the list
            newNode.next = this.head;
            //the head.prev pointer will point to the new node;
            this.head.prev = newNode;
            //reassign the head to newNode
            this.head = newNode;
        }
        return this;
    }

    /**
     * Creates a new node and adds it at the back of this list.
     * - Time: O(?).
     * - Space: O(?).
     * @param {any} data The data for the new node.
     * @returns {DoublyLinkedList} This list.
     */
    // The logic for insertAtFront looks good
    // And have some annotation and see how all the pointers move
    insertAtBack(data) {
        //create a new node
        const newNode = new DLLNode(data);
        //check if the DLL is empty 
        //if it's empty => DLL's head and tail will point to newNode
        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            //if DLL is not empty =>
            //it already has a node => make the tail's .next point to newNode
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        return this;
    }
    // EXTRA
    /**
     * Removes the middle node in this list.
     * - Time: O(?).
     * - Space: O(?).
     * @returns {any} The data of the removed node.
     */
    removeMiddleNode() {
        if (this.isEmpty()) return null;
        let slow = this.head;
        let fast = this.head;
        //Use two pointers that travel in different speed to find the middle of the list
        while (fast !== null && fast.next !== null) {
            //first loop condition make sure it's not at the end of list
            //second loop condition make sure there is at least one more node ahead of next and avoid .next get to null and
            //cause runtime error.
            slow = slow.next;
            fast = fast.next.next;
        }

        const data = slow.data;
        // slow is now pointing to the middle node
        // make slow.prev.next points to slow.next
        if (slow.prev !== null) slow.prev.next = slow.next;
        // make slow.next.prev points to slow.prev
        if (slow.next !== null) slow.next.prev = slow.prev;

        return data;
    }

    // removeMiddleNode2() {
    //     if (this.isEmpty()) {
    //         return null;
    //     }
    //     let forwardRunner = this.head;
    //     let backwardRunner = this.tail;
    //     // edge case for 1 node & 2 nodes
    //     while (
    //         forwardRunner !== backwardRunner ||
    //         forwardRunner.next !== backwardRunner
    //     ) {
    //         forwardRunner = forwardRunner.next;
    //         backwardRunner = backwardRunner.prev;
    //     }

    //     const data = forwardRunner.data;
    //     if (forwardRunner.prev !== null)
    //         forwardRunner.prev.next = forwardRunner.next;
    //     if (forwardRunner.next !== null)
    //         forwardRunner.next.prev = forwardRunner.prev;

    //     return data;
    // }

    /**
     * Determines if this list is empty.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {boolean} Indicates if this list is empty.
     */
    isEmpty() {
        return this.head === null;
    }

    /**
     * Converts this list to an array of the node's data.
     * - Time: O(n) linear, n = list length.
     * - Space: O(n) linear, array grows as list length increases.
     * @returns {Array<any>} All the data of the nodes.
     */
    toArray() {
        const vals = [];
        let runner = this.head;

        while (runner) {
            vals.push(runner.data);
            runner = runner.next;
        }
        return vals;
    }

    /**
     * Adds all the given items to the back of this list.
     * @param {Array<any>} items Items to be added to the back of this list.
     * @returns {DoublyLinkedList} This list.
     */
    insertAtBackMany(items = []) {
        items.forEach((item) => this.insertAtBack(item));
        return this;
    }
}

const emptyList = new DoublyLinkedList();
const list1 = new DoublyLinkedList();
// list1.insertAtBackMany([5, 8, 13, 14]);
// console.log(list1.toArray());
console.log(list1.insertAtFront(10));
console.log(list1.insertAtFront(9));
