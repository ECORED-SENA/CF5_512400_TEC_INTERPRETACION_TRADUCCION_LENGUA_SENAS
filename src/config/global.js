export default {
  global: {
    componenteFormativo: 'La interpretación y las técnicas de verificación',
    descripcionCurso:
      'En este componente formativo se reconocerá la importancia del intérprete como mediador comunicativo al igual que las competencias necesarias para desempeñar de manera óptima su labor. También se identificarán los aspectos fundamentales que se deben considerar en la formación de los intérpretes para que respondan de manera óptima a las necesidades establecidas dentro de este contexto.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Interpretación y técnicas de verificación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Ejercicio de la interpretación',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'El intérprete de apoyo',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Técnicas de verificación',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Análisis y ajustes',
            hash: 't_1_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/512400_CF05_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar HTML',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Ejercicio de la interpretación',
      referencia:
        'Burad, V. (2009). <em>Una teoría interpretativa para el binomio lengua de señas-lengua hablada.</em>',
      tipo: 'Artículo',
      link:
        'https://cultura-sorda.org/wp-content/uploads/2015/03/Burad_teoria_interpretativa_binomio_lengua_senas_lengua_hablada_2009.pdf',
    },
    {
      tema: 'Ejercicio de la interpretación',
      referencia:
        'Canal 13. (2021). <em>¿Cómo es el trabajo de un intérprete de lengua de señas en Canal Trece Colombia?</em>',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=IvdIad2tFIM',
    },
    {
      tema: 'Ejercicio de la interpretación',
      referencia:
        'TEDxMarDelPlata. (2019). <em>La lengua de señas transforma realidades.</em>',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Jis9j5gtZgA',
    },
  ],
  glosario: [
    {
      termino: 'Fonética',
      significado:
        'estudio que se realiza a los sonidos físicos de una lengua desde una perspectiva acústica y fonológica; también el lugar y el modo de cómo se produce; además de su clasificación, que se divide en tres principales ramas: fonética articulatoria, fonética acústica y fonética auditiva o perceptiva.',
    },
    {
      termino: 'Intérprete de apoyo',
      significado:
        'encargado de acompañar al intérprete y realizar relevos durante la prestación del servicio, está pendiente de las necesidades que dentro del evento puedan presentarse.',
    },
    {
      termino: 'Pragmática',
      significado:
        'parte de la lingüística que se enfoca en el estudio del lenguaje y cómo se relacionan los hablantes y el contexto.',
    },
    {
      termino: 'Traslatorio',
      significado: 'cambiar, mover o transferir de una lengua a otra.',
    },
    {
      termino: 'Técnicas de verificación',
      significado:
        'procedimientos que aportan en el control de la calidad para el debido cumplimiento de los procesos de interpretación y traducción.',
    },
  ],
  referencias: [
    {
      referencia:
        'Gauthier, (2016). <em>Ensayando sobre la interpretación en Lengua de Señas Venezolana.</em>',
      link:
        'https://cultura-sorda.org/ensayando-sobre-la-interpretacion-en-lengua-de-senas-venezolana/',
    },
    {
      referencia:
        'Insor (2018). <em>La enseñanza de la lengua escrita como segunda lengua en la básica primaria. Una experiencia desde el PEBBI.</em> Insor.',
      link:
        'http://www.insor.gov.co/home/wp-content/uploads/filebase/cart_lengua_esc.pdf',
    },
    {
      referencia:
        'Insor (2019). <em>Caracterización de ciudadanos, usuarios y grupos de interés.</em> Insor.',
      link:
        'http://www.insor.gov.co/home/descargar/Caracterizacion_ciudadano_usuarios_grupos_interes_2019.pdf',
    },
    {
      referencia:
        'Martínez, D. L., Barreto, A. G., Corredor, A., y Zapata, S. A. (2018). <em>Formación en Lengua de Señas Colombiana LSC: Una sistematización de la experiencia de Fenascol</em>. UNAD - Fenascol.',
      link: 'https://hemeroteca.unad.edu.co/index.php/book/issue/view/280',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes ',
          cargo: 'Responsable de línea de producción',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Jhacesiz Mary Hincapié Atehortúa',
          cargo: 'Instructora',
          centro: 'Centro de Servicios de Salud - Regional Antioquia.',
        },
        {
          nombre: 'Manuel Alejandro Garzón',
          cargo: 'Instructor',
          centro: 'Centro de Servicios de Salud - Regional Antioquia.',
        },
        {
          nombre: 'German Albeiro Saldarriga ',
          cargo: 'Instructora',
          centro: 'Centro de Servicios de Salud - Regional Antioquia.',
        },
        {
          nombre: 'Adriana María Bustamante',
          cargo: 'Profesional Diseño Curricular',
          centro: 'Centro de Servicios de Salud - Regional Antioquia.',
        },
        {
          nombre: 'Nidian Yarume Ortiz Buitrago',
          cargo: 'Experta temática',
          centro:
            'Centro de Formación en Talento Humano y Salud - Regional Distrito Capital.',
        },
        {
          nombre: 'Jeimy Lorena Romero Perilla',
          cargo: 'Diseñador Instruccional',
          centro:
            'Centro de la Industria, la Empresa y los Servicios - Regional Norte de Santander.',
        },
        {
          nombre: 'Luz Mila Pacheco Fuentes',
          cargo: 'Diseñador Instruccional',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Sergio Arturo Medina Castillo',
          cargo: 'Evaluador Instruccional',
          centro:
            'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
        },
        {
          nombre: 'Ana Catalina Córdoba Sus ',
          cargo: 'Asesora Metodológica',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'José Gabriel Ortiz Abella ',
          cargo: 'Corrector de estilo ',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yerson Fabian Zarate Saavedra',
          cargo: 'Diseñador web',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Francisco José Lizcano Reyes',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Wilson Andrés Arenales Cáceres',
          cargo: 'Storyboard e ilustración',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Carmen Alicia Martínez Torres',
          cargo: 'Animador y Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Emilsen Alfonso Bautista',
          cargo: 'Actividad didáctica',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Zuleidy María Ruíz Torres',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Daniel Ricardo Mutis',
          cargo: 'Validación de contenidos accesibles',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
