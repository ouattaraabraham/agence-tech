// import { FaFacebookF } from "react-icons/fa";
// import { FaWhatsapp } from "react-icons/fa";
// import { FaLinkedinIn } from "react-icons/fa";
// import { CiGlobe } from "react-icons/ci";


import {logo, iconWeb, iconDesign, iconMarketing , iconGpPlus } from "../assets/icon";

import {design,marketing,equipeWeb,convertir,empoule,transformer,illus,serviceAcceuilWeb,marketteFone , heroAcceuil , projet1, projet2, projet3,projet4,projet5,projet6,projet7, image1} from "../assets/image"



export const Illus=illus
//logo

export const Logo= logo
//DATA DATAACCEUIL

export const DATAACCEUIL ={
  header:{
    left : {
      h1 : "Agence Marketing Digital & Web",
      p : "Nous sommes Astra One, votre partenaire de confiance pour des solutions de communication, design, UX, et de développement d'applications web innovantes. Notre mission est de transformer vos idées en réalités numériques, en vous offrant des services de haute qualité adaptés à vos besoins spécifiques.",
      btn : {txt:"contacter-Nous" , link : "/contact",},
    },
    right : {
      img : heroAcceuil ,
  
    },
  },
  presantation:{
    h2:"NOS SERVICES CREATION",
    service:[
    {
      id: 0,
      link:"/web-design",
      img: equipeWeb,
      name: "Conception site web",
      p:"Nous adoptons une approche personnalisée pour chaque projet de création de site internet. Notre équipe d'experts travaille en étroite collaboration avec vous pour comprendre vos objectifs, votre public cible et les spécificités de votre secteur.",
      h3:"Voir plus",   
    },
    {
      id: 1,
      link:"/design-branding",
      img: design,
      name: "design & branding ",
      p:"Nous développons une stratégie de site Web et faisons preuve de créativité pour vous créer un site sophistiqué qui offre une expérience utilisateur incroyable et génère des résultats commerciaux tangibles.",
      h3:"Voir plus",
    },
    {
      id: 2,
      link:"/marketing",
      img: marketing,
      name: "Branding & creation",
      p:"Nous développons une stratégie de site Web et faisons preuve de créativité pour vous créer un site sophistiqué qui offre une expérience utilisateur incroyable et génère des résultats commerciaux tangibles.",
      h3:"Voir plus",
    },
  ]},
}


// NEW DATA NAVLINK
export const DATANAVLINK = [
  {id:0,name: "ACCEUIL", link: "/" },
  {id:1, name: "SERVICES",sousLink:[
    {id:0,name:"SITE WEB",link:"/web-design",icon:iconWeb,},
    {id:1,name:"DESIGN & BRANDING",link:"/design-branding",icon:iconDesign,},
    {id:2,name:"MARKETING",link:"/marketing",icon:iconMarketing,},
  ]},
  {id:2, name: "RÉALISATION", link: "/#" },
  {id:3, name: "AGENCE", link: "/apropos" },
  {id:4, name: "CONTACTER", link: "/contact" },
];

// DATA NAVLINK
export const DATANAVLINKK = {
  links:{
    acceuil:{
      name:"ACCEUIL",link:"/",
    },
    service:{
      name:"SERVICE",icon:"",
    },
    realisation:{
      name:"RÉALISATION",link:"/#",
    },
    agence:{
      name:"AGENCE",link:"/apropos",
    },
    contacter:{
      name:"CONTACTER",link:"/contact",
    },
  },

  sousLink:{ 
    mobile:[
      {id:1, name:"SITE WEB", link:"/web-design",},
      {id:2, name:"DESIGN & BRANDING", link:"/design-branding",},
      {id:3, name:"MARKETING", link:"/marketing",},
  ],    
  desktop:[
    {id:1, name:"SITE WEB", link:"/web-design", icon:iconWeb,},
    {id:2, name:"DESIGN & BRANDING", link:"/design-branding",icon:iconDesign,},
    {id:3, name:"MARKETING", link:"/marketing",icon:iconMarketing,},
],
  }
}

//DATA REALISATION

