import { BiSend } from "react-icons/bi";

const PointFort = () => {
    // const data= [
    //     {id:1,
    //      txt:'Écouter nos clients : Nous commençons toutes nos collaborations, même les plus simples, par un véritable temps d’écoute pour comprendre leur contexte, mais aussi leur ressenti, et ainsi apporter la bonne réponse (qui n’est pas forcément la demande initiale).',
    //     },
    //     {id:2,
    //         txt:'Écouter nos collaborateurs : leurs idées, leurs remarques, eux !',
    //        },
    //        {id:3,
    //         txt:'Écouter le marché : La veille !!! Essentielle pour rester créatif, pour rebondir sur l’actualité, pour se différencier, pour être toujours à jour sur la technologie et les tendances.',
    //        },
    // ]
    return (
        <div >
           <h2 className="mt-10 text-[18px] lg:text-[22px]">NOTRE FORCE</h2>  
           <ul className="pt-5">
           <li className="flex items-center pt-2" ><BiSend size={20}/><span className="pl-3">Écouter nos collaborateurs : leurs idées, leurs remarques, eux !</span></li>
           <li className="flex items-center pt-2" ><BiSend size={20}/><span className="pl-3">Écouter nos collaborateurs : leurs idées, leurs remarques, eux !</span></li>
           <li className="flex items-center pt-2" ><BiSend size={20}/><span className="pl-3">Écouter nos collaborateurs : leurs idées, leurs remarques, eux !</span></li>

           </ul>

           {/* <ul className="mt-5 ">
           {data.map(item=>
           <li className="flex mt-4" key={item.id}><BiSend size={20}/><span className="pl-3">{item.txt}</span></li>
           )}
           </ul> */}
        </div>
    );
};

export default PointFort;