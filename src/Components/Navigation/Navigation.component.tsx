import PaynaLogo from "../../Assets/Components/payna-logo.svg"

/**
 * Navigation Component
 * 
 * @returns {JSX.Element} Navigation Component
 */
const NavigationComponent = (): JSX.Element => {
  return (
    <section className="flex justify-between items-center max-w-[1272px] mx-auto font-poppins font-normal text-base mb-[50px] md:mb-[100px] text-[#070F18]">
      <img src={PaynaLogo} width={150} />
      <div className='hidden lg:block'>
        <button className="mx-[30px] my-1 hover:font-semibold">Home</button>
        <button className="mx-[30px] my-1 hover:font-semibold">Feature</button>
        <button className="mx-[30px] my-1 hover:font-semibold">Showcase</button>
        <button className="mx-[30px] my-1 hover:font-semibold">Pricing</button>
      </div>
      <button className='py-3 px-11 bg-[#F5F6FB] rounded-full hidden md:block'>Sign In</button>
    </section>
  );
};

export default NavigationComponent;
