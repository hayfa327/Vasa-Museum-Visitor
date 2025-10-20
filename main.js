let countEl = document.getElementById('count_el'); 
let saveEl = document.getElementById('save_el');
let totalEl = document.getElementById('total_el');
let count = 0;

function countPeople() {
 count += 1; 
 countEl.textContent = count 
};


   function saveVisitors() {
      saveEl.textContent += count + " - ";
      count = 0;
      countEl.textContent = count;
      totalVisitors();
    }

    function totalVisitors() {
      let total = 0;
      let entries = saveEl.textContent.split(" - ");
      entries.forEach(entry => {
        let value = parseInt(entry);
        if (!isNaN(value)) {
          total += value;
        }
      });
      totalEl.textContent = "Total Visitors: " + total;
    }