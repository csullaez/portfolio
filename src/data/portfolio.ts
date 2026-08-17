import type { PersonalInfo, Project, Skill, Education, Experience, Language } from '../types/portfolio';

export const personalInfo: PersonalInfo = {
  name: 'Carlos Sullaez',
  lastName: 'Butron',
  role: 'Desarrollador Fullstack TypeScript | Administrador de Base de Datos | Docente',
  description: 'Desarrollador Fullstack con más de 5 años de experiencia construyendo aplicaciones web en producción con Node.js, NestJS, TypeScript, PostgreSQL y Next.js. Especializado en APIs REST, arquitectura de microservicios, integración entre sistemas y plataformas orientadas a datos. Experiencia liderando desarrollo y despliegue en entornos Linux con Docker, Nginx y PM2.',
  email: 'csullaez@gmail.com',
  phone: '+591 75821602',
  location: 'La Paz, Bolivia',
  cvUrl: '/Carlos Sullaez CV Developer FullStack.pdf',
  socialLinks: [
    { platform: 'GitHub', url: 'https://github.com/csullaez', icon: 'github' },
    { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/carlos-sullaez-butron/', icon: 'linkedin' }
  ]
};

export const projects: Project[] = [
  {
    id: '1',
    title: 'DriveTest',
    description: 'Plataforma para análisis de calidad de servicio de empresas telefónicas en Bolivia con más de 20,000 radiobases.',
    longDescription: 'Lideré el desarrollo de DriveTest, plataforma utilizada por la Dirección de Fiscalización de la ATT para analizar mediciones de calidad de servicio de Entel, Tigo y Viva sobre una infraestructura nacional de más de 20,000 radiobases. Diseñé la base de datos y los módulos iniciales del sistema para soportar cargas con millones de registros por medición y más de 20 indicadores técnicos, centralizando el procesamiento y validación de datos que antes dependían de análisis manuales. Implementé servicios en NestJS y visualización en Next.js + MUI para gestionar datos geoespaciales.',
    technologies: ['Next.js', 'NestJS', 'TypeScript', 'PostgreSQL', 'REST APIs', 'Maps', 'MUI'],
    demoUrl: '',
    repoUrl: '',
    featured: true,
    image: ''
  },
  {
    id: '2',
    title: 'SINA v2 - Sistema de Información Normativa',
    description: 'Sistema de información normativa con OCR y procesamiento de lenguaje natural.',
    longDescription: 'Lideré de extremo a extremo la modernización de SINA v2, desde requerimientos y diseño de base de datos hasta desarrollo, QA, despliegue y salida a producción, coordinando equipos de hasta 7 personas. Escalé la capacidad de registro de 3,000 a 20,000 normas por año, elevando el repositorio de 30,000 registros acumulados en 10 años a 60,000 registros en aproximadamente 18 meses. Implementé OCR con Python y rediseñé el flujo de revisión documental, reduciendo los tiempos de validación de 30 días a 1 día.',
    technologies: ['Next.js', 'NestJS', 'TypeScript', 'Python', 'PostgreSQL', 'Docker', 'MUI', 'OCR', 'PLN'],
    demoUrl: 'https://sina.sea.gob.bo/inicio',
    repoUrl: '',
    featured: true,
    image: '/images/sina.webp'
  },
  {
    id: '3',
    title: 'BAIOC - Biblioteca del Autogobierno Indígenas Originario Campesino',
    description: 'Sistema de gestión documental con motor de trámites y formularios dinámicos.',
    longDescription: 'Diseñé y lideré el desarrollo de BAIOC desde cero con Next.js, NestJS y PostgreSQL, centralizando información documental mediante 15 colecciones iniciales, 5 flujos operativos y formularios dinámicos configurables. Lideré el equipo mediante asignación de tareas, control de tareas con Taiga, code reviews y aprobación de merge requests. Desarrollé flujos de trabajo para usuarios técnicos, algoritmo de asignación de ítems según carga de trabajo semanal y módulos de notificación por correo.',
    technologies: ['Next.js', 'NestJS', 'TypeScript', 'PostgreSQL', 'Docker', 'MUI', 'TypeORM', 'Nodemailer'],
    demoUrl: 'https://baioc.sea.gob.bo/inicio',
    repoUrl: '',
    featured: true,
    image: '/images/baioc.webp'
  },
  {
    id: '4',
    title: 'Wayna Wasi - Sistema de Derechos Reales',
    description: 'Sistema de gestión de derechos reales con formularios dinámicos.',
    longDescription: 'Diseñé y lideré la centralización de información proveniente de 64 bases de datos, reemplazando una plataforma heredada de los años 90 por formularios dinámicos y una arquitectura más mantenible. Desarrollé el módulo de motor de trámites en el backend para gestionar los campos de cada formulario, y un formulario dinámico en frontend que interpreta la información de los campos obtenidos del backend. Desplegué la aplicación mediante PM2 y Nginx en servidor Linux.',
    technologies: ['Next.js', 'NestJS', 'TypeORM', 'PostgreSQL', 'Docker', 'PM2', 'Nginx', 'MUI'],
    demoUrl: '',
    repoUrl: '',
    featured: false,
    image: ''
  },
  {
    id: '5',
    title: 'SIBAI - Sistema Integral del Bono Anual de Indigencia',
    description: 'Sistema de gestión de beneficios con interoperabilidad gubernamental.',
    longDescription: 'Reduje en más del 95% el tiempo de procesamiento del pago de beneficios, pasando de 15 días a medio día, mediante integraciones con MEFP, Banco Unión e IBC para agilizar la validación y atención a personas con discapacidad. Lideré el equipo desde el diseño del proyecto, diseño de base de datos e integración de interoperabilidad con el Ministerio de Economía e IBC para obtener la lista de usuarios elegibles para recibir el bono.',
    technologies: ['Next.js', 'NestJS', 'TypeORM', 'PostgreSQL', 'Swagger', 'Docker', 'MUI'],
    demoUrl: 'https://sibai.ibc.gob.bo/login',
    repoUrl: '',
    featured: false,
    image: '/images/sibai.webp'
  },
  {
    id: '6',
    title: 'CD V3 - Ciudadanía Digital',
    description: 'Plataforma de ciudadanía digital con videollamadas y procesamiento de documentos.',
    longDescription: 'Contribuí a la evolución de Ciudadanía Digital V3 mejorando el módulo de preregistro y desarrollando un servidor de llamadas con OpenVidu, además de librerías para acceso a micrófonos y cámaras. La plataforma alcanzó cerca de 400,000 ciudadanos registrados. Desarrollé servicios backend para la creación y gestión de llamadas, así como para la gestión de usuarios enviando documentos adjuntos con multer.',
    technologies: ['Next.js', 'NestJS', 'OpenVidu', 'TypeORM', 'PostgreSQL', 'Docker', 'MUI', 'WebRTC'],
    demoUrl: 'https://ciudadaniadigital.bo/home',
    repoUrl: '',
    featured: false,
    image: '/images/ciudadaniadigital.webp'
  },
  {
    id: '7',
    title: 'Capibara - Sistema de RRHH',
    description: 'Dashboard interactivo para gestión de permisos, horarios y bitácoras.',
    longDescription: 'Desarrollé un dashboard interactivo con componentes de Material UI que facilita la visualización de permisos de cada usuario, su horario y las bitácoras de solicitudes de salida. Implementé la creación de permisos conforme al Reglamento Interno del Personal, gestionando también las comisiones asignadas por cada usuario siguiendo la lógica de negocio. Realicé documentación con Swagger de los servicios del backend.',
    technologies: ['Next.js', 'NestJS', 'TypeORM', 'PostgreSQL', 'Swagger', 'MUI', 'Docker'],
    demoUrl: 'https://capibara.agetic.gob.bo/login',
    repoUrl: '',
    featured: false,
    image: '/images/capibara.webp'
  },
  {
    id: '8',
    title: 'AppDigitales',
    description: 'Aplicación de control de rutas de transporte con procesamiento asíncrono.',
    longDescription: 'Modernicé AppDigitales sobre PHP/CodeIgniter 3 incorporando módulos en Python y RabbitMQ para procesar archivos KMZ mensuales, reduciendo en más del 90% el tiempo operativo del registro y validación de datos. Desarrolle integración de mapas interactivos para el control y visualización de rutas, procesamiento de archivos KMZ, sistema de procesamiento asíncrono y firma digital para la emisión de certificados.',
    technologies: ['PHP', 'CodeIgniter', 'REST APIs', 'RabbitMQ', 'Python', 'Maps', 'PostgreSQL'],
    demoUrl: 'https://appdigitales.att.gob.bo/',
    repoUrl: '',
    featured: false,
    image: '/images/appdigitales.webp'
  },
  {
    id: '9',
    title: 'SEPREC - Servicio Plurinacional de Registro de Comercio',
    description: 'Sistema de registro comercial con gaceta y búsqueda de empresas.',
    longDescription: 'Desarrollé la Gaceta para permitir el acceso a las publicaciones de trámites realizados por empresas, integrando buscadores por categorías como publicación, razón social, número matrícula, resumen y fecha. Desarrollé e implementé servicios backend para el envío de documentos PDF, integración de servicios externos y validaciones para asegurar que los trámites cumplan con los requisitos específicos de cada tipo de empresa sobre una base de cerca de 396,000 unidades económicas.',
    technologies: ['Vue.js', 'Vuetify', 'NestJS', 'TypeORM', 'PostgreSQL', 'Swagger', 'Docker'],
    demoUrl: '',
    repoUrl: '',
    featured: false,
    image: '/images/seprec.webp'
  },
  {
    id: '10',
    title: 'Proyecto Base - Core',
    description: 'Sistema core con firma digital y aprobación de documentos.',
    longDescription: 'Implementé la integración de firma digital utilizando un token (ADSIB) y Firmatic, desarrollando un hook para facilitar el proceso de firma dentro de la aplicación frontend. Desarrollé la integración de la aprobación de documentos mediante Ciudadanía Digital mediante interoperabilidad. Desarrollé componentes para mostrar bitácoras de un usuario y documentos con MUI.',
    technologies: ['Next.js', 'NestJS', 'TypeORM', 'PostgreSQL', 'Swagger', 'Docker', 'MUI'],
    demoUrl: '',
    repoUrl: '',
    featured: false,
    image: ''
  }
];

export const skills: Skill[] = [
  { name: 'JavaScript', category: 'backend' },
  { name: 'TypeScript', category: 'backend' },
  { name: 'Python', category: 'backend' },
  { name: 'Node.js', category: 'backend' },
  { name: 'NestJS', category: 'backend' },
  { name: 'Express.js', category: 'backend' },
  { name: 'PostgreSQL', category: 'backend' },
  { name: 'MySQL', category: 'backend' },
  { name: 'MongoDB', category: 'backend' },
  { name: 'TypeORM', category: 'backend' },
  { name: 'REST APIs', category: 'backend' },
  { name: 'Microservicios', category: 'backend' },
  { name: 'Next.js', category: 'frontend' },
  { name: 'React', category: 'frontend' },
  { name: 'Vue.js', category: 'frontend' },
  { name: 'Material UI', category: 'frontend' },
  { name: 'Vuetify', category: 'frontend' },
  { name: 'OpenVidu', category: 'frontend' },
  { name: 'Docker', category: 'tools' },
  { name: 'Nginx', category: 'tools' },
  { name: 'PM2', category: 'tools' },
  { name: 'Linux', category: 'tools' },
  { name: 'CI/CD', category: 'tools' },
  { name: 'Git', category: 'tools' },
  { name: 'Swagger', category: 'tools' },
  { name: 'Jest', category: 'tools' },
  { name: 'RabbitMQ', category: 'tools' }
];

export const education: Education[] = [
  {
    id: '1',
    title: 'Licenciatura en Informática',
    institution: 'Universidad Mayor de San Andrés',
    period: '2016 - 2021',
    type: 'degree',
    description: 'Carrera de Informática'
  },
  {
    id: '2',
    title: 'Maestría en Informática Forense y Seguridad de la Información',
    institution: 'Universidad Mayor de San Andrés',
    period: '2023 - Cursando',
    type: 'degree',
    description: 'Postgrado en Informática'
  },
  {
    id: '3',
    title: 'Diplomado en Seguridad Informática',
    institution: 'Universidad Mayor de San Andrés',
    period: '2025',
    type: 'certification',
    description: 'Postgrado en Informática'
  },
  {
    id: '4',
    title: 'Diplomado en Auditoria Informática',
    institution: 'Universidad Mayor de San Andrés',
    period: '2024',
    type: 'certification',
    description: 'Postgrado en Informática'
  },
  {
    id: '5',
    title: 'Diplomado en Ciencia de Datos y Machine Learning',
    institution: 'Universidad Mayor de San Andrés',
    period: '2023',
    type: 'certification',
    description: 'Postgrado en Informática'
  },
  {
    id: '6',
    title: 'Diplomado en Educación Superior',
    institution: 'Universidad Mayor de San Andrés',
    period: '2022',
    type: 'certification',
    description: 'Postgrado de Ciencias de la Educación'
  }
];

export const experience: Experience[] = [
  {
    id: '1',
    role: 'Desarrollador Fullstack / Lider Técnico / Administrador de Base de Datos',
    company: 'ATT - Autoridad de Regulación y Fiscalización de Telecomunicaciones',
    period: 'Jun 2025 - Ene 2026',
    location: 'La Paz, Bolivia',
    achievements: [
      'Lideré el desarrollo de DriveTest para analizar mediciones de calidad de servicio de Entel, Tigo y Viva sobre más de 20,000 radiobases',
      'Diseñé la base de datos y módulos iniciales del sistema para soportar millones de registros por medición',
      'Implementé servicios en NestJS y visualización en Next.js + MUI para gestionar datos geoespaciales',
      'Modernicé AppDigitales incorporando módulos en Python y RabbitMQ para procesar archivos KMZ'
    ],
    technologies: ['Next.js', 'NestJS', 'TypeScript', 'PostgreSQL', 'REST APIs', 'Maps', 'Python', 'RabbitMQ', 'PHP']
  },
  {
    id: '2',
    role: 'Profesional en Desarrollo y Aplicaciones de Sistemas',
    company: 'SEA - Servicio Estatal de Autonomías',
    period: 'Feb 2024 - May 2025',
    location: 'La Paz, Bolivia',
    achievements: [
      'Lideré de extremo a extremo la modernización de SINA v2 coordinando equipos de hasta 7 personas',
      'Escalé la capacidad de registro de 3,000 a 20,000 normas por año',
      'Implementé OCR con Python reduciendo tiempos de validación de 30 días a 1 día',
      'Diseñé y lideré el desarrollo de BAIOC desde cero con 15 colecciones y 5 flujos operativos'
    ],
    technologies: ['Next.js', 'NestJS', 'TypeORM', 'PostgreSQL', 'Docker', 'MUI', 'Python', 'OCR']
  },
  {
    id: '3',
    role: 'Desarrollador Fullstack / Líder Técnico',
    company: 'AGETIC',
    period: 'Ene 2023 - Dic 2023',
    location: 'La Paz, Bolivia',
    achievements: [
      'Reduje en más del 95% el tiempo de procesamiento del pago de beneficios en SIBAI (de 15 días a medio día)',
      'Diseñé y lideré la centralización de información de 64 bases de datos en Wayna Wasi',
      'Contribuí a la evolución de Ciudadanía Digital V3 alcanzando cerca de 400,000 ciudadanos registrados',
      'Desarrollé trámites dinámicos y la Gaceta de SEPREC sobre 396,000 unidades económicas'
    ],
    technologies: ['Next.js', 'NestJS', 'TypeORM', 'PostgreSQL', 'Docker', 'MUI', 'OpenVidu', 'Vue.js']
  },
  {
    id: '4',
    role: 'Consultor Individual de Línea en Desarrollo de Sistemas',
    company: 'AGETIC',
    period: 'Ene 2022 - Dic 2022',
    location: 'La Paz, Bolivia',
    achievements: [
      'Desarrollo de SEPREC - Servicio Plurinacional de Registro de Comercio',
      'Desarrollo de CD V3 - Ciudadanía Digital (Core)',
      'Implementación de integración de firma digital con token ADSIB'
    ],
    technologies: ['Vue.js', 'Vuetify', 'NestJS', 'TypeORM', 'PostgreSQL', 'Docker']
  },
  {
    id: '5',
    role: 'Pasante Preprofesional en Desarrollo de Sistemas',
    company: 'AGETIC',
    period: 'Jul 2021 - Dic 2021',
    location: 'La Paz, Bolivia',
    achievements: [
      'Desarrollo de proyecto Plantillas - Correspondencia con Express.js y AngularJS',
      'Mantenimiento de Pro-Bolivia',
      'Actualización de dependencias de proyectos legacy'
    ],
    technologies: ['Express.js', 'Angular.js', 'Node.js', 'PostgreSQL', 'Nodemailer']
  },
  {
    id: '6',
    role: 'Desarrollador Frontend',
    company: 'COPAVEL',
    period: 'Ene 2021 - Jun 2021',
    location: 'La Paz, Bolivia',
    achievements: [
      'Creación de componentes para la interfaz de usuario UI',
      'Desarrollo e implementación de componentes con Vue JS y Vuetify'
    ],
    technologies: ['Vue.js', 'Vuetify']
  },
  {
    id: '7',
    role: 'Desarrollador de Software',
    company: 'Cooperativa Minera "Doce Pabellones"',
    period: 'Mar 2020 - Jul 2021',
    location: 'La Paz, Bolivia',
    achievements: [
      'Desarrollo de Página Web, Sistema de Recursos Humanos',
      'Sistema para manejo de archivos y Aplicación Móvil',
      'Apoyo en integración de APIs y pruebas funcionales'
    ],
    technologies: ['Vue.js', 'Vuetify', 'Node.js', 'PostgreSQL']
  }
];

export const teaching: Experience[] = [
  {
    id: '1',
    role: 'Docente en Carrera de Ingeniería de Sistemas',
    company: 'UNANDES - Universidad de Los Andes',
    period: 'Mar 2025 - actualidad',
    location: 'La Paz, Bolivia',
    achievements: [
      'Docente de Criptografía y Seguridad',
      'Docente de Redes I'
    ],
    technologies: []
  },
  {
    id: '2',
    role: 'Docente en Carrera de Ingeniería de Sistemas',
    company: 'USB - Universidad Salesiana de Bolivia',
    period: 'Feb 2025 - Dic 2025',
    location: 'La Paz, Bolivia',
    achievements: [
      'Docente de Programación en Internet',
      'Docente de Base de Datos I y II'
    ],
    technologies: []
  },
  {
    id: '3',
    role: 'Docente y Coordinador',
    company: 'EJE - Escuela de Jueces del Estado',
    period: 'Oct 2023',
    location: 'La Paz, Bolivia',
    achievements: [
      'Coordinador en curso de desarrollo de sistemas',
      'Docente de Desarrollo de Software con herramientas Open Source',
      'Área de Actualización de tecnologías'
    ],
    technologies: []
  },
  {
    id: '4',
    role: 'Auxiliar de Docencia Titular',
    company: 'UMSA - Carrera de Informática',
    period: 'Abr 2021 - Dic 2021',
    location: 'La Paz, Bolivia',
    achievements: [
      'Auxiliar de Especificaciones Formales y Verificación'
    ],
    technologies: []
  },
  {
    id: '5',
    role: 'Auxiliar de Docencia Titular',
    company: 'UMSA - Carrera de Informática',
    period: 'Ago 2020 - Dic 2020',
    location: 'La Paz, Bolivia',
    achievements: [
      'Auxiliar de Especificaciones Formales y Verificación'
    ],
    technologies: []
  }
];

export const languages: Language[] = [
  { name: 'Español', level: 'Nativo' },
  { name: 'Inglés', level: 'Intermedio' },
  { name: 'Ruso', level: 'Básico' }
];
