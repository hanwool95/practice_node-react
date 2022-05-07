class MaxHeap {
  constructor() {
      this.heap = [null];
  }

  push(value) {
      this.heap.push(value);
      let currentIndex = this.heap.length - 1;
      let parentIndex = Math.floor(currentIndex / 2);

      while (parentIndex !== 0 && this.heap[parentIndex] < value) {
          const temp = this.heap[parentIndex];
          this.heap[parentIndex] = value;
          this.heap[currentIndex] = temp;

          currentIndex = parentIndex;
          parentIndex = Math.floor(currentIndex / 2);
      }
  }

  pop() {
      if (this.heap.length === 2) return this.heap.pop(); // 루트 정점만 남은 경우

      const returnValue = this.heap[1];
      this.heap[1] = this.heap.pop();

      let currentIndex  = 1;
      let leftIndex = 2;
      let rightIndex = 3;
      while (this.heap[currentIndex] < this.heap[leftIndex] ||
             this.heap[currentIndex] < this.heap[rightIndex]) {
          if (this.heap[leftIndex] < this.heap[rightIndex]) {
              const temp = this.heap[currentIndex];
              this.heap[currentIndex] = this.heap[rightIndex];
              this.heap[rightIndex] = temp;
              currentIndex = rightIndex;
          } else {
              const temp = this.heap[currentIndex];
              this.heap[currentIndex] = this.heap[leftIndex];
              this.heap[leftIndex] = temp;
              currentIndex = leftIndex;
          }
          leftIndex = currentIndex * 2;
          rightIndex = currentIndex * 2 + 1;
      }

      return returnValue;
  }
}

function solution(no, works) {

    if (works.reduce((a, b) => a + b) <= no){
        return 0;
    }

    mxHeap = new MaxHeap();

    works
        .forEach((work) => {
        mxHeap.push(work)
    })

    while ( no !== 0) {
        mxHeap.push(mxHeap.pop()-1);
        no -= 1;
    }

    let result = 0;
    console.log(mxHeap.heap);
    mxHeap.heap
        .forEach((work) => {
            result += work**2;
        })



    console.log(result)
    return result;
}



solution(4, [4,3,3]);	//12
solution(2, [3,3,3]);	//17