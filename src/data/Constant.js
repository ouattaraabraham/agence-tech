// import { FaFacebookF } from "react-icons/fa";
// import { FaWhatsapp } from "react-icons/fa";
// import { FaLinkedinIn } from "react-icons/fa";
// import { CiGlobe } from "react-icons/ci";


import {logo, iconWeb, iconDesign, iconMarketing , iconGpPlus } from "../assets/icon";

import {serviceAcceuilWeb,marketteFone , heroAcceuil , projet1, projet2, projet3,projet4,projet5,projet6,projet7, image1} from "../assets/image"

//DATA DATAACCEUIL

export const DATAACCEUIL ={
  header:{
    left : {
      h1 : "Agence Marketing Digital & Webbb",
      p : " Accompagnement dans le marketing, design, UX, développement Web etde la coordination de projets incrémentaux. Nous sommes là pourréaliser vos applications adaptées à votre contexte unique !",
      btn : {txt:"contacter-Nous" , link : "",},
    },
    right : {
      img : heroAcceuil ,
  
    },
  }
}

// DATA NAVLINK

export const DATANAVLINK = {
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



//DATA SERVICECREATION
export const DATASERVICECREATION = {
  acceuil: [
    {
      id: 0,
      img: serviceAcceuilWeb,
      name: "Conception site web",
      p:"Nous développons une stratégie de site Web et faisons preuve de créativité pour vous créer un site sophistiqué qui offre une expérience utilisateur incroyable et génère des résultats commerciaux tangibles.",
      h3:"Voir plus",   
    },
    {
      id: 1,
      img: serviceAcceuilWeb,
      name: "Marketing ",
      p:"Nous développons une stratégie de site Web et faisons preuve de créativité pour vous créer un site sophistiqué qui offre une expérience utilisateur incroyable et génère des résultats commerciaux tangibles.",
      h3:"Voir plus",
    },
    {
      id: 2,
      img: serviceAcceuilWeb,
      name: "Branding & creation",
      p:"Nous développons une stratégie de site Web et faisons preuve de créativité pour vous créer un site sophistiqué qui offre une expérience utilisateur incroyable et génère des résultats commerciaux tangibles.",
      h3:"Voir plus",
    },
  ],
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
      h3: "Audit & cahier des charges",
      p: "Analyse des points forts et des points à améliorer de votre site. Rédaction d’un cahier des charges adapté à vos besoin.",
    },
    {
      id:2,
      h3: "Audit & cahier des charges",
      p: "Analyse des points forts et des points à améliorer de votre site. Rédaction d’un cahier des charges adapté à vos besoin.",
    },
    {
      id:3,
      h3: "Audit & cahier des charges",
      p: "Analyse des points forts et des points à améliorer de votre site. Rédaction d’un cahier des charges adapté à vos besoin.",
    },
    {
      id:4,
      h3: "Audit & cahier des charges",
      p: "Analyse des points forts et des points à améliorer de votre site. Rédaction d’un cahier des charges adapté à vos besoin.",
    },
    {
      id:5,
      h3: "Audit & cahier des charges",
      p: "Analyse des points forts et des points à améliorer de votre site. Rédaction d’un cahier des charges adapté à vos besoin.",
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

// DATA MARKETING 
export const DATAMARKETING = {

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

// DATACONTACTER

export const DATACONTACTER = {
    h3:"CHEMIN VERS LE SUCCES",
    p:"Une idée, besoin d optimisation de vos procédures quotidiennes, une nouvelle solution digitale à mettre en place ?",
    img:iconGpPlus,
    link:{content:"contacter-Nous",link:"#"},
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
        inputNom :{type:"text",nom:"Nom"},
        inputPrenom :{type:"text",nom:"Prenom"},
        inputEmail :{type:"email",nom:"Email"},
        inputEntreprise :{type:"text",nom:"Entreprise"},
        inputTelephone :{type:"tel",nom:"Telephone"},
        inputMessage :{type:"number",nom:"Message",rows:3,},
        inputCheckbox :{type:"Checkbox",nom:"Checkbox"},
        inputlabel :{htmlFor:"Checkbox",text:"I accept to receive emails from Royal Cheese Digital"},
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
