import { DATATEMOIN } from "../data/Constant";

const Temoin = () => {

  // const data = [
  //   {
  //     id: 0,
  //     p: "Je fais appel à HP Prestige pour le nettoyage de mon domicile depuis plusieurs mois et je suis ravie du service. L'équipe est ponctuelle, professionnelle et laisse ma maison impeccable à chaque visite. Je recommande vivement !",
  //     img: "../src/assets/image/image.jpeg",
  //     name: "Marie Dupont :",
  //     work: "commercant",
  //     start:["start","start","start","start"]
  //   },
  //   {
  //     id: 1,
  //     p:"En tant que gérant d'une entreprise, il est crucial pour moi d'avoir des locaux propres et accueillants. HP Prestige fait un travail remarquable en assurant le nettoyage de nos bureaux. Leur flexibilité et leur attention aux détails sont exceptionnelles.",
  //     img: "../src/assets/image/image.jpeg",
  //     name: "Jean-Pierre Martin",
  //     work: "commercant",
  //     start:["start","start","start","start","start",]
  //   },
  //   {
  //       id: 2,
  //       p:"HP Prestige a transformé notre jardin en un véritable paradis. Leur équipe d'aménagement paysager a su créer un espace vert magnifique et facile à entretenir. Merci pour votre excellent travail !",
  //       img: "../src/assets/image/image.jpeg",
  //       name: "Sophie Leblanc",
  //       work: "commercant",
  //       start:["start","start","start","start"]
  //   },
  //   {
  //   id: 3,
  //   p:"Nous avions un sérieux problème de nuisibles dans notre restaurant. HP Prestige est intervenu rapidement et a résolu le problème de manière efficace. Depuis, nous n'avons plus aucun souci de ce côté-là. Un service de grande qualité !",
  //   img: "../src/assets/image/image.jpeg",
  //   name: "Laurent Petit ",
  //   work: "commercant",
  //   start:["start","start","start","start"]
  //   },
  //   {
  //   id: 4,
  //   p:"J'ai fait appel à HP Prestige pour la vidange de ma fosse septique et j'ai été impressionnée par leur professionnalisme et leur efficacité. L'équipe a travaillé rapidement et proprement. Je les recommande sans hésitation.",
  //   img: "../src/assets/image/image.jpeg",
  //   name: "Claire Fournier",
  //   work: "commercant",
  //   start:["start","start","start","start","start",]
  //   },
  //   {
  //     id: 5,
  //     p:"La gestion des déchets de notre entreprise est devenue beaucoup plus simple grâce à HP Prestige. Leur service de collecte et de tri est impeccable, et leur engagement en faveur de l'environnement est un plus indéniable.",
  //     img: "../src/assets/image/image.jpeg",
  //     name: "Michel Lambert ",
  //     work: "commercant",
  //     start:["start","start","start","start","start",]
  //     },
  //     {
  //       id: 6,
  //       p:"Après une rénovation majeure de notre maison, nous avions besoin d'un grand nettoyage. HP Prestige a fait un travail extraordinaire, laissant chaque recoin de notre maison étincelant. Leur équipe est efficace et très amicale. Merci encore !",
  //       img: "../src/assets/image/image.jpeg",
  //       name: "Isabelle Moreau",
  //       work: "commercant",
  //       start:["start","start","start","start","start",]
  //       },
    
  // ];


  // const data = [
  //   {
  //     id: 0,
  //     p: "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
  //     img: "../src/assets/image/image.jpeg",
  //     name: "paul",
  //     work: "commercant",
  //   },
  //   {
  //     id: 1,
  //     p: " All that we see or seem is but a dream within a dream All that we see or seem is but a dream within a dream All that we see or seem is but a dream within a dream.",
  //     img: "../src/assets/image/image.jpeg",
  //     name: "paul",
  //     work: "commercant",
  //   },
  //   {
  //       id: 2,
  //       p: "All that we see or seem is but All that we see or seem is but All that we see or seem is but All that we see or seem is but a dream within a dream All that we see or seem is but a dream within a dream",
  //       img: "../src/assets/image/image.jpeg",
  //       name: "paul",
  //       work: "commercant",
  //   },
  //   {
  //   id: 3,
  //   p: "All that we see or seem is but a dream within a dream All that we see or seem is but a dream within a dream.",
  //   img: "../src/assets/image/image.jpeg",
  //   name: "paul",
  //   work: "commercant",
  //   },
  //   {
  //   id: 4,
  //   p: "All that we see or seem is but a dream within a dream All that we see or seem is but a dream within a dream.",
  //   img: "../src/assets/image/image.jpeg",
  //   name: "paul",
  //   work: "commercant",
  //   },
  //   {
  //   id: 5,
  //   p: "All that we see or seem is but a dream within a dream All that we see or seem is but a dream within a dream All that",
  //   img: "../src/assets/image/image.jpeg",
  //   name: "paul",
  //   work: "commercant",
  //   },
  // ];


  return (
    <section className="bg-[#022562] bg-[radial-gradient(black,transparent)]]">
      <div className="py-[50px] lg:py-[100px]">
        {/* partenaire */}
        <div className="relative overflow-hidden py-[50px]">
          <div className="flex items-center w-fit gap-5 animate-temoinMobil md:animate-temoin hover:pause">
            {DATATEMOIN.map((item) => {
              return (
                <>
                  <div key={item.id} className="relative flex flex-col p-5 w-[85vw] h-[260px] sm:h-[300px] md:h-[270px] sm:w-[350px] md:w-[400px] lg:w-[450px] rounded-lg border-[1px] text-[15px]] " >
                    <p>{item.p}</p>
                    <div className="absolute pb-3 bottom-0 flex flex-wrap mt-7">
                      <img className="w-12 h-12 rounded-full object-cover" src={item.img} alt="temoin" />
                      <div className="ml-4">
                        <h3 className="font-semibold">{item.name}</h3>
                        <h4> {item.work}</h4>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}

            {DATATEMOIN.map((item) => {
              return (
                <>
                  <div key={item.id} className="relative flex flex-col p-5 w-[85vw] h-[260px] sm:h-[300px] md:h-[270px] sm:w-[350px] md:w-[400px] lg:w-[450px] rounded-lg border-[1px] text-[15px]] " >
                    <p>{item.p}</p>
                    <div className="absolute pb-3 bottom-0 flex flex-wrap mt-7">
                      <img className="w-12 h-12 rounded-full object-cover" src={item.img} alt="temoin" />
                      <div className="ml-4">
                        <h3 className="font-semibold">{item.name}</h3>
                        <h4> {item.work}</h4>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}

          </div>
        </div>
      </div>
    </section>
  );
};

export default Temoin;