export const DATAREALISATION = {
  h2: "RÉALISATION",
  slider:[
    {id:1, bgImg:projet1},
    {id:2, bgImg:projet2},
    {id:3, bgImg:projet3},
    {id:4,bgImg:projet4},
    {id:5, bgImg:projet5},
    {id:6, bgImg:projet6},
    {id:7, bgImg:projet7},
  ]
}

//DATA BRANDING
export const DATABRANDING= {
    presantation: {
      txt1: "Branding & Creation ?",
      txt2: "graphism / print / web / motion design  / video / illustration / 3d ",
      p1:"Entrez dans l'ère de la domination digitale avec Astra One, où chaque pixel compte et chaque impression fait sensation. Nous sommes les maîtres de l'art du branding et de la créativité numérique, façonnant des identités visuelles qui éblouissent et des expériences qui marquent les esprits.",
      p2:"Préparez-vous à être inondé de succès. Avec Devin à vos côtés, la seule limite est votre imagination. Choisissez l'excellence. Choisissez l'impact. Choisissez Devin pour propulser votre marque vers des sommets insoupçonnés. voila la difference",
    },
    serviceCre: [
      {
        id: 1,
        icon: iconWeb,
        name: "BRANDING",
        service: [
          "Création & Refonte de logo.",
          "Modernisation & Retouches.",
          "Création d’identité visuelle.",
          "Rédaction de charte graphique avec règles et usages pour vos collaborateurs internes et externes.",
          "Création de templates graphiques.",
        ],
      },
      {
        id: 2,
        icon: iconWeb,
        name: "MARKETING",
        service: [
          "Création & Refonte de logo.",
          "Modernisation & Retouches.",
          "Création d’identité visuelle.",
          "Rédaction de charte graphique avec règles et usages pour vos collaborateurs internes et externes.",
          "Création de templates graphiques.",
        ],
      },
      {
        id: 3,
        icon: iconWeb,
        name: "BRANDING $ CREATION",
        service: [
          "Création & Refonte de logo.",
          "Modernisation & Retouches.",
          "Création d’identité visuelle.",
          "Rédaction de charte graphique avec règles et usages pour vos collaborateurs internes et externes.",
          "Création de templates graphiques.",
        ],
      },
    ],
    markette:  {
      img:{img:marketteFone,name:"markette-fone"},
      txt:[
        {id:1,span1:"Reussite design", span2:"100%",},
        {id:2,span1:"Identité unique", span2:"100%",},
        {id:3,span1:"Acquisition client", span2:"100%",},
      ]
    },
}
// DATA MARKETING 
export const DATAMARKETING = {
  presantation: {
    txt1: "Marketing",
    txt2: "Stratégie de Marketing Digital / Référencement Naturel (SEO) /  Publicité en Ligne (PPC) / Marketing de Contenu  / Réseaux Sociaux / Email Marketing / Branding et Positionnement / ect...",
    p1: "Les réseaux sociaux sont devenus incontournables dans les stratégies digitales. Pourquoi ? Parce qu'ils permettent de toucher des communautés ultraciblées à moindre coût ! En bref, un budget extrêmement optimisé pour des retombées très efficaces. L'agence de communication Astra One gère vos réseaux et vous accompagne dans la définition d'une stratégie d'acquisition social media performante",
    p2:"En confiant la gestion de leurs réseaux sociaux à une agence spécialisée comme Astra One, les entreprises peuvent bénéficier de l'expertise et de l'expérience nécessaires pour élaborer et exécuter des stratégies efficaces. Cela leur permet de se concentrer sur leur cœur de métier tout en tirant le meilleur parti des possibilités offertes par les médias sociaux.",
  },
  serviceMarketing : {
    img:image1,
    h2:"UNE IDENTITÉ VISUELLE INOUBLIABLE",
    p:[
      "POUR MARQUER LES ESPRITS, L’IDENTITÉ VISUELLE D’UNE MARQUE NE SELIMITE PAS À SON LOGO.",
     "C’est un univers singulier qui doit pouvoir se décliner à chaque présence de la marque :",
      "Tous les éléments visuels utilisés dans vos campagnes de communication doivent être authentiques et se distinguer de vos concurrents.",
    "Graphistes, graphistes 3D, illustrateurs, motion designer, sound designers… notre équipe créa regorge d’idées, de savoir-faire et de talent pour créer, avec vous, l’identité visuelle de votre marque.",
    ]
  },

  services:{
    h2:"Nous mettons en place votre dispositif d’Inbound Marketing",
    service:[
      {
        id:1,
        img:empoule,
        h3:"Attirer",
        p:"Nous choisissons les canaux adéquats pour attirer du trafic de qualité.",
      },
      {
        id:2,
        img:convertir,
        h3:"Convertir",
        p:"Convertir Nous concevons des offres irrésistibles afin de convertir vos visiteurs en prospects.",
      },
      {
        id:3,
        img:transformer,
        h3:"Transformer",
        p:"Nous transformons vos prospects en prospect qualifiés puis en clients.",
      },
    ]
  },

  chiffreQuiParle:{
    h3:"POURQUOI NOUS CHOISIR ?",
    h2: "Nos chiffres parle",
    chiffre:[
      {id:0, h3:"65+",p:"Des clients satisfait",},
      {id:1, h3:"259+",p:"Réalisation",},
      {id:2, h3:"100%",p:"Transparents sur la réalisation de vos objectifs",},
    ]

  }

}

