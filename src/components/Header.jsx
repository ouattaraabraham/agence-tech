import { useState, useEffect } from "react";
import Logo from "./Logo";
import Nav from "./Nav";

const Header = () => {
  // const [show, setShow] = useState(false);
  const [scrollValue, setScrollValue] = useState(false);
  let previousScrollPosition = 0;
  let currentScrollPosition = 0;

  
  useEffect(()=>{

    window.addEventListener("scroll", function () {

      currentScrollPosition = window.pageYOffset;

    
        //Subtract the two and conclude
        if (previousScrollPosition - currentScrollPosition < 0) {
        //   alert("scrol down")
          setScrollValue(false);
        } else if (previousScrollPosition - currentScrollPosition > 0) {
        //   alert("scrol up")
          setScrollValue(true);
        }

             // Update the previous value
             previousScrollPosition = currentScrollPosition;
    
      });
      
  },[])

  return (
    <div className="shadow-navBarr z-50">
      <header className="z-30 w-full shadow-md bg-[#002057]">
        <div className="w-full drop-shadow-sm flex justify-between mx-auto py-[1rem] px-[.75rem] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] 2xl:max-w-[1320px] 3xl:max-w-[1620px]">
          <Logo />
          <Nav />
        </div>
      </header>
      {
       ( scrollValue) &&  (
        <header className={`fixed top-0 z-20 w-full shadow-md bg-[#002057]`}>
        <div className="w-full drop-shadow-sm flex justify-between mx-auto py-[1rem] px-[.75rem] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] 2xl:max-w-[1320px] 3xl:max-w-[1620px]">
          <Logo />
          <Nav />
        </div>
      </header>)

      }
    </div>
  );
};

export default Header;
