import { DATACHEMAT } from "../../data/Constant";

const Chemat = () => {
  return (
    <section className="bg-white">
      <div className="text-[#022562] mx-auto py-[100px] flex flex-col items-center justify-center gap-9 lg:gap-12 pt-[100px] px-[20px] lg:px-[100px] xl:px-[200pxx] 3xl:px-[300px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140pxx] 2xl:max-w-[1320pxx] 3xl:max-w-[1620pxx] ">
        <h2 className="text-[#172153] font-bold text-[25px] lg:text-[35px]">
          {DATACHEMAT.h2}
        </h2>
        <div>
          <div>
            <div>
              <li
                className={`relative before:z-20 before:content-['1'] before:flex  before:justify-center before:items-center before:rounded-full before:px-[9px] before:py-[1px] before:w-fit before:h-fit before:text-[#F56F46] before:bg-[#172153] lg:before:text-[20px] lg:before:px-[11px] lg:before:py-[1px] flex gap-2 sm:gap-10`}
              >
                <div>
                  <h3 className="text-[#172153] text-[18px] lg:text-[20px] font-semibold mb-[8px]">
                    {DATACHEMAT.nombre[0].h3}
                  </h3>
                  <p className="text-[#022562] mb-[16px] lg:mb-[20px]">
                    {DATACHEMAT.nombre[0].p}
                  </p>
                </div>
                <div className="absolute z-10 left-[12px] lg:left-[15px] h-full w-[3px] bg-[#172153]"></div>
              </li>
            </div>

            <div>
              <li
                className={`relative before:z-20 before:content-['2'] before:flex  before:justify-center before:items-center before:rounded-full before:px-[9px] before:py-[1px] before:w-fit before:h-fit before:text-[#F56F46] before:bg-[#172153] lg:before:text-[20px] lg:before:px-[11px] lg:before:py-[1px] flex gap-2 sm:gap-10`}
              >
                <div>
                  <h3 className="text-[#172153] text-[18px] lg:text-[20px] font-semibold mb-[8px]">
                    {DATACHEMAT.nombre[1].h3}
                  </h3>
                  <p className="text-[#022562] mb-[16px] lg:mb-[20px]">
                    {DATACHEMAT.nombre[1].p}
                  </p>
                </div>
                <div className="absolute z-10 left-[12px] lg:left-[15px] h-full w-[3px] bg-[#172153]"></div>
              </li>
            </div>

            <div>
              <li
                className={`relative before:z-20 before:content-['3'] before:flex  before:justify-center before:items-center before:rounded-full before:px-[9px] before:py-[1px] before:w-fit before:h-fit before:text-[#F56F46] before:bg-[#172153] lg:before:text-[20px] lg:before:px-[11px] lg:before:py-[1px] flex gap-2 sm:gap-10`}
              >
                <div>
                  <h3 className="text-[#172153] text-[18px] lg:text-[20px] font-semibold mb-[8px]">
                    {DATACHEMAT.nombre[2].h3}
                  </h3>
                  <p className="text-[#022562] mb-[16px] lg:mb-[20px]">
                    {DATACHEMAT.nombre[2].p}
                  </p>
                </div>
                <div className="absolute z-10 left-[12px] lg:left-[15px] h-full w-[3px] bg-[#172153]"></div>
              </li>
            </div>

            <div>
              <li
                className={`relative before:z-20 before:content-['4'] before:flex  before:justify-center before:items-center before:rounded-full before:px-[9px] before:py-[1px] before:w-fit before:h-fit before:text-[#F56F46] before:bg-[#172153] lg:before:text-[20px] lg:before:px-[11px] lg:before:py-[1px] flex gap-2 sm:gap-10`}
              >
                <div>
                  <h3 className="text-[#172153] text-[18px] lg:text-[20px] font-semibold mb-[8px]">
                    {DATACHEMAT.nombre[3].h3}
                  </h3>
                  <p className="text-[#022562] mb-[16px] lg:mb-[20px]">
                    {DATACHEMAT.nombre[3].p}
                  </p>
                </div>
                <div className="absolute z-10 left-[12px] lg:left-[15px] h-full w-[3px] bg-[#172153]"></div>
              </li>
            </div>

            <div>
              <li
                className={`relative before:z-20 before:content-['5'] before:flex  before:justify-center before:items-center before:rounded-full before:px-[9px] before:py-[1px] before:w-fit before:h-fit before:text-[#F56F46] before:bg-[#172153] lg:before:text-[20px] lg:before:px-[11px] lg:before:py-[1px] flex gap-2 sm:gap-10`}
              >
                <div>
                  <h3 className="text-[#172153] text-[18px] lg:text-[20px] font-semibold mb-[8px]">
                    {DATACHEMAT.nombre[4].h3}
                  </h3>
                  <p className="text-[#022562] mb-[16px] lg:mb-[20px]">
                    {DATACHEMAT.nombre[4].p}
                  </p>
                </div>
                {/* <div className="absolute z-10 left-[12px] lg:left-[15px] h-full w-[3px] bg-[#172153]"></div> */}
              </li>
            </div>
          </div>
          {/* <div>
              {DATACHEMAT.nombre.map((item) => {
                return (
                  <div key={item.id}>
                    <li
                      className={`relative before:z-20 before:content-['${item.id}'] before:flex  before:justify-center before:items-center before:rounded-full before:px-[9px] before:py-[1px] before:w-fit before:h-fit before:text-[#F56F46] before:bg-[#172153] lg:before:text-[20px] lg:before:px-[11px] lg:before:py-[1px] flex gap-2 sm:gap-10`}
                    >
                      <div>
                        <h3 className="text-[#172153] text-[18px] lg:text-[20px] font-semibold mb-[8px]">
                          {item.h3}
                        </h3>
                        <p className="text-[#022562] mb-[16px] lg:mb-[20px]">
                          {item.p}
                        </p>
                      </div>
                      {item.id !== 5 ? (
                        <div className="absolute z-10 left-[12px] lg:left-[15px] h-full w-[3px] bg-[#172153]"></div>
                      ) : (
                        ""
                      )}
                    </li>
                  </div>
                );
              })}
            </div> */}
        </div>
      </div>
    </section>
  );
};

export default Chemat;
