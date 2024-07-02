// console.log("Bismillah I am from storage");
// local storage a value browser a thakbe delete na kora porjonto
// session storage e browser close korle value chole jabe


// local storage a obj or array rakhte hole stringify kore rakhte hobe
// localStorage.setItem('name', 'tamim')
const addToLocal = () =>{
    const localStorageId = document.getElementById('storageId');
    const id = localStorageId.value;
    localStorageId.value = ''

    const localStorageValue = document.getElementById('storageValue');
    const value = localStorageValue.value;
    localStorageValue.value = ''

    if(id && value){
    localStorage.setItem(id, value);
    }

}