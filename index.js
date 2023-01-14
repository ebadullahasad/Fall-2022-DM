    function myFunction(){
    document.write()
    var V = 4;
	function transitiveClosure(graph) {
		var reach = Array.from(Array(V), () => new Array(V));
		var i, j, k;

		for (i = 0; i < V; i++)
		for (j = 0; j < V; j++) reach[i][j] = graph[i][j];

		for (k = 0; k < V; k++) {
		for (i = 0; i < V; i++) {
			for (j = 0; j < V; j++) {
			reach[i][j] =
				reach[i][j] != 0 || (reach[i][k] != 0 && reach[k][j] != 0)
				? 1
				: 0;
			}
		}
		}

		printSolution(reach);
	}

	function printSolution(reach) {
		document.write(
		"Following matrix is transitive" + " closure of the given graph <br><br>"
		);
		for (var i = 0; i < V; i++) {
		for (var j = 0; j < V; j++) {
			if (i == j) document.write("1 ");
			else document.write(reach[i][j] + " ");
		}
		document.write("<br>");
		}
	}


	var graph = [
		[1, 1, 0, 1],
		[0, 1, 1, 0],
		[0, 0, 1, 1],
		[0, 0, 0, 1],
	];
	transitiveClosure(graph);
}