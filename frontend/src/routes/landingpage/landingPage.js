import {
  BottomNavMobile,
  NavListWeb,
  PortfolioWeb,
  TopNav,
} from "../../components";

const LangingPage = () => {
  return (
    <div>
      <TopNav />
      <section className=" pl-5 mt-40">
        <aside className="hidden md:flex flex-col">
          <PortfolioWeb />
          <NavListWeb />
        </aside>
      </section>
      <BottomNavMobile />
    </div>
  );
};

export default LangingPage;
