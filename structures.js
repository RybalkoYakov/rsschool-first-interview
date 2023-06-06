var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var ListNode = /** @class */ (function () {
    function ListNode(data) {
        this.next = null;
        this.data = data;
    }
    return ListNode;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.rootNode = null;
    }
    LinkedList.prototype.getListTail = function (node, value) {
        if (value === void 0) { value = null; }
        if (!node)
            return null;
        if (node.next === null) {
            return node;
        }
        if (value && node.data === value)
            return node;
        return this.getListTail(node.next);
    };
    LinkedList.prototype.add = function (value) {
        var node = new ListNode(value);
        if (this.rootNode === null)
            this.rootNode = node;
        else if (this.getListTail(this.rootNode, value)) {
            this.getListTail(this.rootNode, value).next = node;
        }
    };
    LinkedList.prototype.has = function (value) {
        if (this.rootNode === null)
            return false;
        var currentNode = this.rootNode;
        while (currentNode) {
            if (currentNode.data === value)
                return true;
            currentNode = currentNode.next;
        }
        return false;
    };
    return LinkedList;
}());
var Stack = /** @class */ (function () {
    function Stack(arr) {
        this.stack = [];
        this.stack = __spreadArray(__spreadArray([], this.stack, true), arr, true);
    }
    Stack.prototype.push = function (value) {
        this.stack[this.stack.length] = value;
        return this.stack.length;
    };
    Stack.prototype.pop = function () {
        var element = this.stack[this.stack.length - 1];
        this.stack.length = this.stack.length - 1;
        return element;
    };
    return Stack;
}());
var Queue = /** @class */ (function () {
    function Queue() {
        this.queue = [];
    }
    Queue.prototype.enqueue = function (value) {
        this.queue[this.queue.length] = value;
    };
    Queue.prototype.dequeue = function () {
        var element = this.queue[0];
        this.queue = this.queue.filter(function (value, index) { return index !== 0; });
        return element;
    };
    return Queue;
}());
var l = new LinkedList();
l.add(1);
l.add(2);
l.add(3);
console.log(l.rootNode);
