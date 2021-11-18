

let obj = {
  'col':null,
  'row':null
}

let data = fetch('filename.json?x=' + Math.random()).then(r => r.json()).then(arr => {

 // xObjArr
 console.log(arr);

// get all the letter_combinations
// get all the IPA_prononciations

// make a table with each

let letter_combinations = [];
for (let i = 0; i < arr.length; i++) {
 if (letter_combinations.indexOf(arr[i].letter_combination) === -1) {
  letter_combinations.push(arr[i].letter_combination);
 }
}

letter_combinations.sort();
console.log(letter_combinations);

let IPA_prononciations = [];
for (let i = 0; i < arr.length; i++) {
 if (IPA_prononciations.indexOf(arr[i].IPA_prononciation) === -1) {
  IPA_prononciations.push(arr[i].IPA_prononciation);
 }
}

IPA_prononciations.sort();
console.log(IPA_prononciations);

// make the table

for (let i = 0; i < letter_combinations.length+1; i++) {
 let tr = document.createElement('tr');
 
 if (i === 0 ) {
  let td = document.createElement('td');
  td.innerHTML = '<p>IPA prononciation<span class="arrow">&#x2BC8;</span></p><p style="border-bottom: 1px solid #999;"></p><p><span class="arrow">&#x2BC6;</span>letter combination</p>';
  tr.appendChild(td);
  
  for (let j = 0; j < IPA_prononciations.length; j++) {
  
  
    // THESE ARE THE COLUMN HEADER
    let td = document.createElement('td');
    
    td.classList.add('column-header');
    td.classList.add(IPA_prononciations[j]);
    
    td.addEventListener('click', function() {
      let IPA_char = IPA_prononciations[j];
      obj.col = IPA_prononciations[j];
      console.log(obj);
      applyHighlight(obj);
    });
    
    
    td.innerHTML = '<p>' + IPA_prononciations[j] + '</p>';
    tr.appendChild(td);
  }
  
  
 }
 
 if (i > 0) {
 
 
  // ROW HEADERS
  let td = document.createElement('td');
  td.innerHTML = '<p>' + letter_combinations[i-1] + '</p>';
  td.classList.add(letter_combinations[i-1]);
  td.classList.add('row-header');
  tr.appendChild(td);
  
  td.addEventListener('click', function() {
    let letter_combo = letter_combinations[i-1];
    obj.row = letter_combo;
    console.log(obj);
    applyHighlight(obj);
  });
  
  
  
  for (let j = 0; j < IPA_prononciations.length; j++) {
  
    // THE CELLS
    let td = document.createElement('td');
    td.classList.add(IPA_prononciations[j]);
    td.classList.add(letter_combinations[i-1]);
    
    // td.innerHTML = '<p> &middot; </p>';
    
    // add the contents
    for (let n = 0; n < arr.length; n++) {
      if (arr[n].letter_combination === letter_combinations[i-1] && arr[n].IPA_prononciation === IPA_prononciations[j]) {
      
        let p = document.createElement('p');
        p.innerHTML = arr[n].word;
        td.appendChild(p);
      }
    }
    
    
    tr.appendChild(td);
  }
  
  

  
  
  
  
 }
 
 
 
 mytable.appendChild(tr);
 
 
 
}



// filter should work like this:
// filter : {rows:[], cols:[]}
// and then it starts from scratch each time, based on those specs

// if i click on a sound, it goes thru the column, and greys out rows that do not have entries



function applyHighlight(obj) {
      let td_els = document.getElementsByTagName('td');
      for (let i = 0; i < td_els.length; i++) {
        let el = td_els[i];
        //el.style.backgroundColor = '#fff';
        el.classList.remove('highlight');
        el.classList.add('no-highlight');
      }
      
      let col_els = document.getElementsByClassName(obj.col);
      for (let i = 0; i < col_els.length; i++) {
        let el = col_els[i];
        //el.style.backgroundColor = '#c2d1f0';
        el.classList.remove('no-highlight');
        el.classList.add('highlight');
      }
      let row_els = document.getElementsByClassName(obj.row);
      for (let i = 0; i < row_els.length; i++) {
        let el = row_els[i];
        //el.style.backgroundColor = '#c2d1f0';
        el.classList.remove('no-highlight');
        el.classList.add('highlight');
      }
}


});



