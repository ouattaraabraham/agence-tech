import { Logo } from "../../data/Constant"
export default function NotreHistoire() {
  return (
    <section className='py-[50px] lg:py-[100px]] lg:flex items-center justify-between mx-auto px-[.75rem] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1060px]] 2xl:max-w-[1320px]] 3xl:max-w-[1620px]]'>
        <div className="lg:flex items-center gap-4">
            <div className="w-[75%]">
                <h1 className="text-[25px] lg:text-[35px]">Notre Histoire</h1>
                <p className="pt-5">

                Je suis un entrepreneur français dans un espace très encombré et compétitif.<br/> <br/>

                Je voulais créer une marque mémorable, qui pique la curiosité et qui y ajoute implicitement une « touche française ». J’ai donc pris une tasse, j’y ai ajouté un peu de Pulp Fiction (vous vous souvenez de la fameuse discussion sur le Quarter Pounder with Cheese dans la voiture ?), j’ai mélangé le tout avec un jeu de mots intentionnel sur mon nom de famille, et voilà.
                </p>

            </div>

            <div className="w-[25%]">
            <img src={Logo} alt="logo" />
            </div>
        </div>
    </section>
  )
}
