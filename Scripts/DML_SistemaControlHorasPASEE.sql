use sistemaControlHorasBecas

Insert Into estado_civil (estado_civil_id, nombre_estado_civil)
			Values  (0, 'Casado/a'),
					(1, 'Soltero/a'),
					(2, 'Divorciado/a'), 
					(3, 'Unión Libre'), 
					(4, 'Viudo/a');

select * from estado_civil
-----------------------------------------------------------------
Insert Into becas (beca_id, nombre_beca, descripcion, monto)
			Values  (0, 'Beca Excelencia Académica Categoría "A"', 'Es una asignación mensual no reembolsable de L2,000.00 que se otorga durante el año académico a estudiantes de Primer Ingreso  cuyo promedio académico de Educación Secundaria sea igual o superior a 90%.
			Para los estudiantes de Reingreso  índice debe ser de 90% de un mínimo de 10 asignaturas aprobadas en el año académico anterior.', 2000.00),
					(1, 'Beca Excelencia Académica Categoría "B"', 'Es una asignación mensual no reembolsable de L1,680.00 a estudiantes universitarios de reingreso cuyo índice  académico sea igual o superior a 80% de un mínimo de 10 asignaturas aprobadas en el año académico anterior, o las que el plan exija.', 1680.00),
					(2, 'Beca Equidad Alma Mater', 'Es la oportunidad de acceso y permanencia a la educación superior mediante un sistema solidario de becas para estudiantes provenientes de zonas postergadas, escasos recursos económicos, y con excelencia académica, con deseos de continuar su formación académica en la UNAH.',0), 
					(3, 'Beca Apoyo al Deporte', 'Consiste en una asignación mensual no reembolsable de L1,840.00 que se le otorga al estudiante durante el año académico que además de su carrera universitaria, representa a la UNAH en diferentes disciplinas deportivas, y mantiene un índice académico de 75%.', 1840.00), 
					(4, 'Beca Apoyo al Arte', 'Es un asignación mensual no reembolsable de L1,840.00 que se otorga a estudiantes universitarios, durante el año académico,  que además de la carrera que estudia participan en representación de la UNAH en grupos artísticos de danza, música y coro  cuyo promedio académico sea igual o superior al 75%.', 1840.00),
					(5, 'Beca por Desempeño Estudiantil', 'Es una asignación mensual no reembolsable orientada a la generación de oportunidades y estímulos que garantice la permanencia y promoción de estudiantes de grado, con índice académico de 75%, mediante su aporte a programas, proyectos de distintas Unidades Académicas y Administrativas de la Institución. Para que el o los estudiantes desarrollen sus capacidades, habilidades y competencias en el ámbito profesional. La asignación mensual dependerá del presupuesto que cada unidad asigne para este fin.',0), 
					(6, 'Préstamo educativo a largo plazo', 'Es una facilidad crediticia que se otorga al Estudiante como complemento para cubrir sus gastos. Su asignación mensual  es de L.1, 840.00.', 1840.00);

select * from becas
-----------------------------------------------------------------
Insert Into estado_beca (estado_beca_id, estado_beca)
			Values  (0, 'Activa'),
					(1, 'Suspendida'),
					(2, 'Finalizada');

select * from estado_beca
-----------------------------------------------------------------
Insert Into facultades (facultad_id, nombre_facultad)
			Values  ('FAC01', 'Ciencias Jurídicas'),
					('FAC02', 'Ciencias Sociales'),
					('FAC03', 'Humanidades y Artes'),
					('FAC04', 'Ingeniería'),
					('FAC05', 'Ciencias'),
					('FAC06', 'Ciencias Espaciales'),
					('FAC07', 'Ciencias Médicas'),
					('FAC08', 'Odontología'),
					('FAC09', 'Química y Farmacia'),
					('FAC10', 'Ciencias Económicas Administrativas y Contables');

select * from facultades
-----------------------------------------------------------------
Insert Into carreras (carrera_id, nombre_carrera, facultad_id)
			Values  ('CAR01', 'Licenciatura en Derecho', 'FAC01'),
					('CAR02', 'Licenciatura en Antropología', 'FAC02'),
					('CAR03', 'Licenciatura en Periodismo', 'FAC02'),
					('CAR04', 'Licenciatura en Psicología', 'FAC02'),
					('CAR05', 'Licenciatura en Pedagogía', 'FAC03'),
					('CAR06', 'Licenciatura en Trabajo Social', 'FAC02'),
					('CAR07', 'Licenciatura en Historia', 'FAC02'),
					('CAR08', 'Licenciatura en Letras', 'FAC03'),
					('CAR09', 'Licenciatura en Filosofía', 'FAC03'),
					('CAR10', 'Licenciatura en Sociología', 'FAC02'),
					('CAR11', 'Licenciatura en Educación Física', 'FAC03'),
					('CAR12', 'Licenciatura en Lenguas Extranjeras con Orientación en Inglés y Francés', 'FAC03'),
					('CAR13', 'Licenciatura en Musica', 'FAC03'),
					('CAR14', 'Licenciatura en Desarrollo Local', 'FAC02'),
					('CAR15', 'Ingeniería Civil', 'FAC04'),
					('CAR16', 'Ingeniería Mecánica Industrial', 'FAC04'),
					('CAR17', 'Ingeniería Eléctrica Industrial', 'FAC04'),
					('CAR18', 'Ingeniería Industrial', 'FAC04'),
					('CAR19', 'Ingeniería en Sistemas', 'FAC04'),
					('CAR20', 'Arquitectura', 'FAC03'),
					('CAR21', 'Licenciatura en Matemática', 'FAC05'),
					('CAR22', 'Licenciatura en Física', 'FAC05'),
					('CAR23', 'Licenciatura en Astronomía y Astrofísica', 'FAC06'),
					('CAR24', 'Licenciatura en Ciencia y Tecnologías de la Información Geográfica', 'FAC06'),
					('CAR25', 'Medicina y Cirugía', 'FAC07'),
					('CAR26', 'Odontología', 'FAC08'),
					('CAR27', 'Licenciatura en Nutrición', 'FAC07'),
					('CAR28', 'Licenciatura en Química y Farmacia', 'FAC09'),
					('CAR29', 'Licenciatura en Enfermería', 'FAC07'),
					('CAR30', 'Licenciatura en Microbiología', 'FAC05'),
					('CAR31', 'Licenciatura en Biología', 'FAC05'),
					('CAR32', 'Licenciatura en Fonoaudiología', 'FAC07'),
					('CAR33', 'Licenciatura en Administración y Generación de Empresas', 'FAC10'),
					('CAR34', 'Licenciatura en Administración Pública', 'FAC10'),
					('CAR35', 'Licenciatura en Economía', 'FAC10'),
					('CAR36', 'Licenciatura en Contaduría Pública y Finanzas', 'FAC10'),
					('CAR37', 'Licenciatura en Administración Aduanera', 'FAC10'),
					('CAR38', 'Licenciatura en Banca y Finanzas', 'FAC10'),
					('CAR39', 'Licenciatura en Comercio Internacional', 'FAC10'),
					('CAR40', 'Licenciatura en Informatica Administrativa', 'FAC10'),
					('CAR41', 'Licenciatura en Mercadotecnia', 'FAC10'),
					('CAR42', 'Ingeniería Agronómica', 'FAC04'),
					('CAR43', 'Ingeniería Forestal', 'FAC04'),
					('CAR44', 'Ingeniería Agroindustrial', 'FAC10'),
					('CAR45', 'Ingeniería en Ciencias Acuicolas y Recursos Marinos Costeros', 'FAC04'),
					('CAR46', 'Licenciatura en Economía Agricola', 'FAC10'),
					('CAR47', 'Licenciatura en Ecoturismo', 'FAC10'),
					('CAR48', 'Licenciatura en Comercio Internacional con Orientación en Agroindustria', 'FAC10'),
					('CAR49', 'Técnico Universitario Metalurgia', 'FAC05'),
					('CAR50', 'Técnico Universitario en Producción Agrícola', 'FAC04'),
					('CAR51', 'Técnico Universitario en Terapia Funcional', 'FAC07'),
					('CAR52', 'Técnico Universitario en Radiotecnologías (Radiología e Imágenes)', 'FAC07'),
					('CAR53', 'Técnico Universitario en Microfinanzas', 'FAC10'),
					('CAR54', 'Técnico Universitario en Alimentos y Bebidas', 'FAC10'),
					('CAR55', 'Técnico Universitario en Administración de Empresas Cafetaleras', 'FAC10'),
					('CAR56', 'Licenciatura en Ciencia y Tecnología de la Información Geográfica', 'FAC06'),
					('CAR57', 'Licenciatura en Administración de Empresas Agropecuarias', 'FAC10'),
					('CAR58', 'Licenciatura en Pedagogía', 'FAC03'),
					('CAR59', 'Técnico Universitario en Microfinanzas', 'FAC10'),
					('CAR60', 'Licenciatura en Ecoturismo', 'FAC10'),
					('CAR61', 'Ingeniería Química Industrial', 'FAC04'),
					('CAR62', 'Licenciatura en Geología', 'FAC05'),
					('CAR63', 'Técnico Universitario en Tecnología de Alimentos', 'FAC04'),
					('CAR64', 'Licenciatura en Química Industrial', 'FAC04'),
					('CAR65', 'Técnico Universitario en Agroexportación', 'FAC10'),
					('CAR66', 'Técnico Universitario en Operaciones de Vuelo', 'FAC06'),
					('CAR67', 'Licenciatura en Operaciones Aeronáuticas', 'FAC06'),
					('CAR68', 'Técnico Universitario en Administración de Empresas Cafetaleras', 'FAC10'),
					('CAR69', 'Técnico Universitario en Máquinas y Herramientas de Control Numérico', 'FAC04'),
					('CAR70', 'Técnico Universitario en Seguridad e Higiene Industrial', 'FAC04'),
					('CAR71', 'Técnico Universitario en Gestión y Calidad del Agua', 'FAC05'),
					('CAR72', 'Técnico Universitario en Sistemas de Información Geográfica con Énfasis en Catastro', 'FAC06'),
					('CAR73', 'Técnico Universitario en Intérprete de la Lengua de Señas Hondureñas', 'FAC03');

select * from carreras
-----------------------------------------------------------------
Insert Into preguntas_frecuentes (pregunta_id, pregunta, respuesta)
			Values  (0, '¿Qué hacer si una actividad no aparece en la lista de actividades disponibles?', 'Si no encuentras una actividad en la lista de actividades disponibles, puede ser porque esta ya no acepta inscripciones, fue cancelada o pospuesta.'),
					(1, '¿Cuántas horas necesito completar para mantener mi beca activa?', 'Se debe realizar un minimo de 20 horas mensuales para que la beca no sea suspendida.'),
					(2, '¿Cómo puedo acceder al historial de mis actividades realizadas?', 'Debeeras ingresar al Sistema de Control de Horas PASEE y dirígete a la sección de Actividades Realizadas. Aquí encontrarás todas las actividades realizadas agrupadas por mes, junto con el total de horas realizadas.'),
					(3, '¿Qué debo hacer si tengo problemas para iniciar sesión?', 'Si no puedes iniciar sesión:
					1.- Asegúrate de que tu usuario y contraseña sean correctos.
					2.- Utiliza la opción Olvide mi Contraseña en la pantalla de inicio.
					3.- Si el problema persiste, contacta al soporte técnico.'),
					(4, '¿Qué pasa si no completo las horas requeridas dentro del plazo establecido?', 'En primer instancia tu beca podria ser suspendida por un tiempo, por lo cual deberas avocarte a las oficinas de PASEE para explicar cual fue tu problema porque si no tu beca puede ser cancelada.'),
					(5, '¿Cómo actualizo mi información personal?', 'No puedes actualizar tu información personal, en caso de presentar algún dato erroneo o imcopleto deberas avocarte a las oficinas de PASEE.'),
					(6, '¿La UNAH brinda apoyo finaciero?', 'SÍ, la UNAH dispone de un programa de becas y estímulos educativos orientado a la atención de estudiantes que, por su situación socioeconomica y mérito académico pueden recibir un apoyo financiero para cursar sus estudios universitarios.'),
					(7, '¿Donde puedo obtener información acerca de las becas que ofrece la UNAH', 'Puedes irte a la sección de Becas, ahi encontraras los detalles de las diferentes modalidades de becas que ofrece la UNAH y PASEE.');

select * from preguntas_frecuentes
-----------------------------------------------------------------
Insert Into persona (persona_id, primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, fecha_nacimiento, dni, sexo, estado_civil_id, telefono, correo_institucional)
	Values ('0', 'Carlos','Alberto','Flores','Cruz','2000-06-26', '0801-2000-86954','M','1','9825-4560','carlos.flores@unah.hn'),
			('1', 'Ana','Maria','Ponce','Ruiz','1998-12-24', '0801-1998-86954','F','1','9825-4560','ana.ponce@unah.hn'),
			('2', 'Angela','Natalia','Castro','Funez','1999-12-31', '0801-1999-69541','F','1','9795-4512','angela.castro@unah.hn'),
			('3', 'Angie','Nicole','Perez','Melgar','2001-09-24', '0801-2001-86954','F','1','9825-0012','angie.melgar@unah.hn'),
			('4', 'Valentin','Alejandro','Andino','Rodas','2002-02-14', '0801-2002-86954','M','1','8745-4560','valejandro@unah.hn'),
			('5', 'Carlos','Alberto','Flores','Cruz','2000-06-26', '0801-2000-86954','M','1','9825-0145','calberto@unah.hn'),
			('6', 'Gabriela', 'Isabel', 'Martínez', 'Guzmán', '2003-03-12', '0801-2003-45678', 'F', '2', '8890-1234', 'gabriela.martinez@unah.hn'),
			('7', 'Luis', 'Fernando', 'Hernández', 'Lopez', '1995-07-05', '0801-1995-56789', 'M', '1', '9856-3412', 'luis.hernandez@unah.hn'),
			('8', 'Andrea', 'Paola', 'Mendoza', 'Aguilar', '1997-10-15', '0801-1997-67890', 'F', '3', '9745-1289', 'andrea.mendoza@unah.hn'),
			('9', 'Jorge', 'Daniel', 'Zelaya', 'Ortiz', '2000-08-30', '0801-2000-78901', 'M', '1', '9945-6789', 'jorge.zelaya@unah.hn'),
			('10', 'María', 'José', 'Cruz', 'Rodríguez', '1999-01-22', '0801-1999-89012', 'F', '2', '9795-4567', 'maria.cruz@unah.hn'),
			('11', 'Pedro', 'Antonio', 'Mejía', 'Vargas', '2002-06-18', '0801-2002-90123', 'M', '1', '9854-5678', 'pedro.mejia@unah.hn'),
			('12', 'Camila', 'Sofía', 'García', 'Cáceres', '1998-11-12', '0801-1998-12345', 'F', '1', '9934-1123', 'camila.garcia@unah.hn'),
			('13', 'José', 'Miguel', 'Ruiz', 'Pineda', '2001-04-04', '0801-2001-23456', 'M', '1', '9912-6789', 'jose.ruiz@unah.hn'),
			('14', 'Karla', 'Vanessa', 'Ortiz', 'Ramírez', '1996-02-25', '0801-1996-34567', 'F', '2', '9889-4567', 'karla.ortiz@unah.hn'),
			('15', 'Roberto', 'Carlos', 'Santos', 'Fernández', '1995-09-09', '0801-1995-45678', 'M', '3', '9845-9876', 'roberto.santos@unah.hn'),
			('16', 'Diego', 'Armando', 'Castillo', 'Galeano', '1994-05-13', '0801-1994-56789', 'M', '0', '9834-2345', 'diego.castillo@unah.hn'),
			('17', 'Sofía', 'Andrea', 'Ramírez', 'Pavón', '1999-07-21', '0801-1999-67890', 'F', '1', '9743-5678', 'sofia.ramirez@unah.hn'),
			('18', 'Ricardo', 'Emilio', 'Vásquez', 'Funes', '2002-03-17', '0801-2002-78901', 'M', '2', '9932-9876', 'ricardo.vasquez@unah.hn'),
			('19', 'Alejandra', 'Paola', 'Cruz', 'Ordoñez', '2001-09-09', '0801-2001-89012', 'F', '3', '9812-3456', 'alejandra.cruz@unah.hn'),
			('20', 'Daniel', 'Alejandro', 'Alvarado', 'Morales', '2000-06-30', '0801-2000-90123', 'M', '4', '9791-6789', 'daniel.alvarado@unah.hn'),
			('21', 'Melissa', 'Gabriela', 'López', 'García', '1997-01-10', '0801-1997-12345', 'F', '1', '9845-4321', 'melissa.lopez@unah.hn'),
			('22', 'Javier', 'Roberto', 'Martínez', 'Hernández', '1996-04-22', '0801-1996-23456', 'M', '0', '9823-6789', 'javier.martinez@unah.hn'),
			('23', 'Claudia', 'María', 'Reyes', 'Pérez', '1998-12-15', '0801-1998-34567', 'F', '2', '9777-5678', 'claudia.reyes@unah.hn'),
			('24', 'Fernando', 'David', 'Gómez', 'Ramírez', '1995-11-02', '0801-1995-45678', 'M', '3', '9934-4567', 'fernando.gomez@unah.hn'),
			('25', 'Paola', 'Isabel', 'Rodríguez', 'Galeano', '1994-08-19', '0801-1994-56789', 'F', '4', '9744-6789', 'paola.rodriguez@unah.hn');

select * from persona
-----------------------------------------------------------------
Insert Into becario (becario_id, persona_id, no_cuenta, carrera_id, beca_id, estado_beca_id, fecha_inicio_beca, contrasena, ultimo_acceso)
	Values ('B0', '6', '20223842099', 'CAR01', 0, 0, '2023-01-01', 'A1b@cD2e3F', '2024-01-01'),
			('B1', '7', '20182343949', 'CAR62', 1, 0, '2018-01-01', 'Z4x#yC5v9L', '2024-12-24'),
			('B2', '8', '20223177762', 'CAR03', 0, 0, '2023-01-01', 'T9u$pO8w7E', '2024-08-01'),
			('B3', '9', '20203825426', 'CAR54', 3, 0, '2020-01-01', 'Q6r#nA2t3P', '2024-01-10'),
			('B4', '10', '20223814716', 'CAR05', 4, 0, '2023-01-01', 'M8k@dL4v9F', '2024-12-01'),
			('B5', '11', '20193605068', 'CAR06', 5, 0, '2020-01-01', 'H7p%jE3r2T', '2024-08-16'),
			('B6', '12', '20203248213', 'CAR17', 6, 0, '2020-01-01', 'G6z!mA8p5Q', '2024-01-08'),
			('B7', '13', '20231103972', 'CAR08', 2, 0, '2023-01-01', 'N9w@xC7t6L', '2024-09-01'),
			('B8', '14', '20212955091', 'CAR09', 2, 0, '2022-01-01', 'R3t#yD5r9E', '2024-11-01'),
			('B9', '15', '20222809762', 'CAR10', 2, 0, '2022-01-01', 'L2m!zA4q6P', '2024-01-01'),
			('B10', '16', '20232474167', 'CAR11', 2, 0, '2024-01-01', 'P9x%wC8m7F', '2024-01-01'),
			('B11', '17', '20193147236', 'CAR01', 0, 0, '2020-01-01', 'T6j#nA2p9Q', '2024-01-01'),
			('B12', '18', '20231287097', 'CAR15', 1, 1, '2025-02-15', 'W3e@dL5v8R', '2024-02-16'),
			('B13', '19', '20233593590', 'CAR30', 2, 2, '2023-03-20', 'F7y%pE4t2N', '2022-03-21'),
			('B14', '20', '20202481964', 'CAR45', 3, 0, '2023-04-10', 'D5r!mA8q6L', '2023-04-11'),
			('B15', '21', '20201721991', 'CAR60', 4, 1, '2022-05-05', 'C8w#xN3t9R', '2022-05-06'),
			('B16', '22', '20211761792', 'CAR73', 5, 2, '2021-06-01', 'Q6m!zA2p7F', '2021-06-02'),
			('B17', '23', '20201101217', 'CAR10', 6, 0, '2020-07-20', 'P9e@dL4v6T', '2020-07-21'),
			('B18', '24', '20231234226', 'CAR25', 0, 1, '2023-08-15', 'M7x#yC8t3Q', '2023-08-16'),
			('B19', '25', '20192501271', 'CAR40', 1, 2, '2022-09-10', 'L5j!mA6p9F', '2022-09-11');

select * from becario
-----------------------------------------------------------------
Insert Into empleado (empleado_id, persona_id, no_empleado, contrasena, ultimo_acceso)
	Values ('E0', '0', '842099', 'Abc@1234Xy', '2024-01-01'),
			('E1', '1', '343949', 'Xyz#9876Lm', '2024-12-24'),
			('E2', '2', '177762', 'Lmn$4567Op', '2024-08-01'),
			('E3', '3', '825426', 'Pqr@8910Qx', '2024-01-10'),
			('E4', '4', '814716', 'UvW#2345Xy', '2024-12-01'),
			('E5', '5', '605068', 'Hjk%6789Lm', '2024-08-16');

select * from empleado
-----------------------------------------------------------------			
Insert Into reporte (reporte_id, becario_id, fecha_reporte, total_horas, observaciones)
	Values ('R0', 'B0', '2024-01-30', 20, 'Participación adecuada en actividades'),
	       ('R1', 'B1', '2024-01-30', 18, 'Cumplió con todas las actividades'),
	       ('R2', 'B2', '2024-01-30', 15, 'Requiere mejorar la puntualidad'),
	       ('R3', 'B3', '2024-01-30', 22, 'Horas adicionales en evento'),
	       ('R4', 'B4', '2024-01-30', 20, 'Cumplió con los requisitos'),
	       ('R5', 'B5', '2024-01-30', 16, 'Requiere mejora en la comunicación'),
	       ('R6', 'B6', '2024-01-30', 25, 'Trabajo destacado en equipo'),
	       ('R7', 'B7', '2024-01-30', 19, 'Resolvió problemas técnicos'),
	       ('R8', 'B8', '2024-01-30', 20, 'Trabajo satisfactorio'),
	       ('R9', 'B9', '2024-01-30', 18, 'Colaboración activa en tareas'),
	       ('R10', 'B10', '2024-01-30', 22, 'Buena organización en sus actividades'),
	       ('R11', 'B11', '2024-01-30', 17, 'Se destacó en su trabajo'),
	       ('R12', 'B12', '2024-01-30', 21, 'Excelente rendimiento'),
	       ('R13', 'B13', '2024-01-30', 20, 'Sin observaciones'),
	       ('R14', 'B14', '2024-01-30', 15, 'Problemas para completar horas'),
	       ('R15', 'B15', '2024-01-30', 24, 'Participó en actividades especiales'),
	       ('R16', 'B16', '2024-01-30', 18, 'Participación activa en capacitaciones'),
	       ('R17', 'B17', '2024-01-30', 16, 'Cumplió con tareas asignadas'),
	       ('R18', 'B18', '2024-01-30', 19, 'Cumplió con las metas establecidas'),
	       ('R19', 'B19', '2024-01-30', 20, 'Cumple con todas las actividades'),
	       ('R20', 'B0', '2024-02-27', 22, 'Apoyo en tareas adicionales'),
	       ('R21', 'B1', '2024-02-27', 20, 'Trabajo eficiente y puntual'),
	       ('R22', 'B2', '2024-02-27', 19, 'Mostró progreso en su desempeño'),
	       ('R23', 'B3', '2024-02-27', 21, 'Buen manejo de tareas grupales'),
	       ('R24', 'B4', '2024-02-27', 18, 'Asistencia a todas las reuniones'),
	       ('R25', 'B5', '2024-02-27', 20, 'Se destacó en actividades asignadas'),
	       ('R26', 'B6', '2024-02-27', 23, 'Buena disposición para tareas adicionales'),
	       ('R27', 'B7', '2024-02-27', 17, 'Sugerencias de mejora en tiempos de entrega'),
	       ('R28', 'B8', '2024-02-27', 18, 'Participación constante'),
	       ('R29', 'B9', '2024-02-27', 19, ''),
	       ('R30', 'B10', '2024-02-27', 21, 'Responsable y proactivo'),
	       ('R31', 'B11', '2024-02-27', 19, 'Cumplió con sus tareas asignadas'),
	       ('R32', 'B12', '2024-02-27', 20, 'Continúa mostrando progreso'),
	       ('R33', 'B13', '2024-02-27', 18, 'Requiere supervisión ocasional'),
	       ('R34', 'B14', '2024-02-27', 17, 'Mejoró en su desempeño'),
	       ('R35', 'B15', '2024-02-27', 23, 'Demuestra liderazgo en proyectos'),
	       ('R36', 'B16', '2024-02-27', 20, 'Progreso constante en su desarrollo'),
	       ('R37', 'B17', '2024-02-27', 18, 'Reportó problemas técnicos solucionados'),
	       ('R38', 'B18', '2024-02-27', 20, 'Participación destacada en actividades grupales'),
	       ('R39', 'B19', '2024-02-27', 22, 'Demuestra compromiso en sus tareas');

select * from reporte
-----------------------------------------------------------------
Insert Into actividades_disponibles (actividad_id, nombre_actividad, descripcion, fecha_actividad, numero_horas, ubicacion, imagen)
	Values ('A0', 'Jornada de Reforestación', 'Participación en la reforestación de áreas verdes.', '2024-03-15', 10, 'Ciudad Universitaria', 'imagen0.jpg'),
	       ('A1', 'Taller de Primeros Auxilios', 'Capacitación básica en primeros auxilios.', '2024-03-18', 10, 'Salón A-101', 'imagen1.jpg'),
	       ('A2', 'Feria de Ciencias', 'Apoyo en la organización y logística del evento.', '2024-03-20', 15, 'Auditorio Central', 'imagen2.jpg'),
	       ('A3', 'Charla sobre Energías Renovables', 'Asistencia y apoyo en la charla sobre el futuro de las energías limpias.', '2024-03-25', 5, 'Edificio de Ingeniería', 'imagen3.jpg'),
	       ('A4', 'Jornada de Limpieza', 'Limpieza de áreas comunes en el campus universitario.', '2024-03-28', 5, 'Parque Central', 'imagen4.jpg'),
	       ('A5', 'Torneo Deportivo', 'Apoyo en la coordinación de actividades deportivas.', '2024-04-01', 5, 'Gimnasio Universitario', 'imagen5.jpg'),
	       ('A6', 'Seminario de Innovación', 'Asistencia y registro de participantes en el seminario.', '2024-04-05', 5, 'Sala de Conferencias', 'imagen6.jpg'),
	       ('A7', 'Visita a Comunidad Rural', 'Apoyo en actividades comunitarias en una zona rural.', '2024-04-10', 20, 'Comunidad La Esperanza', 'imagen7.jpg'),
	       ('A8', 'Campaña de Donación de Sangre', 'Organización y registro de donantes.', '2024-04-15', 5, 'Clínica Universitaria', 'imagen8.jpg'),
	       ('A9', 'Cine Foro Educativo', 'Apoyo logístico y en la moderación del foro.', '2024-04-20', 3, 'Sala Multimedia', 'imagen9.jpg');

select * from actividades_disponibles
-----------------------------------------------------------------
Insert Into actividades_realizadas_x_becario (actividad_id, becario_id, fecha)
	Values ('A0', 'B0', '2024-03-15'),
	       ('A1', 'B1', '2024-03-18'),
	       ('A0', 'B2', '2024-03-20'),
	       ('A2', 'B3', '2024-03-25'),
	       ('A3', 'B4', '2024-03-28'),
	       ('A1', 'B5', '2024-04-01'),
	       ('A4', 'B6', '2024-04-05'),
	       ('A0', 'B7', '2024-04-10'),
	       ('A2', 'B8', '2024-04-15'),
	       ('A5', 'B9', '2024-04-20'),
	       ('A0', 'B10', '2024-03-15'),
	       ('A1', 'B11', '2024-03-18'),
	       ('A4', 'B12', '2024-03-20'),
	       ('A0', 'B13', '2024-03-25'),
	       ('A3', 'B14', '2024-03-28'),
	       ('A1', 'B15', '2024-04-01'),
	       ('A2', 'B16', '2024-04-05'),
	       ('A0', 'B17', '2024-04-10'),
	       ('A5', 'B18', '2024-04-15'),
	       ('A4', 'B19', '2024-04-20'),
	       ('A2', 'B0', '2024-04-01'),
	       ('A3', 'B1', '2024-04-05'),
	       ('A4', 'B2', '2024-04-10'),
	       ('A0', 'B3', '2024-04-15'),
	       ('A5', 'B4', '2024-04-20');

select * from actividades_realizadas_x_becario
-----------------------------------------------------------------
Insert Into planilla_x_mes (planilla_id, becario_id, fecha, estado_entrega, observaciones)
	Values ('P-012025', 'B0', '2025-01-30', 'N', ''),
		   ('P-012025', 'B1', '2025-01-30', 'S', 'Entregado'),
		   ('P-012025', 'B2', '2025-01-30', 'S', 'Entregado'),
		   ('P-012025', 'B3', '2025-01-30', 'S', 'Entregado'),
		   ('P-012025', 'B4', '2025-01-30', 'S', 'Entregado'),
		   ('P-012025', 'B5', '2025-01-30', 'S', 'Entregado'),
		   ('P-012025', 'B6', '2025-01-30', 'S', 'Entregado'),
		   ('P-012025', 'B7', '2025-01-30', 'S', 'Entregado'),
		   ('P-012025', 'B8', '2025-01-30', 'S', 'Entregado'),
		   ('P-012025', 'B9', '2025-01-30', 'S', 'Entregado'),
		   ('P-012025', 'B10', '2025-01-30', 'N', ''),
		   ('P-012025', 'B11', '2025-01-30', 'S', 'Vino despues de la fecha'),
		   ('P-012025', 'B12', '2025-01-30', 'S', ''),
		   ('P-012025', 'B13', '2025-01-30', 'S', ''),
		   ('P-012025', 'B14', '2025-01-30', 'S', ''),
		   ('P-012025', 'B15', '2025-01-30', 'S', ''),
		   ('P-012025', 'B16', '2025-01-30', 'S', ''),
		   ('P-012025', 'B17', '2025-01-30', 'S', ''),
		   ('P-012025', 'B18', '2025-01-30', 'S', ''),
		   ('P-012025', 'B19', '2025-01-30', 'N', '');

select * from planilla_x_mes
-----------------------------------------------------------------