// DATA WEB
export const DATAWEB = {
  presantation: {
    txt1: "site web",
    txt2: "graphism / print / web / motion design  / video / illustration / 3d ",
    p1: "Bienvenue dans notre service de Création de Site Internet. Chez Astra One, nous savons que votre site web est la vitrine de votre entreprise, un outil essentiel pour attirer et fidéliser vos clients. C'est pourquoi nous nous engageons à créer des sites web performants, esthétiques et parfaitement adaptés à vos besoins.",
    p2: "Nous adoptons une approche personnalisée pour chaque projet de création de site internet. Notre équipe d'experts travaille en étroite collaboration avec vous pour comprendre vos objectifs, votre public cible et les spécificités de votre secteur. Nous vous offrons des solutions sur mesure qui reflètent l'identité de votre marque et répondent aux attentes de vos utilisateurs.",
    
  },
  serviceCre: [
    {
      id: 1,
      icon:iconWeb,
      name: "Sites Vitrine",
      service: [
        "Analyse des Besoins et Objectifs.",
        "Design Personnalisé et Attrayant.",
        "Développement Responsive.",
        "Optimisation pour le Référencement (SEO).",
        "Fonctionnalités Avancées.",
        "Sécurité et Conformité.",
        "Formation et Support.",
        "Suivi et Analyse des Performances.",
      ],
    },
    {
      id: 2,
      icon: iconWeb,
      name: "Sites E-commerce",
      service: [
        "Analyse des Besoins et Objectifs.",
        "Design Personnalisé et Attrayant.",
        "Développement Responsive.",
        "Optimisation pour le Référencement (SEO).",
        "Gestion de Produits et Catalogue.",
        "Système de Paiement Sécurisé.",
        "Fonctionnalités Avancées.",
        "Marketing et Fidélisation.",
        "Sécurité et Conformité.",

      ],
    },
    {
      id: 3,
      icon:iconWeb ,
      name: "Sites Personnalisés",
      service: [
        "Analyse et Évaluation du Site Actuel.",
        "Définition des Objectifs et Stratégie de Refonte.",
        "Conception et UX/UI Modernisée.",
        "Optimisation pour le Référencement (SEO).",
        "Développement Responsive et Performant.",
        "Intégration de Nouvelles Fonctionnalités.",
        "Tests et Assurance Qualité.",



      ],
    },
  ],
}
//DATA SERVICE CRE APROPOS

