

const Temoin = () => {
  const data = [
    {
      id: 0,
      p: "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
      img: "../src/assets/image/image.jpeg",
      name: "paul",
      work: "commercant",
    },
    {
      id: 1,
      p: " All that we see or seem is but a dream within a dream All that we see or seem is but a dream within a dream All that we see or seem is but a dream within a dream.",
      img: "../src/assets/image/image.jpeg",
      name: "paul",
      work: "commercant",
    },
    {
        id: 2,
        p: "All that we see or seem is but All that we see or seem is but All that we see or seem is but All that we see or seem is but a dream within a dream All that we see or seem is but a dream within a dream",
        img: "../src/assets/image/image.jpeg",
        name: "paul",
        work: "commercant",
    },
    {
    id: 3,
    p: "All that we see or seem is but a dream within a dream All that we see or seem is but a dream within a dream.",
    img: "../src/assets/image/image.jpeg",
    name: "paul",
    work: "commercant",
    },
    {
    id: 4,
    p: "All that we see or seem is but a dream within a dream All that we see or seem is but a dream within a dream.",
    img: "../src/assets/image/image.jpeg",
    name: "paul",
    work: "commercant",
    },
    {
    id: 5,
    p: "All that we see or seem is but a dream within a dream All that we see or seem is but a dream within a dream All that",
    img: "../src/assets/image/image.jpeg",
    name: "paul",
    work: "commercant",
    },
  ];


  return (
    <section className="bg-[#022562] bg-[radial-gradient(black,transparent)]">
      <div className="py-[50px] lg:py-[100px]">
        {/* partenaire */}
        <div className="relative overflow-hidden pt-[100px] pb-[50px] lg:pt-[150px]">
          <div className="flex w-fit gap-10 animate-temoin hover:pause">
            {data.map((item) => {
              return (
                <>
                  <div key={item.id} className="relative flex flex-col p-5 w-[60vw] sm:w-[350px] md:w-[400px] lg:w-[450px] min-h-[270px] rounded-lg border-[1px] text-[15px]] ">
                    <p className="grow">{item.p}</p>
                    <div className="flex flex-wrap mt-[50px]">
                      <img className="w-12 h-12 rounded-full" src={item.img} alt="" />
                      <div className="ml-4">
                        <h3>{item.name}</h3>
                        <h4> {item.work}</h4>
                      </div>
                    </div>
                  </div>

                  <div key={item.id} className="relative flex flex-col p-5 w-[60vw] sm:w-[350px] md:w-[400px] lg:w-[450px] min-h-[270px] rounded-lg border-[1px] text-[15px]] ">
                    <p className="grow">{item.p}</p>
                    <div className="flex flex-wrap mt-[50px]">
                      <img className="w-12 h-12 rounded-full" src={item.img} alt="" />
                      <div className="ml-4">
                        <h3>{item.name}</h3>
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
