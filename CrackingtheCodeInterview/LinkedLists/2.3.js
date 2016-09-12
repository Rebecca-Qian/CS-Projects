
//function deleteNode (node) {
//	console.log(node);
//	node = node.next;
//	console.log(node);
//}

function deleteNode (node) {
	node.val = node.next.val;
	node.next = node.next.next;
//	node.val = node.next.val;	
	console.log(node);
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

//console.log(node4);
deleteNode(node3);
console.log(node4);
