"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TreeNode {
    value;
    left;
    right;
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BinaryTree {
    root;
    constructor() {
        this.root = null;
    }
    insert(value) {
        this.root = this.insertNode(this.root, value);
    }
    insertNode(node, value) {
        if (node === null) {
            return new TreeNode(value);
        }
        if (value < node.value) {
            node.left = this.insertNode(node.left, value);
        }
        else if (value > node.value) {
            node.right = this.insertNode(node.right, value);
        }
        return node;
    }
    search(value) {
        return this.searchNode(this.root, value);
    }
    searchNode(node, value) {
        if (node === null) {
            return false;
        }
        if (value === node.value) {
            return true;
        }
        if (value < node.value) {
            return this.searchNode(node.left, value);
        }
        return this.searchNode(node.right, value);
    }
    delete(value) {
        this.root = this.deleteNode(this.root, value);
    }
    deleteNode(node, value) {
        if (node === null) {
            return null;
        }
        if (value < node.value) {
            node.left = this.deleteNode(node.left, value);
            return node;
        }
        if (value > node.value) {
            node.right = this.deleteNode(node.right, value);
            return node;
        }
        if (node.left === null && node.right === null) {
            return null;
        }
        if (node.left === null) {
            return node.right;
        }
        if (node.right === null) {
            return node.left;
        }
        const minValue = this.findMin(node.right);
        node.value = minValue;
        node.right = this.deleteNode(node.right, minValue);
        return node;
    }
    findMin(node) {
        let current = node;
        while (current.left !== null) {
            current = current.left;
        }
        return current.value;
    }
    update(oldValue, newValue) {
        if (!this.search(oldValue)) {
            return false;
        }
        if (oldValue !== newValue && this.search(newValue)) {
            return false;
        }
        this.delete(oldValue);
        this.insert(newValue);
        return true;
    }
    height() {
        return this.getHeight(this.root);
    }
    getHeight(node) {
        if (node === null) {
            return 0;
        }
        const leftHeight = this.getHeight(node.left);
        const rightHeight = this.getHeight(node.right);
        return Math.max(leftHeight, rightHeight) + 1;
    }
    inOrder() {
        const result = [];
        this.inOrderTraversal(this.root, result);
        return result;
    }
    inOrderTraversal(node, result) {
        if (node === null) {
            return;
        }
        this.inOrderTraversal(node.left, result);
        result.push(node.value);
        this.inOrderTraversal(node.right, result);
    }
}
const tree = new BinaryTree();
tree.insert(8);
tree.insert(3);
tree.insert(10);
tree.insert(1);
tree.insert(6);
tree.insert(14);
tree.insert(4);
tree.insert(7);
tree.insert(13);
console.log("Дерево (inOrder):", tree.inOrder());
console.log("Поиск 7:", tree.search(7));
console.log("Поиск 2:", tree.search(2));
console.log("Высота дерева:", tree.height());
console.log("Обновление 6 -> 5:", tree.update(6, 5));
console.log("После обновления:", tree.inOrder());
tree.delete(10);
console.log("После удаления 10:", tree.inOrder());
console.log("Высота дерева после удаления:", tree.height());
