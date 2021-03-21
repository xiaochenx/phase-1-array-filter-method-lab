// // Code your solution here
// const nameMatching = drivers.filter(findMatching);

// function findMatching(driver){
//     let nameMatching = driver.filter((drivers)=>{ 
//         return drivers === "Bobby" || drivers === "Sammy";
//     })
// if (nameMatching){
//     return nameMatching;
// }else{
//     return [];
// }

// }


// const matched = drivers.filter(name => name === "Bobby" || name === "Sammy");

// console.log(matched);




// const nameMatching = drivers.filter(findMatching);

// function findMatching(driver){
    
//     return driver === "Bobby" || driver === "Sammy";
    
// }

// console.log(nameMatching);


function findMatching(arr, name) {
    return arr.filter( matched =>
      matched.toLowerCase() === name.toLowerCase()
    )
  }
  
  function fuzzyMatch(arr, letters) {
    return arr.filter( matched =>
      matched.toLowerCase().indexOf(letters.toLowerCase()) === 0
    )
  }
  
  function matchName(arr, target) {
    return arr.filter( record => record.name === target)
  }


