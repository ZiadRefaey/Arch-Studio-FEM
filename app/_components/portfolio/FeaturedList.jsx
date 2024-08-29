import FeaturedCard from "./FeaturedCard";
const FeaturedCards = [
  {
    title: "Seraph Station",
    date: "September 2019",
    bg: "bg-seraph-mobile md:bg-seraph-tablet xl:bg-seraph-desktop",
  },
  {
    title: "Eebox Building",
    date: "August 2017",
    bg: "bg-eebox-mobile md:bg-eebox-tablet xl:bg-eebox-desktop",
  },
  {
    title: "Federal II Tower",
    date: "March 2017",
    bg: "bg-federal-mobile md:bg-federal-tablet xl:bg-federal-desktop",
  },
  {
    title: "Project Del Sol",
    date: "January 2016",
    bg: "bg-del-sol-mobile md:bg-del-sol-tablet xl:bg-del-sol-desktop",
  },
  {
    title: "Le Prototype",
    date: "October 2015",
    bg: "bg-prototype-mobile md:bg-prototype-tablet xl:bg-prototype-desktop",
  },
  {
    title: "228B Tower",
    date: "April 2015",
    bg: "bg-228b-mobile md:bg-228b-tablet xl:bg-228b-desktop",
  },
  {
    title: "Grand Edelweiss Hotel",
    date: "December 2013",
    bg: "bg-edelweiss-mobile md:bg-edelweiss-tablet xl:bg-edelweiss-desktop",
  },
  {
    title: "Netcry Tower",
    date: "August 2012",
    bg: "bg-netcry-mobile md:bg-netcry-tablet xl:bg-netcry-desktop",
  },
  {
    title: "Hypers",
    date: "January 2012",
    bg: "bg-hypers-mobile md:bg-hypers-tablet xl:bg-hypers-desktop",
  },
  {
    title: "SXIV Tower",
    date: "March 2011",
    bg: "bg-sxiv-mobile md:bg-sxiv-tablet xl:bg-sxiv-desktop",
  },
  {
    title: "Trinity Bank Tower",
    date: "September 2010",
    bg: "bg-trinity-mobile md:bg-trinity-tablet xl:bg-trinity-desktop",
  },
  {
    title: "Project Paramour",
    date: "February 2008",
    bg: "bg-paramour-mobile md:bg-paramour-tablet xl:bg-paramour-desktop",
  },
];
export default function FeaturedList() {
  return (
    <div className="mt-[56px] mb-[132px] px-8 flex flex-col gap-6 xl:flex-wrap xl:flex-row xl:gap-[30px]">
      {FeaturedCards.map((featuredCard, index) => (
        <FeaturedCard
          order={index}
          key={featuredCard.title}
          title={featuredCard.title}
          bg={featuredCard.bg}
          date={featuredCard.date}
        />
      ))}{" "}
    </div>
  );
}