export const DATASERVICEAPROPOS = [

    {
      id: 0,
      icon: iconWeb,
      name: "SITE WEB",
      p:"Nous développons une stratégie de site Web et faisons preuve de créativité pour vous créer un site sophistiqué qui offre une expérience utilisateur incroyable et génère des résultats commerciaux tangibles.",
      link:"/web-design",
      btn:"EN SAVOIR PLUS",
    },
    {
      id: 1,
      icon: iconDesign,
      name: "BRANDING",
      p:"Nous développons une stratégie de site Web et faisons preuve de créativité pour vous créer un site sophistiqué qui offre une expérience utilisateur incroyable et génère des résultats commerciaux tangibles.",
      link:"/design-branding",
      btn:"EN SAVOIR PLUS",
    },
    {
      id: 2,
      icon: iconMarketing,
      name: "MARKETING",
      p:"Nous développons une stratégie de site Web et faisons preuve de créativité pour vous créer un site sophistiqué qui offre une expérience utilisateur incroyable et génère des résultats commerciaux tangibles.",
      link:"/marketing",
      btn:"EN SAVOIR PLUS",
     },
]
//DATA SERVICECREATION
export const DATASERVICECREATION = {
  acceuil: {h2:"NOS SERVICES CREATION",service:[
    {
      id: 0,
      link:"/web-design",
      img: serviceAcceuilWeb,
      name: "Conception site web",
      p:"Nous développons une stratégie de site Web et faisons preuve de créativité pour vous créer un site sophistiqué qui offre une expérience utilisateur incroyable et génère des résultats commerciaux tangibles.",
      h3:"Voir plus",   
    },
    {
      id: 1,
      link:"/design-branding",
      img: serviceAcceuilWeb,
      name: "Marketing ",
      p:"Nous développons une stratégie de site Web et faisons preuve de créativité pour vous créer un site sophistiqué qui offre une expérience utilisateur incroyable et génère des résultats commerciaux tangibles.",
      h3:"Voir plus",
    },
    {
      id: 2,
      link:"/marketing",
      img: serviceAcceuilWeb,
      name: "Branding & creation",
      p:"Nous développons une stratégie de site Web et faisons preuve de créativité pour vous créer un site sophistiqué qui offre une expérience utilisateur incroyable et génère des résultats commerciaux tangibles.",
      h3:"Voir plus",
    },
  ]},
  siteWeb: [
    {
      id: 1,
      icon: iconWeb,
      name: "SITE WEB",
      service: [
        "Création & Refonte de logo.",
        "Modernisation & Retouches.",
        "Création d’identité visuelle.",
        "Rédaction de charte graphique avec règles et usages pour vos collaborateurs internes et externes.",
        "Création de templates graphiques.",
      ],
    },
    {
      id: 2,
      icon: iconWeb,
      name: "MARKETING2",
      service: [
        "Création & Refonte de logo.",
        "Modernisation & Retouches.",
        "Création d’identité visuelle.",
        "Rédaction de charte graphique avec règles et usages pour vos collaborateurs internes et externes.",
        "Création de templates graphiques.",
      ],
    },
    {
      id: 3,
      icon: iconWeb,
      name: "BRANDING $ CREATION",
      service: [
        "Création & Refonte de logo.",
        "Modernisation & Retouches.",
        "Création d’identité visuelle.",
        "Rédaction de charte graphique avec règles et usages pour vos collaborateurs internes et externes.",
        "Création de templates graphiques.",
      ],
    },
  ],
  branding: [
    {
      id: 1,
      icon: iconWeb,
      name: "BRANDING",
      service: [
        "Création & Refonte de logo.",
        "Modernisation & Retouches.",
        "Création d’identité visuelle.",
        "Rédaction de charte graphique avec règles et usages pour vos collaborateurs internes et externes.",
        "Création de templates graphiques.",
      ],
    },
    {
      id: 2,
      icon: iconWeb,
      name: "MARKETING",
      service: [
        "Création & Refonte de logo.",
        "Modernisation & Retouches.",
        "Création d’identité visuelle.",
        "Rédaction de charte graphique avec règles et usages pour vos collaborateurs internes et externes.",
        "Création de templates graphiques.",
      ],
    },
    {
      id: 3,
      icon: iconWeb,
      name: "BRANDING $ CREATION",
      service: [
        "Création & Refonte de logo.",
        "Modernisation & Retouches.",
        "Création d’identité visuelle.",
        "Rédaction de charte graphique avec règles et usages pour vos collaborateurs internes et externes.",
        "Création de templates graphiques.",
      ],
    },
  ],
  marketing: [
    {
      id: 1,
      icon: iconWeb,
      name: "MARKETING",
      service: [
        "Création & Refonte de logo.",
        "Modernisation & Retouches.",
        "Création d’identité visuelle.",
        "Rédaction de charte graphique avec règles et usages pour vos collaborateurs internes et externes.",
        "Création de templates graphiques.",
      ],
    },
    {
      id: 2,
      icon: iconWeb,
      name: "MARKETING",
      service: [
        "Création & Refonte de logo.",
        "Modernisation & Retouches.",
        "Création d’identité visuelle.",
        "Rédaction de charte graphique avec règles et usages pour vos collaborateurs internes et externes.",
        "Création de templates graphiques.",
      ],
    },
    {
      id: 3,
      icon: iconWeb,
      name: "MARKETING",
      service: [
        "Création & Refonte de logo.",
        "Modernisation & Retouches.",
        "Création d’identité visuelle.",
        "Rédaction de charte graphique avec règles et usages pour vos collaborateurs internes et externes.",
        "Création de templates graphiques.",
      ],
    },
  ],
};

