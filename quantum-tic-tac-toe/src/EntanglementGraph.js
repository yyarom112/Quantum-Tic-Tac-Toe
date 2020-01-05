class Vertex {
    constructor(id) {
        this.id = id;
        this.edges = [];
    }
}

class Edge {
    constructor(ID, ver1, ver2) {
        this.ID = ID;
        this.from = ver1;
        this.to = ver2;
        this.reverse = undefined;
    }
    reverse() {
        if (this.reverse === undefined)
            this.reverse = new Edge(ID, this.to, this.from);
        return this.reverse;
    }
}





export class Graph {

    constructor() {
        this.vertices = {};
        this.adjList = {};
    }

    addEdge(ID, fromID, toID) {
        if (!(fromID in this.vertices) || !(toID in this.vertices))
            throw "Add edge fail- one or more vertices aren't exist";


        var edge = new Edge(ID, this.getVertex(fromID), this.getVertex(toID));

        this.getVertex(fromID).edges.push(edge);
        this.getVertex(toID).edges.push(edge.reverse());
        this.edges[key] = edge;
    }

    getNextVertexID(id) {
        i = 0;
        while (i < this.vertex.length) {
            if (!hasVertex(i))
                return i;
        }
        return this.vertex.length;
    }
    addVertex(id) {
        this.vertices[id] = new Vertex(id)
    }
    getVertex(id) {
        return this.vertices[id];
    }

    hasVertex(id) {
        return id in this.vertices;
    }

    hasCycle(verID) {
        output = new Set();
        if (this.vertices.length < 2)
            return output;
        output.push(this.getVertex(verID));
        return getCycle(this.getVertex(verID), output, []);
    }

    getCycle(from, explored, edges) {
        output = new Set();
        for (let i = 0; i < from.edges.length; i++) {
            //if there close of cycle
            if (explored.has(from.edges[i].to)) {
                cycle = [...edges];
                cycle.push(from.edges[i])
                output.push(cycle);
            } else {
                //the edege isn't close cycle
                var newExplored = new Set(explored);
                newExplored.push(from.edges[i].to);
                path = [...edges];
                path.push(from.edges[i]);
                output.push(getCycle(from.edges[i].to, newExplored, path));
            }
        }
        return output;
    }


}
