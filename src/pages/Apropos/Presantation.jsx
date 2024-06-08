import Motivation from "../../components/Motivation";

const Presantation = () => {
    return (
        <section className="bg-[#172153] ">
          <div className="mx-auto pb-[100px] lg:pb-[150px] pt-[30px] px-[20px] lg:px-[100px] xl:px-[200px] 2xl:px-[300px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] 2xl:max-w-[1320px] 3xl:max-w-[1620px]">
            <h1 className="text-[40px] lg:text-[60px] font-bold pb-[30px]">Notre Histoire</h1>
            <p className="text-[18px] lg:text-[22px]">
            Aujourd’hui, 33° est une fine équipe de près de 30 collaborateurs, très soudés et talentueux, orchestrée par une équipe de Direction constituée de Hadrien Macé et Clémentine Micolle.
            </p>
            <br/>
            <p className="text-[18px] lg:text-[22px]">
            Aujourd’hui, 33° est une fine équipe de près de 30 collaborateurs, très soudés et talentueux, orchestrée par une équipe de Direction constituée de Hadrien Macé et Clémentine Micolle.
            Aujourd’hui, 33° est une fine équipe de près de 30 collaborateurs, très soudés et talentueux, orchestrée par une équipe de Direction constituée de Hadrien Macé et Clémentine Micolle.
            Aujo de 30 collaborateurs, très soudés et talentueux, orchestrée par une équipe de Direction constituée de Hadrien Macé et Clémentine Micolle.
            </p>
            <div className="pt-5">
                <h2 className="font-bold md:text-[25px]">Nos points forts</h2>
                <ul className="pt-5">
                    <li>-Écouter nos collaborateurs : leurs idées, leurs remarques, eux !</li>
                    <li>-Écouter nos collaborateurs : leurs idées, leurs remarques, eux !</li>
                    <li>-Écouter nos collaborateurs : leurs idées, leurs remarques, eux !</li>
                    <li>-Écouter nos collaborateurs : leurs idées, leurs remarques, eux !</li>
                    <li>-Écouter nos collaborateurs : leurs idées, leurs remarques, eux !</li>
                </ul>
                {/* <p >
                Nous avons pour ambition d’apporter une solution complète dédiée à la croissance de votre entreprise, pour transmettre savoirs et conseils à vos équipes.
                </p> */}
           </div>
           </div>
           <h2 className="font-bold md:text-[35px] text-center">NOTRE MISSION </h2>
           <Motivation/>          
        </section>
    );
};

export default Presantation;