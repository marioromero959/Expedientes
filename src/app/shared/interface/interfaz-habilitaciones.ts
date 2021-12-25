

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
export interface Paso4 {
    hc_dp_id:            number;
    hc_expediente_id:    number;
    hc_dp_apellido:      string;
    hc_dp_nombres:       string;
    hc_dp_cuit_cuil_dni: number;
    hc_dp_estado:        number;
}
export interface Paso5 {
    hc_otro_dato_id:              number;
    hc_expediente_id:             number;
    hc_otro_dato_nombre_fantasia: string;
    hc_otro_dato_telefono:        string;
    hc_otro_dato_email:           string;
    hc_otro_dato_estado:          number;
}
