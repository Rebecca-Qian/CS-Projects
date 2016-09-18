/*function sortList(xs, x) {
	var lessThan = new createNode(0, null);
	var greaterThan = new createNode(0, null);
	var temp = xs;
	
	while (temp) {
		if (temp.val < x) {
			lessThan.val = temp.val;
			lessThan.next = new createNode(0, null);
			lessThan = lessThan.next;	
		} else {
			greaterThan.val = temp.val;
			greaterThan.next = new createNode(0, null);
		}
	
	lessThan.val = x;
	lessThan.next = greaterThan	
	
}*/

/* Assumes that x exists in the list already */

function sortList (xs, x) {
	var temp = xs;
	var less, greater, eq, less_head, greater_head;
	
	while (temp != null) {
		if (temp.val < x) {
			/* if less hasn't been assigned yet, assign to node */
			if (!less) {
				less = temp;
				less_head = less;
			} else {
				less.next = temp;
				less = temp;
			}
		} else if (temp.val > x) {
			if (!greater) {
				greater = temp;
				greater_head = temp;
			} else {
				greater.next = temp;
				greater = greater.next;
			}
		} else if (temp.val === x) {
			eq = temp;
		}
		temp = temp.next;
	}

	less.next = eq;
	eq.next = greater_head;
	greater.next = null;

	console.log(less_head.val);
	return less_head;
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

var node5 = new Node(5, node4);

var node6 = new Node(6, node5);

var result = sortList(node6, 3);
console.log(result.val, result.next.val, result.next.next.val, result.next.next.next.val, result.next.next.next.next.val, result.next.next.next.next.next.val);

			
