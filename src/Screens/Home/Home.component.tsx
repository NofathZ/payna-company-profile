import AdobeLogo from "../../Assets/Pages/Home/adobe-logo.svg";
import AppleLogo from "../../Assets/Pages/Home/apple-logo.svg";
import Benefit189CountryIcon from "../../Assets/Pages/Home/benefit-189-country.svg";
import BenefitKanbanModeIcon from "../../Assets/Pages/Home/benefit-kanban-mode.svg";
import BenefitOfflineModeIcon from "../../Assets/Pages/Home/benefit-offline-mode.svg";
import BenefitRewardSystemIcon from "../../Assets/Pages/Home/benefit-reward-system.svg";
import BenefitShareInsightIcon from "../../Assets/Pages/Home/benefit-share-insight.svg";
import BenefitTrackLeadsIcon from "../../Assets/Pages/Home/benefit-track-leads.svg";
import ButtonPlayIcon from "../../Assets/Pages/Home/button-play.svg";
import GoogleLogo from "../../Assets/Pages/Home/google-logo.svg";
import HomeBannerAnalyticsImage from "../../Assets/Pages/Home/home-banner-analytics.png";
import HomeBannerBulkExportImage from "../../Assets/Pages/Home/home-banner-bulk-export.png";
import SlackLogo from "../../Assets/Pages/Home/slack-logo.svg";
import SpotifyLogo from "../../Assets/Pages/Home/spotify-logo.svg";

import { BenefitCard } from "./Components";

/**
 * Render Banner
 * 
 * @returns {JSX.Element} Banner section
 */
function _renderBanner(): JSX.Element {
  return (
    <div className="grid grid-cols-[auto] lg:grid-cols-[auto_540px] gap-x-[180px] mb-[50px] md:mb-[70px]">
      <div>
        <p className="font-poppins font-bold text-[38px] md:text-[55px] mb-5 text-[#070F18] text-left md:text-center lg:text-left">
          Manage Payroll <br />
          Like an Expert
        </p>
        <p className="font-poppins font-normal text-[16px] leading-[32px] text-[#575455] mb-[30px] text-left md:text-center lg:text-left">
          Payna is helping you to setting up the payroll without <br />
          required any finance skills or knowledge before
        </p>
        <div className="flex justify-start md:justify-center lg:justify-start">
          <button className="py-3 px-11 bg-[#1F7CFF] rounded-full font-poppins font-semibold text-[16px] text-[#FFFFFF]">
            Get Started
          </button>
        </div>
      </div>
      <div className="w-full h-[400px] bg-home-banner bg-no-repeat bg-cover rounded-[60px] relative hidden lg:inline-block">
        <img
          className="absolute top-[120px] -left-[150px]"
          src={HomeBannerAnalyticsImage}
          alt=""
        />
        <img
          className="absolute top-[40px] -right-[70px]"
          src={HomeBannerBulkExportImage}
          alt=""
        />
      </div>
    </div>
  );
}

/**
 * Render Partner
 * 
 * @returns {JSX.Element} Partner section
 */
function _renderPartner(): JSX.Element {
  return (
    <div className="flex justify-between md:justify-center lg:justify-between mb-[80px] md:mb-[130px] flex-wrap lg:flex-nowrap">
      <span className="font-poppins font-semibold text-[16px] mb-[30px]">
        Trusted by <br className="hidden lg:block" />
        Global Companies
      </span>
      <div className="flex self-start flex-wrap">
        <img className="mr-[25px] mb-[25px]" src={AppleLogo} height={30} />
        <img className="mr-[25px] mb-[25px]" src={AdobeLogo} height={30} />
        <img className="mr-[25px] mb-[25px]" src={SlackLogo} height={30} />
        <img className="mr-[25px] mb-[25px]" src={SpotifyLogo} height={30} />
        <img className="mr-[25px] mb-[25px]" src={GoogleLogo} height={30} />
      </div>
    </div>
  );
}

