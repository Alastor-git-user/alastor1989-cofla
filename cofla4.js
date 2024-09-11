//PROBLMA A PERFECCIONAR CALCULADORA PARA IMPLEMENTAR NUEVAS FUNCIONES

//PROBLEMA B CREAR UNA FUNCION QUE AL PASARLE COMO PARAMETRO LA MATERIA, DEVUELVA
//PROFESOR ASIGNADO
//NOMBRE DE LOS ALUMNOS
//FUNCION QUE NOS INDIQUE EN CUANTAS CLASES ESTA COFLA
//NOMBRE DE ESTAS CLASES Y SUS PROFESORES

//PROBLEMA C CREAR FUNCION PARA PREGUNTAR EN QUE MATERIA SE QUIERE INSCRIBIR
//SI HAY 20 ALUMNOS NEGAR LA INSCRIPCION
//SI HAY MENOS DE 20 INSCRIBIRLO Y AÑADIRLO A LA LISTA

const data = {
mathematics: {
	"teacher": ["Emperor Freezer"],
	"students": ["Light", "Napa", "Chaos", "Ten","Naruto","Numero17","Saitama","Cofla"]
},

physics : {
	"teacher": ["Bills God of destruction"],
	"students": ["Goku", "Trunks", "Vegeta", "Broly","Sazuke","Hinata","Cofla"]
},

chemestry : {
	"teacher": ["Zenku mad genius"],
	"students": ["Habber", "Walter", "Vreakling", "Julius", "Alexander", "Itachi", "Deidara", "Kasios", "Seiya", "Shun"]
},
}; //BASE DE DATOS CREADA

function subject(materia){
	subdata = Object.entries(data).filter(([key]) => materia == key);
	if(subdata.length == 0){
		return 'The subject does not exist.';
	}
	else{
		return `The teacher  is: ${subdata[0][1].teacher};
		and the students are:
		${subdata[0][1].students}`;
	}

	
};

console.log(subject("chemestry"))

function cofla(){
	let coflaClases = [];
	let coflaTeachers = [];
	for (i in data){
		if(data[i].students.includes('Cofla')){
			coflaClases.push(i);
			coflaTeachers.push(data[i].teacher);
		};
	};
	if(coflaClases.length == 0){
		return 'Cofla does not registred in anything class';
	}
	else{
		return `Cofla is registred in the next class:
		Class name: ${coflaClases}  
		Teacher: ${coflaTeachers} `;
	}
};

console.log(cofla());

//console.log(data["chemestry"].students.includes("Cofla"));

function inscribir(materia){

	if(data[materia].students.length < 20){
		if(data[materia].students.includes("Cofla")){
			return 'Cofla is already registered for this subject'
		} 
		else{
			data[materia].students.push('Cofla');
			return 'Cofla has been registered successfully'
		};
	}
	else{
		return 'The maximum number of students is 20, so Cofla cannot be registered.';
	}
}

console.log(inscribir('chemestry'));
console.log(cofla());
console.log(subject("chemestry"))
