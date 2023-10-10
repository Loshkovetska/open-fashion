import Link from "next/link";
import Call from "../../../assets/icons/Call.svg";
import Location from "../../../assets/icons/Location.svg";
import Socials from "../Socials";
import Divider from "../Divider";
import { useState } from "react";
import NavTabs from "../NavTabs";
import { useSelector } from "react-redux";
import { changeMenuState } from "../../../store/globalSlice";
import tabs from "../../../mocks/tabs";
import NavItem from "../NavItem";
import ModalClose from "../ModalClose";
import Modal from "../Modal";

const Nav = () => {
  const { isMenuOpen } = useSelector((state: any) => state.global);
  const [tab, setTab] = useState(0);

  return (
    <Modal isOpen={isMenuOpen}>
      <ModalClose func={changeMenuState} />
      <NavTabs tabChange={(value) => setTab(value)} tabs={tabs} />
      <div className="flex flex-col mt-6">
        {tabs[tab].list?.map((c) => (
          <NavItem c={c} key={c.title} />
        ))}
      </div>
      <div className="flex flex-col gap-4 my-6">
        <Link
          href="tel:(786) 713-8616"
          className="flex items-center gap-4 text-base font-sans"
        >
          <Call /> (786) 713-8616
        </Link>
        <Link
          href="https://example.com/"
          target="_blank"
          className="flex items-center gap-4 text-base font-sans"
        >
          <Location /> Store locator
        </Link>
      </div>
      <div className="m-auto my-0 w-32">
        <Divider />
      </div>
      <div className="py-6"></div>
      <Socials />
    </Modal>
  );
};

export default Nav;
