

function toggle(){
    let searchBox = document.getElementById('search_input');
        if(searchBox.style.display ==="none"){
            searchBox.style.display = "block"
        }
        else{
            searchBox.style.display = "none";
    }
    
}




// function for the js menu bar

const toggleBtn = document.querySelector('.toggle_btn')
const toggleIcon = document.querySelector('.toggle_btn i')
const dropdownMenu = document.querySelector('.dropdown_menu')

 toggleBtn.onclick = function() {
  dropdownMenu.classList.toggle('open')
  const isOpen = dropdownMenu.classList.contains('open')
  
  toggleBtn.classList = isOpen
  'fa-solid fa-bars';
 
 
}