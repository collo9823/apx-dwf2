class Departamento{
    nombre: string;
    constructor(nombre:string){
        this.nombre = nombre;
    }

    getName(){
        return this.nombre;
    }
}

class Piso{
    nombre: string;
    departamentos: Departamento[];
    constructor(nombre: string){
        this.departamentos = [];
        this.nombre = nombre;
    }

    pushDepartamento(depa){
        return this.departamentos.push(depa)
    }

    getDepartamentos(){
        return this.departamentos;
    }
}

class Edificio{
    pisos: Piso[];
    constructor(piso: Piso[]){
        this.pisos = piso;
    }
    addDepartamentoToPiso(nombreDePiso:string, departamento:Departamento){
        const buscarPiso = this.pisos.find(item=>{
            if(item.nombre == nombreDePiso){
                return item;
            }else{
                throw new Error('No existe el piso')
            }
        })
        return buscarPiso?.pushDepartamento(departamento);
    }

    getDepartamentosByPiso(nombreDePiso:string){
        const buscarPiso = this.pisos.find(item=>{
            if(item.nombre == nombreDePiso){
                return item;
            }
        })
        return buscarPiso?.getDepartamentos();
    }
}






// no modificar este test
function testClaseEdificio() {
    const unPiso = new Piso("planta baja");
    const otroPiso = new Piso("primer piso");
    const unEdificio = new Edificio([unPiso, otroPiso]);
    const deptoUno = new Departamento("depto uno");
    const deptoDos = new Departamento("depto dos");
    const deptoTres = new Departamento("depto tres");
    unEdificio.addDepartamentoToPiso("planta baja", deptoUno);
    unEdificio.addDepartamentoToPiso("planta baja", deptoDos);
    unEdificio.addDepartamentoToPiso("planta baja", deptoTres);
  
    const deptos = unEdificio.getDepartamentosByPiso("planta baja");
    const deptosEmpty = unEdificio.getDepartamentosByPiso("primer piso");
  
    if (
      Array.isArray(deptosEmpty) &&
      deptosEmpty.length == 0 &&
      deptos.length == 3 &&
      deptos[2].getName() == "depto tres"
    ) {
      console.log("testClaseBandaApartment passed");
    } else {
      throw "testClaseBandaApartment not passed";
    }
  }
  
  function mai() {
    testClaseEdificio();
  }
  mai();