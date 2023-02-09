const btnagregar = document.querySelector("[data-form-create]");
const addtask = (evento) => {
    evento.preventDefault();
    const inputext = document.querySelector("[data-input-agregar]");
    console.log(inputext.value);
};
btnagregar.addEventListener('click',addtask);


