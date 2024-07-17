const searchvalue =  document.querySelector('.add-task input');
const searchbutton =  document.querySelector('.add-task button');
const tablerow =  document.querySelector('.list-box .table' );
searchbutton.addEventListener('click',()=>{
    if(searchvalue.value !== "")
    {
        addtask();
    }
});
let addtask =()=>{
    const div = document.createElement('div');
    div.setAttribute('class', 'table-heading table-row');
    div.innerHTML = `<div class="icon"><i class="fa fa-times-circle"></i><i class="fa fa-check-circle one" aria-hidden="true"></i></div><p class="text">${searchvalue.value.trim()}</p><div><i class="fas fa-edit"></i><i class="fa-solid fa-trash"></i></div>`;
    tablerow.appendChild(div);
    searchvalue.value = "";

    const delBtn = div.querySelector('.fa-solid.fa-trash');
    delBtn.addEventListener('click',()=>{
        div.remove();
    });

    const editBtn = div.querySelector('.fas.fa-edit');
    editBtn.addEventListener('click', () => {
        const p = div.querySelector('.text');
        const newText = prompt('Edit task:', p.innerText);
        if (newText !== null) {
            p.innerText = newText.trim();
        }
    });

    const comBtn = div.querySelectorAll('.icon i');
    comBtn.forEach(element=>{
            element.addEventListener('click', () => {
            const comtask = div.querySelector('.text');
            div.querySelector('.icon .fa.fa-times-circle').classList.toggle('one');
            div.querySelector('.icon .fa.fa-check-circle').classList.toggle('one');
            comtask.classList.toggle('complete');
        });
    });
};