//DATA PRESANTATION
export const DATAPRESANTATION = {
  siteWeb: {
    txt1: "site web",
    txt2: "graphism / print / web / motion design  / video / illustration / 3d ",
    txt3: "La refonte de votre site Internet devient urgente car le site actuel nuit à l’image de votre entreprise ? Votre site est vieillissant, vous n’avez plus la main sur vos contenus et souhaitez un site moderne sur WordPress ? Vous avez un projet de création de site web ? Ou souhaitez simplement apporter de nouvelles fonctionnalités à votre site actuel ?",
    txt4: "La refonte de votre site Internet devient urgente car le site actuel nuit à l’image de votre entreprise ? Votre site est vieillissant, vous n’avez plus la main sur vos contenus et souhaitez un site moderne sur WordPress ? Vous avez un projet de création de site web ? Ou souhaitez",
  },
  marketing: {
    txt1: "Marketing",
    txt2: "graphism / print / web / motion design  / video / illustration / 3d ",
    txt3: "La refonte de votre site Internet devient urgente car le site actuel nuit à l’image de votre entreprise ? Votre site est vieillissant, vous n’avez plus la main sur vos contenus et souhaitez un site moderne sur WordPress ? Vous avez un projet de création de site web ? Ou souhaitez simplement apporter de nouvelles fonctionnalités à votre site actuel ?",
    txt4: "La refonte de votre site Internet devient urgente car le site actuel nuit à l’image de votre entreprise ? Votre site est vieillissant, vous n’avez plus la main sur vos contenus et souhaitez un site moderne sur WordPress ? Vous avez un projet de création de site web ? Ou souhaitez",
  },
  branding: {
    txt1: "Branding & crea",
    txt2: "graphism / print / web / motion design  / video / illustration / 3d ",
    txt3: "La refonte de votre site Internet devient urgente car le site actuel nuit à l’image de votre entreprise ? Votre site est vieillissant, vous n’avez plus la main sur vos contenus et souhaitez un site moderne sur WordPress ? Vous avez un projet de création de site web ? Ou souhaitez simplement apporter de nouvelles fonctionnalités à votre site actuel ?",
    txt4: "La refonte de votre site Internet devient urgente car le site actuel nuit à l’image de votre entreprise ? Votre site est vieillissant, vous n’avez plus la main sur vos contenus et souhaitez un site moderne sur WordPress ? Vous avez un projet de création de site web ? Ou souhaitez",
  },
};

