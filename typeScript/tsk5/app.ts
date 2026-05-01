class TreeNode {
    value: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(value: number) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    private root: TreeNode | null;
    constructor() {
        this.root = null;
    }
    insert(value: number): void {
        this.root = this.insertNode(this.root, value);
    }
    private insertNode(node: TreeNode | null, value: number): TreeNode {
        if (node === null) {
            return new TreeNode(value);
        }
        if (value < node.value) {
            node.left = this.insertNode(node.left, value);
        } else if (value > node.value) {
            node.right = this.insertNode(node.right, value);
        }
        return node;
    }
    search(value: number): boolean {
        return this.searchNode(this.root, value);
    }
    private searchNode(node: TreeNode | null, value: number): boolean {
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
    delete(value: number): void {
        this.root = this.deleteNode(this.root, value);
    }
    private deleteNode(node: TreeNode | null, value: number): TreeNode | null {
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
        const minValue: number = this.findMin(node.right);
        node.value = minValue;
        node.right = this.deleteNode(node.right, minValue);
        return node;
    }
    private findMin(node: TreeNode): number {
        let current: TreeNode = node;
        while (current.left !== null) {
            current = current.left;
        }
        return current.value;
    }
    update(oldValue: number, newValue: number): boolean {
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
    height(): number {
        return this.getHeight(this.root);
    }
    private getHeight(node: TreeNode | null): number {
        if (node === null) {
            return 0;
        }
        const leftHeight: number = this.getHeight(node.left);
        const rightHeight: number = this.getHeight(node.right);
        return Math.max(leftHeight, rightHeight) + 1;
    }

    inOrder(): number[] {
        const result: number[] = [];
        this.inOrderTraversal(this.root, result);
        return result;
    }

    private inOrderTraversal(node: TreeNode | null, result: number[]): void {
        if (node === null) {
            return;
        }
        this.inOrderTraversal(node.left, result);
        result.push(node.value);
        this.inOrderTraversal(node.right, result);
    }
}

const tree: BinaryTree = new BinaryTree();

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

export {};