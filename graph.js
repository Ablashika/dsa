class Graph {
    constructor(){
        this.numberOfNodes = 0;
        this.adjacentList = {
             
        }
    }

    addVertex (node){
        this.adjacentList[node] = [];
        this.numberOfNodes++;


    }

    addEdge(node1,node2){
        //undirected graph
        this.adjacentList[node1].push(node2)
        this.adjacentList[node2].push(node1)

    }
}



const newGraph = new Graph();

   newGraph.addVertex('0')
   newGraph.addVertex('1')
   newGraph.addVertex('2')
   newGraph.addVertex('3')
   newGraph.addVertex('4')
   newGraph.addVertex('5')
   newGraph.addVertex('6')
   newGraph.addEdge('0' ,'1')
   newGraph.addEdge('0' ,'2')
   newGraph.addEdge('1','3')
   newGraph.addEdge('1','2')
   newGraph.addEdge('2','4')
   newGraph.addEdge('3','4')
   newGraph.addEdge('4','5')
   newGraph.addEdge('5','6')

   console.log(newGraph)