// DATA APROPOS
export const DATAAPROPOS ={
  header:{
    left:{
      txt1:"Notre Histoire",
      p1:"Aujourd’hui, Astra One est une fine équipe de près de 30 collaborateurs, très soudés et talentueux, orchestrée par une équipe de Direction constituée de Hadrien Macé et Clémentine Micolle.",
      p2:"Aujourd’hui, 33° est une fine équipe de près de 30 collaborateurs, très soudés et talentueux, orchestrée par une équipe de Direction constituée de Hadrien Macé et Clémentine Micolle. Aujourd’hui, 33° est une fine équipe de près de 30 collaborateurs, très soudés et talentueux, orchestrée par une équipe de Direction constituée de Hadrien Macé et Clémentine Micolle. Aujo de 30 collaborateurs, très soudés et talentueux, orchestrée par une équipe de Direction constituée de Hadrien Macé et Clémentine Micolle.",
    },
    right:{
      img:"https://img.freepik.com/photos-gratuite/groupe-afro-americains-travaillant-ensemble_1303-8970.jpg?t=st=1720586173~exp=1720589773~hmac=5a1f836a38b050c65fa3c0a0f5ae50e955f1c58000cb3983a5850300b414a0bd&w=900",
    }
  },
  pourQuoiNous:{
    h1:"Pourquoi « Tech-Monidal »",
    p1:"Je suis un entrepreneur français dans un espace très encombré et compétitif.",
    p2:"Je voulais créer une marque mémorable, qui pique la curiosité et qui y ajoute implicitement une « touche française ». J’ai donc pris une tasse, j’y ai ajouté un peu de Pulp Fiction (vous vous souvenez de la fameuse discussion sur le Quarter Pounder with Cheese dans la voiture ?), j’ai mélangé le tout avec un jeu de mots intentionnel sur mon nom de famille, et voilà.",
    logo:Logo,
  },
  expertise:{
    h2:"NOTRE EXPERTISE ",
  },
  service:[
    {
      id: 0,
      icon: iconWeb,
      name: "SITE WEB",
      p:"Nous développons une stratégie de site Web et faisons preuve de créativité pour vous créer un site sophistiqué qui offre une expérience utilisateur incroyable et génère des résultats commerciaux tangibles.",
      link:"/web-design",
      btn:"EN SAVOIR PLUS",
    },
    {
      id: 1,
      icon: iconDesign,
      name: "BRANDING",
      p:"Nous développons une stratégie de site Web et faisons preuve de créativité pour vous créer un site sophistiqué qui offre une expérience utilisateur incroyable et génère des résultats commerciaux tangibles.",
      link:"/design-branding",
      btn:"EN SAVOIR PLUS",
    },
    {
      id: 2,
      icon: iconMarketing,
      name: "MARKETING",
      p:"Nous développons une stratégie de site Web et faisons preuve de créativité pour vous créer un site sophistiqué qui offre une expérience utilisateur incroyable et génère des résultats commerciaux tangibles.",
      link:"/marketing",
      btn:"EN SAVOIR PLUS",
     },
  ],
  equipe:{
    h2:"Équipe Exécutive",
    pdg:{
      Name:"ABRAHAM OUATTARA",
      Fonction:"PDG",
      p1:"Abraham est le fondateur et PDG de Royal Cheese Digital.",
      p2:"Je voulais créer une marque mémorable, qui pique la curiosité et qui y ajoute implicitement une « touche française ». J’ai donc pris une tasse, j’y ai ajouté un peu de Pulp Fiction (vous vous souvenez de la fameuse discussion sur le Quarter Pounder with Cheese dans la voiture ?), j’ai mélangé le tout avec un jeu de mots intentionnel sur mon nom de famille, et voilà.",
    }
  }

} 
//DATA AUTRESERVICE
export const AUTRESERVICE = {
  h2: "Autre service",
  services: [
    {
      id: 0,
      h3: "Marketing-digital",
      img: iconMarketing,
      p: "graphisme / print / web / motion design / vidéo  illustration / 3D / photo / tournage / podcast",
      link: { link: "/marketing", name: "En savoir plus" },
    },
    {
      id: 1,
      h3: "Site web",
      img: iconWeb,
      p: "graphisme / print / web / motion design / vidéo  illustration / 3D / photo / tournage / podcast",
      link: { link: "/web-design", name: "En savoir plus" },
    },
    {
      id: 3,
      h3: "Branding & design",
      img: iconDesign,
      p: "graphisme / print / web / motion design / vidéo  illustration / 3D / photo / tournage / podcast",
      link: { link: "/design-branding", name: "En savoir plus" },
    },
  ],
};


