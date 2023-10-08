console.log('start of mainJS file')

let itemList = document.getElementById('items');

itemList.addEventListener('click', removeItem);

function removeItem(e){
    if(e.target.classList.contains('delete')){
        // console.log('1');
        let li = e.target.parentElement;
        itemList.removeChild(li);
    }
}