export interface paso1{
    cuit:number,
    cuenta:number,
    tipoPersona:number,
    tipoLocal:string,
    solicitud:number[]
}

export interface Paso1 {
    status:       string;
    hcexpid:      number;
    expid:        number;
    cuit:         string;
    ctanumi:      string;
    personatipo:  number;
    tienelocal:   number;
    tsolicitudes: string;
    hcexpestado:  number;
}
export interface Paso2Fisica {
    persfisicaid:     number;
    hcexpid:          number;
    persfiscandoc:    number;
    persfisicaap:     string;
    persfisicanom:    string;
    persfisicafecnac: Date;
    paisid:           number;
    personacargo:     number;
    persfisicaestado: number;
}
//Hacer interface para juridica
export interface Paso3 {
    hc_domicilio_id:                 number;
    hc_expediente_id:                number;
    hc_domicilio_calle:              string;
    hc_domicilio_nro:                string;
    hc_domicilio_piso:               number;
    localidad_id:                    number;
    provincia_id:                    number;
    hc_domicilio_codpostal:          string;
    hc_domicilio_partida_provincial: string;
    hc_domicilio_propietario:        number;
    hc_domicilio_tipo_id:            number;
    hc_domicilio_estado:             number;
}