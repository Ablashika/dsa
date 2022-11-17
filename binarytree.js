
        class Node {
        constructor(value){
        this.left = null;
        this.right = null;
        this.value = value;
    }
}


class binaryTree{
       constructor(value){
        this.root = null;
       
    }


    insert(value){
          const newNode = new Node(value);
          if (this.root === null){
            this.root = newNode;
        } else{

            let currentNode = this.root;
            while(true){
                if (value < currentNode.value){

                    //left 

                    if (!currentNode.left){
                        currentNode.left = newNode;
                        return this
                    }

                    currentNode = currentNode.left
            

                } else {
                    //right 
                    if (!currentNode.right){
                        currentNode.right = newNode;
                        return this
                    }

                    currentNode = currentNode.right
                    
                }
            }
        }
    }

    lookUp(value){
         
        if (!this.root) {
            return false;
        } 

            let currentNode = this.root;
            while (currentNode){
                if (value < currentNode.value) {
                       currentNode = currentNode.left;
                } else if (value > currentNode.value) {

                    currentNode = currentNode.right;
                } else if (currentNode.value === value) {
                        return currentNode; 

                }

          
             }

             return false;
        
    }


    remove () {
         
    }



   




}


   let binaryTreeNew = new binaryTree()
   binaryTreeNew.insert(90);
   binaryTreeNew.insert(70);
   binaryTreeNew.insert(60);
   binaryTreeNew.insert(100);

   
   
   console.log(binaryTreeNew.lookUp(90))


//     console.log(binaryTreeNew)