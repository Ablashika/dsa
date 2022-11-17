//stack

/*

class Node {
    constructor(value){
      this.value = value;
      this.next = null;
    }
}


class Stack {

    constructor(){
        this.top = null;
        this.buttom = null;
        this.length = 0;
    }

    peeK(){
      
        return this.top
        
    }
    push(value){

        const newNode = new Node(value);
        if (this.length ===  0) {
            this.top = newNode;
            this.buttom = newNode;
        } 

           else 
           {

            const holdingPointer = this.top;
            this.top = newNode;
            this.top.next = holdingPointer;
           }

        this.length++;
        return this;
            
        }
    pop(){

        if (this.top === this.buttom){
            this.buttom = null
        }

        this.top = this.top.next;
        this.length--;
        return this

    }
}


let myStack = new Stack();
myStack.push("google")
myStack.push("udemy")
myStack.pop()
myStack.pop()

console.log(myStack)
*/



//queue
// class Node {
//     constructor(value){
//       this.value = value;
//       this.next = value;
//     }
// }

// class Queue {
//    constructor (){
//     this.first = null;
//     this.last = null;
//     this.length = 0;
//    }

//    peek (){
//     return this.first
//    }

//    enqueue(value){

//     let newNode = new Node(value);
//     if (this.length == 0){
//        this.first = newNode;
//        this.last = newNode;

//     }
//     else {
//         this.last.next = newNode;
//         this.last = newNode;
         
        
        
//     }


   
//     this.length++;
//     return this;

//   }

//   dequeue(){
    // if(length === 0){
    //     return  null
    // }

    // if (this.first === this.last ){
        
    //     this.first = null;
    //     this.first.next = null

    // }

//     this.first = this.first.next;
//     this.length--;
//     return this
//   }



// }

// const myQueue = new Queue()
// myQueue.enqueue(50)
// myQueue.enqueue(90)
// myQueue.enqueue(1000)
// myQueue.dequeue()
// myQueue.dequeue()
//  myQueue.dequeue()

// console.log(myQueue)




        //implement queues using stack



class Node {
    constructor(value){
      this.value = value;
      this.next = null;
    }
}


class Stack {

    constructor(){
        this.top = null;
        this.buttom = null;
        this.length = 0;
    }

    peeK(){
      
        return this.top
        
    }
    push(value){

        const newNode = new Node(value);
        if (this.length ===  0) {
            this.top = newNode;
            this.buttom = newNode;
        } 

           else 
           {

            const holdingPointer = this.buttom;
            this.buttom = newNode;
            this.buttom.next = holdingPointer;
           }

        this.length++;
        return this;
            
        }
    // pop(){

    //     if (this.top === this.buttom){
    //         this.buttom = null
    //     }

    //     this.top = this.top.next;
    //     this.length--;
    //     return this

    // }
}


let myStack = new Stack();
myStack.push("google")
myStack.push("googled")


console.log(myStack)






       