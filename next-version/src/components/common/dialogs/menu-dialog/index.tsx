import Divider from "@/components/common/divider";
import Socials from "@/components/common/socials";
import { Location, Phone } from "@/components/icons";
import Modal from "@/components/ui/modal";
import ModalClose from "@/components/ui/modal/modal-close";
import { MENU_TABS } from "@/lib/constants";
import { DialogPropType } from "@/lib/type";
import Link from "next/link";
import { useState } from "react";
import NavItem from "./menu-item";
import NavTabs from "./menu-tabs";

export default function Nav({ open, onOpenChange }: DialogPropType) {
  const [tab, setTab] = useState(0);

  return (
    <Modal isOpen={open}>
      <ModalClose action={onOpenChange} />
      <NavTabs
        tabChange={setTab}
        tabs={MENU_TABS}
      />
      <div className="flex flex-col mt-6">
        {MENU_TABS[tab].list?.map((c) => (
          <NavItem
            {...c}
            key={c.title}
          />
        ))}
      </div>
      <div className="flex flex-col gap-4 my-6">
        <Link
          href="tel:(786) 713-8616"
          className="flex items-center gap-4 text-base font-sans"
        >
          <Phone /> (786) 713-8616
        </Link>
        <Link
          href="https://example.com/"
          target="_blank"
          className="flex items-center gap-4 text-base font-sans"
        >
          <Location /> Store locator
        </Link>
      </div>
      <Divider className="mx-auto w-32 mb-12" />
      <Socials />
    </Modal>
  );
}