//DATA WEBSITE
export const DATACHEMAT = {
  h2:"COMMENT ÇA SE PASSE ?",
  nombre:[
    {
      id:1,
      h3: "Planification et Stratégie",
      p: "Nous établissons un cahier des charges détaillé qui décrit toutes les fonctionnalités et les éléments de design nécessaires ensuite  nous créons un calendrier de projet avec des étapes claires et des délais précis.",
    },
    {
      id:2,
      h3: "Conception et Design",
      p: "Nous concevons des wireframes et des maquettes pour visualiser la structure et le design de votre site. Nous travaillons avec vous pour ajuster et valider le design final avant de passer à l'étape suivante.",
    },
    {
      id:3,
      h3: "Développement",
      p: "Nos développeurs commencent le codage de votre site, en intégrant les fonctionnalités front-end (interface utilisateur) et back-end (gestion des données). Nous ajoutons et optimisons les contenus (textes, images, vidéos) sur votre site e-commerce.",
    },
    {
      id:4,
      h3: "Tests et Assurance Qualité",
      p: "Nous effectuons des tests (vitesse, réactivité, sécurité) pour vérifier que toutes les fonctionnalités de votre site fonctionnent correctement. ",
    },
    {
      id:5,
      h3: "Lancement du Site",
      p: "Une fois les tests validés, nous migrons votre site vers le serveur de production et procédons à la mise en ligne. Nous effectuons une dernière vérification pour nous assurer que tout est en ordre et prêt pour le lancement.",
    },

  ]
    };
//DATA BRANDING
export const MARKETTE = {
  img:{img:marketteFone,name:"markette-fone"},
  txt:[
    {id:1,span1:"Reussite design", span2:"100%",},
    {id:2,span1:"Reussite design", span2:"100%",},
    {id:3,span1:"Reussite design", span2:"100%",},
  ]
}


// DATACONTACTER

export const DATACONTACTER = {
    h3:"CHEMIN VERS LE SUCCES",
    p:"Prêt à démarrer votre projet? Contactez-nous dès aujourd'hui pour discuter de vos besoins et découvrir comment nous pouvons vous aider à atteindre vos objectifs en ligne.",
    img:iconGpPlus,
    link:{content:"contacter-Nous",link:"/contact"},
}

//DATA PARTENAIRE

export const DATAPARTENAIRE = {
  h1:"ILS NOUS FONT CONFIANCE",
  logo:[logo,logo,logo,logo,logo,logo,logo,logo

  ],
}

// DATA CONTACT


export  const DATACONTACT = {
  leftImage:image1,
  left :{
    h1: " Nous contacter", 
    p1: "Venez échanger avec nous à propos de vos besoins, votre problématique ou tout simplement pour faire notre connaissance",
    coordonnees:{
      h3:"Nos coordonnées",
      num:"05 44 34 44 10",
      lenkSite:"www.devin.com",
    },
    adresse:{
      h3:"Adresse",
      rue:"Abidjan 1 cocody angre 8eme tranche",
    }
  },
  right:{
    form:{
      inputs:{
        prenom :{type:"text",placeholder:"Prénom",name:"user_prenom"},
        nom :{type:"text",placeholder:"Nom",name:"user_nom",},
        email :{type:"email",placeholder:"Email",name:"user_email"},
        entreprise :{type:"text",placeholder:"Entreprise",name:"user_entreprise"},
        telephone :{type:"tel",placeholder:"Telephone",name:"user_téléphone"},
        message :{type:"number",placeholder:"Message",rows:3,name:"user_message"},
        checkbox :{type:"Checkbox",placeholder:"Checkbox",name:"user_checkbox"},
        label :{htmlFor:"Checkbox",text:"I accept to receive emails from Royal Cheese Digital"},
        btn: {type:"submit",text:"Envoyé",}
      }
    }
  }
}


// DATA FOOTER
export const DATAFOOTER = {
  icon:[
    {id:0,name:"whatsapp",link:"#",},
    {id:1,name:"facebook",link:"#",},
    {id:2,name:"linkedin",link:"#",},
  ] ,
  siteWeb:"tech.con",
  legal:"Tous droits réserver 2024",
}
