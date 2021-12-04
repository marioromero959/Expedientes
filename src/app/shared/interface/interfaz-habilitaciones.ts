export interface paso1{
    cuit:number,
    cuenta:number,
    tipoPersona:number,
    tipoLocal:string,
    solicitud:number[]
}
export interface paso2{
    razon:string,
    fechaInscripcion:string
    tipoSocietario:string,
    cierre:string,
    apellido:string,
    nombres:string,
    dni:number,
    fechaNacimiento:string,
    domicilio:string,
    localidad:string,
    nacionalidad:string,
    cuit:number,
    caracter:string 
}
export interface paso3Fiscal{
    calle:string,
    numeroCalle:number,
    piso:number,
    provincia:string,
    localidad:string,
    codPostal:number
}
export interface paso3Comercial{
    select:string,
    calleC:string,
    numeroCalleC:number,
    pisoC:number,
    provinciaC:string,
    localidadC:string,
    codPostalC:number,
    partida:string,
    alquilado:string,
}
export interface paso4{
    cuit:number,
    apellido:string,
    nombres:string
}
export interface paso5{
    fantasia:string,
    telefono:number,
    email:string,
    actividades:string[],
    estudio:string[],
}