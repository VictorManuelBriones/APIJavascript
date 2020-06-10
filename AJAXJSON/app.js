const boton1 = document.getElementById('boton1');


boton1.addEventListener('click', function(){

    const xhr = new XMLHttpRequest();

xhr.open('GET', 'empleado.json', true);

xhr.onload = function(){
    if(this.status === 200){
            const persona = JSON.parse(this.responseText);

            const htmlTemple = `
            <ul>
                <li>ID: ${persona.id}</li>
                <li>Nombre: ${persona.nombre}</li>
                <li>Empresa: ${persona.empresa}</li>
                <li>Actividades: ${persona.trabajo}</li>
            </ul>
            
            `;
            document.getElementById('empleado').innerHTML = htmlTemple;
    }
}
    xhr.send();

});

const boton2 = document.getElementById('boton2');
boton2.addEventListener('click', function(){

    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'empleados.json', true);

    xhr.onload = function(){
        if(this.status === 200){
            const personal = JSON.parse(this.responseText);
            let htmlTemple = '';
            personal.forEach(function(persona) {
                htmlTemple += `
                <ul>
                    <li>ID: ${persona.id}</li>
                    <li>Nombre: ${persona.nombre}</li>
                    <li>Empresa: ${persona.empresa}</li>
                    <li>Actividades: ${persona.trabajo}</li>
                </ul>
                
                `;
            });
            document.getElementById('empleados').innerHTML= htmlTemple;
        }
    }
    xhr.send();
});

