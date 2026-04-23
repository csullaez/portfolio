import type { PersonalInfo, Project, Skill, Education, Experience, Language } from '../types/portfolio';

export const personalInfo: PersonalInfo = {
  name: 'Carlos Sullaez',
  lastName: 'Butron',
  role: 'Full Stack Developer',
  description: 'Desarrollador Full-Stack con más de 4 años de experiencia en el desarrollo de plataformas web en producción. Especializado en el diseño de APIs REST, arquitectura de microservicios y desarrollo de aplicaciones escalables.',
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
    description: 'Aplicación web para la visualización de indicadores técnicos de empresas telefónicas en Bolivia.',
    longDescription: 'Desarrollo de la aplicación desde su fase inicial utilizando Next.js con componentes UI reutilizables. Integración de mapas interactivos para visualización geográfica y procesamiento de coordenadas.',
    technologies: ['Next.js', 'NestJS', 'TypeScript', 'PostgreSQL', 'REST APIs', 'Maps'],
    demoUrl: '',
    repoUrl: '',
    featured: true,
    image: '/portfolio/images/seprec.webp'
  },
  {
    id: '2',
    title: 'SINA v2',
    description: 'Sistema de Información Normativa Autónoma con OCR y procesamiento de lenguaje natural.',
    longDescription: 'Lideré y participé en la creación de base de datos. Implementé Python para OCR de archivos PDF escaneados con limpieza mediante PLN. Desarrollo con SSR para renderizado dinámico de contenidos.',
    technologies: ['Next.js', 'NestJS', 'TypeScript', 'Python', 'PostgreSQL', 'Docker', 'MUI'],
    demoUrl: '',
    repoUrl: '',
    featured: true,
    image: '/portfolio/images/sina.webp'
  },
  {
    id: '3',
    title: 'BAIOC',
    description: 'Biblioteca del Autogobierno Indígenas Originario Campesino con motor de trámites y formularios dinámicos.',
    longDescription: 'Lideré equipo mediante asignación de tareas, code reviews y aprobación de merge requests. Desarrollé algoritmo de asignación de ítems según carga de trabajo de técnicos.',
    technologies: ['Next.js', 'NestJS', 'TypeScript', 'PostgreSQL', 'Docker', 'MUI'],
    demoUrl: '',
    repoUrl: '',
    featured: true,
    image: '/portfolio/images/baioc.webp'
  },
  {
    id: '4',
    title: 'Wayna Wasi',
    description: 'Sistema de Derechos Reales con motor de trámites y formularios dinámicos.',
    longDescription: 'Desarrollé módulo de motor de trámites en backend para gestionar campos de formularios dinámicos. Desplegué aplicación mediante PM2 y Nginx.',
    technologies: ['Next.js', 'NestJS', 'TypeORM', 'PostgreSQL', 'Docker', 'PM2', 'Nginx'],
    demoUrl: '',
    repoUrl: '',
    featured: false,
    image: '/portfolio/images/appdigitales.webp'
  },
{
    id: '5',
    title: 'SIBAI',
    description: 'Sistema Integral del Bono Anual de Indigencia con interoperabilidad gubernamental.',
    longDescription: 'Lideré equipo desde diseño de proyecto hasta integración con Ministerio de Economía y IBC para gestión de usuarios beneficiarios del bono.',
    technologies: ['Next.js', 'NestJS', 'TypeORM', 'PostgreSQL', 'Swagger', 'Docker'],
    demoUrl: '',
    repoUrl: '',
    featured: false,
    image: '/portfolio/images/sibai.webp'
  },
  {
    id: '6',
    title: 'CD V3 - Ciudadanía Digital',
    description: 'Plataforma de ciudadanía digital con videollamadas mediante OpenVidu.',
    longDescription: 'Desarrollé librerías para acceso a cámaras y micrófono. Implementé servidor de llamadas con OpenVidu bajo arquitectura de microservicios.',
    technologies: ['Next.js', 'NestJS', 'OpenVidu', 'TypeORM', 'PostgreSQL', 'Docker'],
    demoUrl: '',
    repoUrl: '',
    featured: false,
    image: '/portfolio/images/ciudadaniadigital.webp'
  },
  {
    id: '7',
    title: 'Capibara - Sistema de RRHH',
    description: 'Dashboard interactivo para gestión de permisos, horarios y bitácoras de usuarios.',
    longDescription: 'Diseñé dashboard con componentes MUI para visualización de permisos conforme al Reglamento Interno del Personal.',
    technologies: ['Next.js', 'NestJS', 'TypeORM', 'PostgreSQL', 'Swagger', 'MUI'],
    demoUrl: '',
    repoUrl: '',
    featured: false,
    image: '/portfolio/images/capibara.webp'
  },
  {
    id: '8',
    title: 'AppDigitales',
    description: 'Aplicación de control y visualización de rutas de transporte con procesamiento asíncrono.',
    longDescription: 'Finalicé desarrollo de aplicación PHP/CodeIgniter. Integré mapas interactivos, procesamiento de archivos KMZ con RabbitMQ y firma digital.',
    technologies: ['PHP', 'CodeIgniter', 'REST APIs', 'RabbitMQ', 'Python', 'Maps'],
    demoUrl: '',
    repoUrl: '',
    featured: false,
    image: '/portfolio/images/appdigitales.webp'
  }
];

