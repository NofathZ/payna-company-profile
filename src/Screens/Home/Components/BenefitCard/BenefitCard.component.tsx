type BenefitCardType = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  img: any;
  title: string;
  description: string;
  alt: string;
};

/**
 * Benefit Card Component
 *
 * @returns {JSX.Element} Benefit Card Component
 */
const BenefitCard = ({
  img,
  title,
  description,
  alt
}: BenefitCardType): JSX.Element => {
  return (
    <div className="grid grid-cols-[60px_auto] gap-x-6">
      <img className="rounded-full" src={img} width={60} height={60} alt={alt} />
      <div>
        <h3 className="font-poppins font-semibold text-[20px] text-[#070F18] mb-3">
          {title}
        </h3>
        <p className="font-poppins font-normal text-[16px] text-[#575455] leading-[32px]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default BenefitCard;
