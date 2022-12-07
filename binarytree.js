
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


    // remove () {
         
    // }

    breathFristSearch(){
        let currentNode = this.root;
        let list = [];
        let queue = [];
        //adding the first item to the quue
         queue.push(currentNode);
         while (queue.length > 0){
            currentNode = queue.shift()
            console.log(currentNode.value)
            list.push(currentNode.value)
            //going from our current node to our childrn node lelft tp right
            if (currentNode.left){
                queue.push(currentNode.left)
            }
            if (currentNode.right){
                queue.push(currentNode.right)
            }  
         }
         return list
        
    }  


    //breathFirstRecursive

    breathFristSearchRecursive(queue,list){
        if (!queue.length){
            return list;
        }
        let currentNode = queue.shift()
        list.push(currentNode.value)
        if (currentNode.left){
            queue.push(currentNode.left)
        }
        if (currentNode.right){
            queue.push(currentNode.right)
        } 

        return this.breathFristSearchRecursive(queue,list)


    }


    DFSInorder(){

        return traverseInOrder(this.root,[])





    }

    DFSPreOrder(){

        return traversePreOrder(this.root ,[])




    }
    DFSPostOrder(){
        return traversePostOrder(this.root ,[]) 


    }

}




function traverseInOrder (node, list){
    console.log(node.value)
    if (node.left){
        traverseInOrder(node.left, list) 
     }
     list.push(node.value)

     if (node.right){
        traverseInOrder(node.right, list)
     }

     return list
}



function traversePreOrder (node, list){
    // with preorder you push the parents first
    list.push(node.value)
    console.log(node.value)
    if (node.left){
        traversePreOrder(node.left, list) 
     }
     if (node.right){
        traversePreOrder(node.right, list)
     }

     return list
}



function traversePostOrder (node, list){
    // post oder will have the list push at the end
   
    console.log(node.value)
    if (node.left){
        traversePostOrder(node.left, list) 
     }
     if (node.right){
        traversePostOrder(node.right, list)
     }
     list.push(node.value)

     return list
}




   let binaryTreeNew = new binaryTree()
   binaryTreeNew.insert(9);
   binaryTreeNew.insert(4);
   binaryTreeNew.insert(6);
   binaryTreeNew.insert(20);
   binaryTreeNew.insert(170);
   binaryTreeNew.insert(15);
   binaryTreeNew.insert(1);
   let tree = binaryTreeNew.DFSInorder()
   let preOrder = binaryTreeNew.DFSPreOrder()
   let post = binaryTreeNew.DFSPostOrder()
   

   
   

//we only use this.key word in classes and we intanciated that class which will now be (binaryTreeNew) hence the argumrnt this.root becomes
// (binaryTreeNew.root) also we passed the list and queue as a parameter in the method above and passed the values are arugment becasue it
//it is a recursive function 
//    console.log(binaryTreeNew.breathFristSearchRecursive([binaryTreeNew.root],[]))


    console.log(post)