export const skills: Skill[] = [
  { name: 'Node.js', level: 95, category: 'backend' },
  { name: 'NestJS', level: 90, category: 'backend' },
  { name: 'Express.js', level: 90, category: 'backend' },
  { name: 'TypeScript', level: 95, category: 'backend' },
  { name: 'PostgreSQL', level: 90, category: 'backend' },
  { name: 'REST APIs', level: 95, category: 'backend' },
  { name: 'Microservicios', level: 85, category: 'backend' },
  { name: 'TypeORM', level: 85, category: 'backend' },
  { name: 'Next.js', level: 95, category: 'frontend' },
  { name: 'React', level: 90, category: 'frontend' },
  { name: 'Vue.js', level: 75, category: 'frontend' },
  { name: 'Material UI', level: 90, category: 'frontend' },
  { name: 'Vuetify', level: 70, category: 'frontend' },
  { name: 'Docker', level: 85, category: 'tools' },
  { name: 'Nginx', level: 75, category: 'tools' },
  { name: 'PM2', level: 80, category: 'tools' },
  { name: 'AWS', level: 70, category: 'tools' },
  { name: 'CI/CD', level: 80, category: 'tools' },
  { name: 'Git', level: 90, category: 'tools' },
  { name: 'Jest', level: 75, category: 'tools' },
  { name: 'Cypress', level: 60, category: 'tools' }
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
    role: 'Analista Informático',
    company: 'ATT - Autoridad de Regulación y Fiscalización de Telecomunicaciones',
    period: 'Jun 2025 - Ene 2026',
    location: 'La Paz, Bolivia',
    achievements: [
      'Desarrollo de la aplicación web DriveTest desde su fase inicial',
      'Integración de mapas interactivos para visualización de coordenadas',
      'Procesamiento de archivos con coordenadas geográficas'
    ],
    technologies: ['Next.js', 'NestJS', 'TypeScript', 'PostgreSQL', 'REST APIs']
  },
  {
    id: '2',
    role: 'Profesional en Desarrollo y Aplicaciones de Sistemas',
    company: 'SEA - Servicio Estatal de Autonomías',
    period: 'Feb 2024 - May 2025',
    location: 'La Paz, Bolivia',
    achievements: [
      'Desarrollo de BAIOC - Biblioteca del Autogobierno Indígenas Originario Campesino',
      'Desarrollo de SINA v2 - Sistema de Información Normativa',
      'Liderazgo de equipo de desarrollo'
    ],
    technologies: ['Next.js', 'NestJS', 'TypeORM', 'PostgreSQL', 'Docker', 'MUI']
  },
  {
    id: '3',
    role: 'Consultor Individual de Línea en Desarrollo de Sistemas',
    company: 'AGETIC',
    period: 'Ene 2023 - Dic 2023',
    location: 'La Paz, Bolivia',
    achievements: [
      'Desarrollo de SIBAI - Sistema Integral del Bono Anual de Indigencia',
      'Desarrollo de Wayna Wasi - Sistema de Derechos Reales',
      'Desarrollo de Capibara - Sistema de RRHH',
      'Desarrollo de CD V3 - Ciudadanía Digital'
    ],
    technologies: ['Next.js', 'NestJS', 'TypeORM', 'PostgreSQL', 'Docker']
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
      'Implementación de integración de firma digital'
    ],
    technologies: ['Vue.js', 'Vuetify', 'NestJS', 'TypeORM', 'PostgreSQL']
  },
  {
    id: '5',
    role: 'Pasante Preprofesional en Desarrollo de Sistemas',
    company: 'AGETIC',
    period: 'Ene 2021 - Jun 2021',
    location: 'La Paz, Bolivia',
    achievements: [
      'Desarrollo de proyecto Plantillas - Correspondencia',
      'Mantenimiento de Pro-Bolivia',
      'Actualización de dependencias de proyectos legacy'
    ],
    technologies: ['Express.js', 'Angular.js', 'Node.js', 'PostgreSQL']
  }
];

export const teaching: Experience[] = [
  {
    id: '1',
    role: 'Docente en Carrera de Ingeniería de Sistemas',
    company: 'Universidad Salesiana de Bolivia',
    period: 'Feb 2025 - Dic 2025',
    location: 'La Paz, Bolivia',
    achievements: [
      'Docente de Programación en Internet',
      'Docente de Base de Datos I y II'
    ],
    technologies: []
  },
  {
    id: '2',
    role: 'Docente y Coordinador',
    company: 'EJE - Escuela de Jueces del Estado',
    period: 'Oct 2023',
    location: 'La Paz, Bolivia',
    achievements: [
      'Coordinador en curso de desarrollo de sistemas',
      'Área de Actualización de tecnologías'
    ],
    technologies: []
  },
  {
    id: '3',
    role: 'Auxiliar de Docencia Titular',
    company: 'UMSA - Carrera de Informática',
    period: 'Abr 2021 - Dic 2021',
    location: 'La Paz, Bolivia',
    achievements: [
      'Auxiliar de Especificaciones Formales y Verificación'
    ],
    technologies: []
  }
];

export const languages: Language[] = [
  { name: 'Español', level: 'Nativo' },
  { name: 'Inglés', level: 'Intermedio' }
];
