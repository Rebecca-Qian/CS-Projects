function removeDup(xs) {
	var buf = { },
	    temp = xs;

	if (xs == null) {
		throw new Error("Invalid node; node cannot equal null.");
	}

	if (temp.next == null) {
		return xs;
	}

	buf[temp.val] = true;
	while (temp.next !== null) {
		var value = temp.next.val;
		if (!buf[value]) { 
			buf[value] = true;
			temp = temp.next; 
		} else {
			//delete next node
			//check if temp.next is the last node
			if (!temp.next.next) {
				temp.next = null;
			} else {
				//skip over next node
				temp.next = temp.next.next;
			}
		}
	}

	return xs;
}

function Node(val, next) {
	this.val = val;
	this.next = next;
}

var node1 = new Node(2, null);

var node2 = new Node(2, node1);

var node3 = new Node(3, node2);

removeDup(node3);
console.log(node3);

