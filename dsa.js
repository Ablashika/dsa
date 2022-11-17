

    class Node {
      constructor(value) {
        this.value = value;
        this.next = null;
      }
    }
    class LinkedList {
      constructor(value) {
        this.head = {
          value: value,
          next: null,
        };
        (this.tail = this.head), (this.length = 1);
      }

      append(value) {
        const newNode = new Node(value);

        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;

        // this.LinkedList;
      }

      prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;

        // this.head.next = newNode;
        // this.head = newNode;
        this.length++;
        return this;
      }
      printList() {
        const array = [];
        let currentNode = this.head;
        while (currentNode !== null) {
          array.push(currentNode.value);
          currentNode = currentNode.next;
        }
        return array;
      }

      insert(index, value) {
        if (index >= this.length) {
          return this.append(value);
        }

        const newNode = new Node(value);
        const leader = this.traverseToIndex(index - 1);
        const holdingPointer = leader.next;
        leader.next = newNode;
        newNode.next = holdingPointer;
        this.length++;
        return this.printList();
      }

      traverseToIndex(index) {
        let counter = 0;
        let currentNode = this.head;
        while (counter !== index) {
          currentNode = currentNode.next;
          counter++;
        }

        return currentNode;
      }

      delete(index) {
        // const newNode = new Node(value);
        const leader = this.traverseToIndex(index - 1);
        const unwantedNode = leader.next;
        leader.next = unwantedNode.next;
        console.log(unwantedNode.next);
        this.length--;
        return this.printList();
      }
    }

    const myLinkedList = new LinkedList(10);
    myLinkedList.append(15);
    myLinkedList.append(25);
    myLinkedList.prepend(6);
    // myLinkedList.printList();

    console.log(myLinkedList.insert(2, 50));
    console.log(myLinkedList.delete(2));

    // function reCurr(input) {
    // 	for (let i = 0; i<input.length; i++) {
    // 		input[i]

    // 		for (var j = i + 1; j < input.length; j++) {
    // 			(input[j])

    // 			if (input[i] === input[j]){
    // 				console.log(input[i])
    // 			}
    // 		}

    // 	}
    // }

    // reCurr([1,3,3,5,6,6,9,3,0])

    // function reCurr (input) {
    // 	let map = {}

    // 	for (var i = 0;  i < input.length; i++) {
    // 		// console.log(input[i])
    // 		 // return input[i]

    // 		    // let map[]	== map[input[i]]
    //                    console.log(map[input[i]] = i)
    //                    console.log(map)
    //                   console.log(map[i])
    // 		}

    // }

    // reCurr([1,3,3,35,9,1])

    // let arAy = {name:1, same:2,same:2,same:5}
    // console.log(arAy)