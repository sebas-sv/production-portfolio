import React from 'react';

const constants = {
    name: 'Sebas Solis',
    firstName: 'Sebastián',
    lastName: 'Solís Vilches',
    address: 'Sevilla (Spain)',
    phone: '+34 633 181 157',
    email: 'sebas.solis.dev@gmail.com',
}

export const texts = {
    es: {
        //General
        constants: constants,
        // Home
        im: constants.name,
        description: 'Descripción',
        designation: 'Desarrollador Web',
        moreAboutMe: 'Más sobre mí',
        // Home Menu
        home: 'Principal',
        profile: 'Perfil',
        portfolio: 'Portafolio',
        contact: 'Contacto',
        blog: 'Blog',
        // CV
        cv: 'es/CV-SebastianSolis.pdf',
        // About me
        about: 'Sobre',
        me: 'Mí',
        resume: 'Currículum',
        my: 'Mi',
        works: 'proyectos',
        // About Index
        personalInfo: 'Información personal',
        downloadCv: 'Descargar CV',
        mySkills: 'Mis habilidades',
        experience: 'Experiencia',
        and: 'y',
        education: 'educación',
        // About Archievements
        yearsOf: 'años de',
        completed: 'proyectos completados',
        projects: '',
        // About Education
        fpTitle: ' CFGS',
        daw: 'Desarrollo de Aplicaciones Web',
        degreeTitle: ' Grado',
        ugr: 'UNIVERSIDAD DE GRANADA',
        musicology: 'Historia y Ciencias de la Música',
        bachelorTitle: ' Bachiller',
        technologicalSciences: 'Ciencias Tecnológicas',
        // About Experience
        present: 'actualidad',
        aemPosition: 'Desarrollador AEM',
        aemDetails: 'Conocimientos en Java, HTL, CRX and Groovy para la creación de modelos, plantillas, paquetes and scripts automatizados respectivamente',
        guitarristPosition: 'Guitarrista',
        guitarristCompany: 'Múltiples orquestas y bandas ',
        guitarristDetails: 'Guitarrista eléctrico de música moderna con experiencia en giras a nivel nacional',
        // About PersonalInfo
        spanish: 'España',
        firstName: 'Nombre',
        lastName: 'Apellidos',
        nationality: 'Nacionalidad',
        address: 'Dirección',
        phone: 'Teléfono',
        email: 'Email',
        // Portfolio
        all: 'MOSTRAR TODO',
        apps: 'APLICACIONES',
        games: 'JUEGOS',
        neuronalNetworks: 'REDES NEURONALES',
        // Portfolio modal
        project: 'Proyecto',
        client: 'Cliente',
        languages: 'Lenguajes',
        repository: 'Repositorio',
        open: 'Abrir',
        // Portafolio items
        webGame: 'Juego Web',
        neuronalNetwork: 'Red neuronal',
        webApp: 'Aplicación Web',
        dinosaurGame: 'Juego del dinosaurio',
        IACelsius: 'Red neuronal de temperaturas',
        catMemo: 'Juego CatMemo',
        expenseIncomeControl: 'Control de gastos e ingresos personales',
        gifFinder: 'Buscador de gifs',
        // Adress
        mailMe: 'escríbeme',
        callMe: 'llámame',
        // Contact
        contactTitle1: 'ponte en',
        contactTitle2: ' contacto',
        contactSubtitle: 'Contacto',
        contactContentTitle: "¿A qué esperas?",
        contactContentSubtitle: "No dudes en ponerte en contacto conmigo. Siempre estoy abierto a discutir nuevos proyectos, ideas creativas u oportunidades para formar parte de tus proyectos.",
        yourName: 'TU NOMBRE',
        nameRequired: 'El nombre es obligatorio',
        emailRequired: 'El email es obligatorio',
        emailFormat: 'El formato del email no es válido',
        yourEmail: 'TU EMAIL',
        yourSubject: 'TU ASUNTO',
        subjectRequired: 'El asunto es obligatorio',
        yourMessage: 'TU MENSAJE',
        messageRequired: 'El mensaje es obligatorio',
        sendMessage: 'Enviar mensaje',
        emailOk: 'El email ha sido enviado correctamente',
        emailFail: 'El email no se ha podido enviar, vuelva a intentarlo más tarde',
        // Blog
        posts: 'publicaciones',

    },
    en: {
        //General
        constants: constants,
        // Home
        im: `I'm ${constants.name}`,
        description: 'Description',
        designation: 'Web Developer',
        moreAboutMe: 'More about me',
        // Home Menu
        home: 'Home',
        profile: 'About',
        portfolio: 'Portfolio',
        contact: 'Contact',
        blog: 'Blog',
        // CV
        cv: 'en/CV-SebastianSolis.pdf',
        // About me
        about: 'About',
        me: 'Me',
        resume: 'Resume',
        my: 'My',
        works: 'works',
        // About Index
        personalInfo: 'Personal info',
        downloadCv: 'Download CV',
        mySkills: 'My skills',
        experience: 'Experience',
        and: '&',
        education: 'Education',
        // About Archievements
        yearsOf: 'years of',
        completed: 'completed',
        projects: 'projects',
        // About Education
        fpTitle: ' EQF Level 5',
        daw: 'Web application development',
        degreeTitle: ' EQF Level 6',
        ugr: 'UNIVERSITY OF GRANADA',
        musicology: 'Musicology',
        bachelorTitle: ' EQF Level 3',
        technologicalSciences: 'Technological Sciences',
        // About Experience
        present: 'present',
        aemPosition: 'AEM Developer',
        aemDetails: 'Knowledge of Java, HTL, CRX and Groovy for the creation of models, templates, packages and automated scripts respectively',
        guitarristPosition: 'Guitarrist',
        guitarristCompany: 'Multiple orchestras and bands',
        guitarristDetails: 'Modern electric guitarist with national touring experience',
        // About PersonalInfo
        spanish: 'Spanish',
        firstName: 'First name',
        lastName: 'Last name',
        nationality: 'Nationality',
        address: 'address',
        phone: 'phone',
        email: 'email',
        // Portfolio
        all: 'ALL',
        apps: 'APPS',
        games: 'GAMES',
        neuronalNetworks: 'NEURONAL NETWORKS',
        // Portfolio modal
        project: 'Project',
        client: 'Client',
        languages: 'Languages',
        repository: 'Repository',
        open: 'Open',
        // Portafolio items
        webGame: 'Web Game',
        neuronalNetwork: 'Neuronal network',
        webApp: 'Web Application',
        dinosaurGame: 'Dinosaur game',
        IACelsius: 'Temperature neural network',
        catMemo: 'CatMemo game',
        expenseIncomeControl: 'Personal income and expense control',
        gifFinder: 'Gif Finder',
        // Adress
        mailMe: 'mail me',
        callMe: 'call me',
        // Contact
        contactTitle1: 'get in',
        contactTitle2: ' touch',
        contactSubtitle: 'contact',
        contactContentTitle: "Don't be shy !",
        contactContentSubtitle: "Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.",
        yourName: 'YOUR NAME',
        nameRequired: 'Name is required ',
        emailRequired: 'Email is required ',
        emailFormat: 'Entered value does not match email format ',
        yourEmail: 'YOUR EMAIL',
        yourSubject: 'YOUR SUBJECT',
        subjectRequired: 'Subject is required',
        yourMessage: 'YOUR MESSAGE',
        messageRequired: 'Message is required',
        sendMessage: 'Send Message',
        emailOk: 'The email has been sent successfully',
        emailFail: 'The email could not be sent, please try again later.',
        // Blog
        posts: 'posts',
    },
}

const LangContext = React.createContext(texts.en);

export default LangContext;