create database sistemaControlHorasBecas

use sistemaControlHorasBecas

create table estado_civil (
	estado_civil_id int not null,
	nombre_estado_civil nvarchar(30),
	constraint estado_civil_id_pk primary key(estado_civil_id));

create table becas (
	beca_id int not null,
	nombre_beca nvarchar(150),
	descripcion nvarchar(max),
	monto money,
	constraint beca_id_pk primary key(beca_id));

create table estado_beca (
	estado_beca_id int not null,
	estado_beca nvarchar(30),
	constraint estado_beca_id_pk primary key(estado_beca_id));
/*
create table categorias_preguntas (
	categoria_id int not null,
	nombre_categoria nvarchar(30),
	constraint categoria_id_pk primary key(categoria_id));
*/
create table facultades (
	facultad_id nchar(5) not null,
	nombre_facultad nvarchar(100),
	constraint facultad_id_pk primary key(facultad_id));

create table carreras (
	carrera_id nchar(5) not null,
	nombre_carrera nvarchar (100),
	facultad_id nchar(5) not null,
	constraint carrera_id_pk primary key(carrera_id),
	constraint facultad_id_fk foreign key(facultad_id) references facultades(facultad_id));

create table preguntas_frecuentes (
	pregunta_id int not null,
	pregunta nvarchar(max) not null,
	respuesta nvarchar(max) not null,
	constraint pregunta_id_pk primary key(pregunta_id));

create table persona (
	persona_id int not null,
	primer_nombre varchar(25) not null,
	segundo_nombre varchar(25),
	primer_apellido varchar(25) not null,
	segundo_apellido varchar(25),
	fecha_nacimiento date not null,
	dni nvarchar(15) not null,
	sexo char(1),
	estado_civil_id int not null,
	telefono nvarchar(9),
	correo_institucional nvarchar(35) not null,
	constraint persona_id_pk primary key(persona_id),
	constraint estado_civil_id_fk foreign key(estado_civil_id) references estado_civil(estado_civil_id),
	constraint persona_sexo_ck check (sexo in ('F','M')),
	constraint persona_dni_ck check (dni like '[0-9][0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]-[0-9][0-9][0-9][0-9][0-9]'),
	constraint persona_telefono_ck check (telefono like '[1-9][0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]'));

create table becario (
	becario_id nchar(5) not null,
	persona_id int not null,
	no_cuenta nvarchar(15),
	carrera_id nchar(5) not null,
	beca_id int not null,
	estado_beca_id int not null,
	fecha_inicio_beca date not null,
	contrasena nvarchar(10),
	ultimo_acceso datetime,
	constraint becario_id_pk primary key(becario_id),
	constraint becario_persona_id_fk foreign key(persona_id) references persona(persona_id),
	constraint becario_carrera_id_fk foreign key(carrera_id) references carreras(carrera_id),
	constraint becario_beca_id_fk foreign key(beca_id) references becas(beca_id),
	constraint becario_estado_beca_id_fk foreign key(estado_beca_id) references estado_beca(estado_beca_id),);
	
create table empleado (
	empleado_id nchar(5) not null,
	persona_id int not null,
	no_empleado nvarchar(10),
	contrasena nvarchar(10),
	ultimo_acceso datetime,
	constraint empleado_id_pk primary key(empleado_id),
	constraint empleado_persona_id_fk foreign key(persona_id) references persona(persona_id));
	
create table reporte (
	reporte_id nchar(5) not null,
	becario_id nchar(5) not null,
	fecha_reporte date,
	total_horas int,
	observaciones nvarchar(max),
	constraint reporte_id_pk primary key(reporte_id),
	constraint reporte_becario_id_fk foreign key(becario_id) references becario(becario_id));

create table actividades_disponibles (
	actividad_id nchar(5) not null,
	nombre_actividad nvarchar(max) not null,
	descripcion nvarchar(max) not null,
	fecha_actividad date not null,
	numero_horas int not null,
	ubicacion nvarchar(150),
	imagen nvarchar(100),
	constraint actividad_id_pk primary key(actividad_id));

create table actividades_realizadas_x_becario (
	actividad_id nchar(5) not null,
	becario_id nchar(5) not null,
	fecha date,
	constraint act_rea_becario_actividad_id_fk foreign key(actividad_id) references actividades_disponibles(actividad_id),
	constraint act_rea_becario_becario_id_fk foreign key(becario_id) references becario(becario_id));

create table planilla_x_mes (
	planilla_id varchar(10) not null,
	becario_id nchar(5) not null,
	fecha date not null,
	estado_entrega char(1) default 'N',
	observaciones varchar(255),
	constraint planilla_becario_id_fk foreign key(becario_id) references becario(becario_id),
	constraint estado_entrega_ck check (estado_entrega in ('S','N')));

