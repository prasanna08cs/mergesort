// Split the array into halves and merge them recursively
function mergeSort(array) {
  if (array.length === 1) {0
    // Return once we hit an array with a single item
    return array
  }

  // Get the middle item of the array rounded down by creating a variable
  const middle = Math.floor(array.length / 2)
  // Create a variable for the items on the left side
  const left = array.slice(0, middle)
  // Create a variable for the items on the right side
  const right = array.slice(middle)
 console.log(' %%%%%%% out side fucntiom begin');
   console.log('left array'+ left);
  console.log('right array'+right);
  console.log('%%%%%%%%%% out side fucntiom end');
  let r = merge(
    mergeSort(left),
    mergeSort(right)
  );
  console.log('result'+r);
  return r;
}

// Compare the arrays item by item and return the concatenated result
function merge (left, right) {
  

let a=left;
let b =right;

let c =[...a,...b];
console.log(c);

for (let i=0;i<c.length;i++){
    
  for(j=0;j<c.length;j++){

      if(c[j]>c[j+1]){
    let t= c[j];
    let m =c[j+1];
    c[j]=c[j+1];
    c[j+1] =t;
      }
  }
}

console.log(c);
  return c;
}

const arrayOfNumbers = [1,-9,100,2,0,8,-8]
console.log('final sorted array'+mergeSort(arrayOfNumbers)) // [1, 2, 2, 3, 3, 3, 4, 5, 6, 7, 8, 9]
