function addList(node1, node2) {
	var sum;
	var rem = 0;
	var result = new Node(0, null);

	if (!node1 || !node2) {
		throw new Error("empty lists");
	}
	while (node1 && node2) {
		sum = node1.val + node2.val;
		/* digit that gets carried over */
		result.val = (sum + rem) % 10;
		/* store tens digit that gets carried over
		 * 0 if nothing carried over
		 */
		rem = Math.floor((sum + rem)/10);			
		result.next = new Node(0, null);
		result = result.next;
		node1 = node1.next;
		node2 = node2.next;
	}
	var larger = node1 ? node1 : node2;
	while (larger) {
		result.val = larger.val + rem;
		result.next = new
	}

		
		
		