/**
 * Render Benefit
 * 
 * @returns {JSX.Element} Benefit section
 */
function _renderBenefit(): JSX.Element {
  return (
    <div className="mb-[80px] md:mb-[130px]">
      <div className="max-w-[390px] mx-auto mb-[50px] md:mb-[70px]">
        <p className="text-center font-poppins font-bold text-[16px] text-[#F75C4E] mb-[6pxc]">
          WORK BETTER
        </p>
        <p className="text-center font-poppins font-bold text-[28px] md:text-[36px] text-[#070F18] mb-5">
          For Your Business
        </p>
        <p className="text-center font-poppins font-normal text-[16px] text-[#575455]">
          We did research what your company needs and here we are providing all
          of them just for you
        </p>
      </div>
      <div className="grid grid-cols-[auto] md:grid-cols-[auto_auto] lg:grid-cols-[auto_auto_auto] gap-x-[90px] gap-y-[60px]">
        <BenefitCard
          img={BenefitShareInsightIcon}
          title="Share Insights"
          description="Working together with your team to make decisions"
        />
        <BenefitCard
          img={BenefitTrackLeadsIcon}
          title="Track Leads"
          description="See where your money goes and comes in business"
        />
        <BenefitCard
          img={BenefitOfflineModeIcon}
          title="Offline Mode"
          description="Use the feature while off from internet? sure can"
        />
        <BenefitCard
          img={BenefitKanbanModeIcon}
          title="Kanban Mode"
          description="Organize the report that easy to be understand"
        />
        <BenefitCard
          img={BenefitRewardSystemIcon}
          title="Reward System"
          description="Motivate your team working harder and receive a gift"
        />
        <BenefitCard
          img={Benefit189CountryIcon}
          title="189 Country"
          description="Working together worldwide people from anywhere"
        />
      </div>
    </div>
  );
}

/**
 * Render Contact us
 * 
 * @returns {JSX.Element} Contact us section
 */
function _renderContactUs(): JSX.Element {
  return (
    <div className="grid grid-cols-[auto] xl:grid-cols-[635px_auto] gap-[50px] lg:gap-[70px]">
      <div className="w-[321px] h-[227px] lg:w-[522px] lg:h-[369px] xl:w-[635px] xl:h-[450px] bg-home-contact bg-contain rounded-[30px] md:rounded-[40px] xl:rounded-[60px] flex justify-center items-center mx-auto xl:mx-0">
        <img
          className="cursor-pointer"
          src={ButtonPlayIcon}
          width={70}
          height={70}
        />
      </div>
      <div className="flex justify-center xl:justify-start">
        <div className="flex items-center max-w-[480px]">
          <div>
            <p className="font-poppins font-bold text-[16px] text-[#F75C4E] mb-[6px] text-center xl:text-left">
              SAVE MORE TIME
            </p>
            <p className="font-poppins font-bold text-[28px] md:text-[36px] text-[#070F18] mb-5 text-center xl:text-left">
              And Boost Productivity
            </p>
            <p className="font-poppins font-normal text-[16px] text-[#575455] mb-10 text-center xl:text-left">
              Your employees can bring any success into your business, so we
              need to take care of them
            </p>
            <div className="relative w-[430px] mx-auto xl:mx-0">
              <input
                className="px-6 py-3 rounded-[50px] bg-[#F5F6FB] placeholder-[#575455] w-[299px]"
                type="email"
                placeholder="Email Address"
              />
              <button className="w-[180px] h-[48px] bg-[#1F7CFF] rounded-full font-poppins font-semibold text-[16px] text-[#FFFFFF] absolute right-0">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * HomeComponent
 *
 * @returns {JSX.Element} Home Screen Component
 */
function HomeComponent(): JSX.Element {
  return (
    <div className="max-w-[1187px] mx-auto">
      {_renderBanner()}
      {_renderPartner()}
      {_renderBenefit()}
      {_renderContactUs()}
    </div>
  );
}

export default HomeComponent;
