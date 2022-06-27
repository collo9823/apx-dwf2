// class Departamento{
//     nombre: string;
//     constructor(nombre:string){
//         this.nombre = nombre;
//     }
//     getName(){
//         return this.nombre;
//     }
// }

// class Piso{
//     nombre: string;
//     departamentos: Departamento[];
//     constructor(nombre: string){
//         this.nombre = nombre;
//         this.departamentos = [];
//     }
//     pushDepartamento(obj){
//         return this.departamentos.push(obj);
//     } 
//     getDepartamentos(){
//         return this.departamentos;
//     }
// }

// class Edificio{
//     pisos: Piso[];
//     constructor(pisos: Piso[]){
//         this.pisos = pisos;
//     }

//     addDepartamentoToPiso(nombreDePiso:string, departamento:Departamento){
//         const pisoFinal = this.pisos.find(p=>p.nombre == nombreDePiso)
//         return pisoFinal.pushDepartamento(departamento);
//     }

//     getDepartamentosByPiso(nombreDePiso:string){
//         const encontrarPiso = this.pisos.find(element=>element.nombre == nombreDePiso);
//         return encontrarPiso.getDepartamentos();
//     }
// }


// // function mains(){
// //     const unDepa = new Departamento("depa1");
// //     const unPiso = new Piso(['primero'], [unDepa, unDepa])
// //     const edificio = new Edificio(unPiso)

    
// //     unPiso.pushDepartamento(new Departamento("depa3"))
// //     console.log(unPiso.departamentos)
// //     console.log(unPiso);
// //     console.log(['GETDEPARTAMENTOS'],unPiso.getDepartamentos())
    
// // }
// // mains()







// class Departamento{
//     nombre: string;
//     constructor(nombre: string){
//         this.nombre = nombre;
//     }
//     getName(){
//         return this.nombre;
//     }
// }

// class Piso{
//     nombre: string;
//     departamentos: Departamento[];
//     constructor(nombre: string){
//         this.nombre = nombre;
//         this.departamentos = [];
//     }
//     pushDepartamento(obj){
//         return this.departamentos.push(obj);
//     }
//     getDepartamentos(){
//         return this.departamentos;
//     }
// }


// class Edificio{
//     pisos: Piso[];
//     constructor(piso:Piso[]){
//         this.pisos = piso;
//     }
//     addDepartamentoToPiso(nombreDePiso:string, departamento:Departamento){
//         const buscaPiso = this.pisos.find((item)=>{

//             if(item.nombre == nombreDePiso){
//                 return item
//             }else{
//                 throw new Error('NO EXISTE EL PISO')
//             }
//         });
//         return buscaPiso?.pushDepartamento(departamento);
//     }

//     getDepartamentosByPiso(nombreDePiso:string){
//         const encuentraPiso = this.pisos.find(item=>item.nombre == nombreDePiso);
//         return encuentraPiso?.getDepartamentos();
//     }
// }



// class Departamento{
// nombre: string;
// constructor(nombre: string){
//     this.nombre = nombre;
// }
// getName(){
//     return this.nombre
// }
// }

// class Piso{
// nombre: string;
// departamentos: Departamento[]
// constructor(nombre: string){
//     this.nombre = nombre;
//     this.departamentos = [];
// }
// pushDepartamento(obj){
//     this.departamentos.push(obj);
// }
// getDepartamentos(){
//     return this.departamentos;
// }

// }
// class Edificio{
// pisos: Piso[];
// constructor(piso: Piso[]){
//     this.pisos = piso;
// }
// addDepartamentoToPiso(nombreDePiso:string, departamento:Departamento){
//     const buscarPiso = this.pisos.find((item)=>{
//         if(item.nombre == nombreDePiso){
//             return item;
//         }else{
//             throw Error('NO EXISTE EL PISO')
//         }
//     })
//     return buscarPiso?.pushDepartamento(departamento)
// }
// getDepartamentosByPiso(nombreDePiso:string){
//     const buscarPiso = this.pisos.find((item)=>{
//         if(item.nombre == nombreDePiso){
//             return item
//         }
//     })
//     return buscarPiso?.getDepartamentos()
// }
// }


// class Departamento{
//     nombre: string;
//     constructor(nombre: string){
//         this.nombre = nombre;
//     }
//     getName(){
//         return this.nombre;
//     }
// }

// class Piso{
//     nombre: string;
//     departamentos: Departamento[];
//     constructor(nombre: string){
//         this.nombre = nombre;
//         this.departamentos = [];
//     }
//     pushDepartamento(depa){
//         return this.departamentos.push(depa)
//     }
//     getDepartamentos(){
//         return this.departamentos;
//     }
// }

// class Edificio{
//     pisos: Piso[]
//     constructor(piso: Piso[]){
//         this.pisos = piso;
//     }

//     addDepartamentoToPiso(nombreDePiso:string, departamento:Departamento){
//         const buscarPiso = this.pisos.find(item=>{
//             if(item.nombre == nombreDePiso){
//                 return item;
//             }else{
//                 throw new Error('EL PISO INDICADO NO EXISTE, CREA UNO CON ESE NOMBRE')
//             }
//         })
//         return buscarPiso?.pushDepartamento(departamento);
//     }
//     getDepartamentosByPiso(nombreDePiso:string){
//         const buscarPiso = this.pisos.find(item=>{
//             if(item.nombre == nombreDePiso){
//                 return item;
//             }
//         }) 
//         return buscarPiso?.getDepartamentos();
//     }
// }

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
//     getDepartamentosByPiso(nombreDePiso:string){
//         const buscarPiso = this.pisos.find(item=>{
//             if(item.nombre == nombreDePiso){
//                 return item;
//             }
//         }) 
//         return buscarPiso?.getDepartamentos();
//     }
}



// function mainn(){
// const unDepa = new Departamento('depa 1');
// const dosDepa = new Departamento('depa 2');
// const tresDepa = new Departamento('depa 3');
// const cuatroDepa = new Departamento('depa 4');
// const cincoDepa = new Departamento('depa 5');
// const seisDepa = new Departamento('depa 6');
// const sieteDepa = new Departamento('depa 7');
// const ochoDepa = new Departamento('depa 8');
// const unPiso = new Piso('PB');
// const dosPiso = new Piso('P1');
// unPiso.pushDepartamento(unDepa)
// const unEdificio = new Edificio([unPiso, dosPiso]);
// unEdificio.addDepartamentoToPiso('PB', new Departamento('depa nuevoooooooo'))
// console.log(unDepa);
// console.log(unPiso);
// console.log(['NUEVO DEPA PISO'],unPiso.pushDepartamento('Nuevo'));
// console.log(unPiso);
// console.log(unEdificio);
// // console.log(['GETDEPASBYPISO'], unEdificio.getDkepartamentosByPiso('P'));
// console.log(['GETDEPASBYPISO'], unEdificio.getDepartamentosByPiso('PB'));
// console.log(['GETDEPASBYPISO'], unEdificio.getDepartamentosByPiso('P1'));
// // console.log(['GETDEPASBYPISO'], unEdificio.addDepartamentoToPiso('PB', 'DEPA'));
// console.log(unEdificio.pisos);
// console.log(unEdificio.pisos[0]);
// }

// mainn()






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