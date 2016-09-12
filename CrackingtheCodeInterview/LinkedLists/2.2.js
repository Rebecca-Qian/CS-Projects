// Return the kth to last element from a singly linked list

function return_k (xs, k) {
	var temp1 = xs;
	var temp2 = xs;
	for (var i = 0; i < k - 1; i++) {
		if (!temp1) {
			throw new Error("kth value is out of bounds");
		}
		temp1 = temp1.next;
	}

	while (temp1.next != null) {
		temp1 = temp1.next;
		temp2 = temp2.next;
	}
	return temp2;
}

function Node(val, next) {
	return {
		val: val,
		next: next
	}
}

var node1 = new Node(4, null);

var node2 = new Node(3, node1);

var node3 = new Node(2, node2);

var node4 = new Node(1, node3);

console.log(return_k(node4, 1));
console.log(return_k(node4, 4));
//console.log(return_k(node1, 10));
