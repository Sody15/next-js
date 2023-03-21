import React, { FC, ReactNode } from "react";
import { BeakerIcon } from "@heroicons/react/24/solid";

const Nav = () => {
  console.log(process.env.NEXT_PUBLIC_DB_HOST);

  return (
    <nav className="bg-white">
      <NavItem icon={<BeakerIcon />} text="Account Settings" />
      <NavItem icon={<BeakerIcon />} text="Email Preferences" />
      <NavItem icon={<BeakerIcon />} text="Payment Management " />
      <NavItem icon={<BeakerIcon />} text="Transactions " />
      <NavItem icon={<BeakerIcon />} text="Subscriptions" />
      <NavItem icon={<BeakerIcon />} text="Password & Security" />
      <NavItem icon={<BeakerIcon />} text="In-Game Currency" />
      <NavItem icon={<BeakerIcon />} text="Parental Controls" />
      <NavItem icon={<BeakerIcon />} text="Eula History" />
      <NavItem icon={<BeakerIcon />} text="Apps and Accounts" />
      <NavItem icon={<BeakerIcon />} text="Support-a-Creator" />
      <NavItem icon={<BeakerIcon />} text="Marketplace Seller" />
      <NavItem icon={<BeakerIcon />} text="Redeem Code" />
    </nav>
  );
};

const NavItem: FC<{ icon: ReactNode; text: string }> = ({ icon, text }) => {
  return (
    <div className="text-dark-gray font-semibold bg-white text-xs uppercase py-3 pl-3 flex items-center border-[1px] border-light-gray">
      <span className="icon pr-2 h-6 w-6 flex items-center">{icon}</span> {text}
    </div>
  );
};

export default Nav;
