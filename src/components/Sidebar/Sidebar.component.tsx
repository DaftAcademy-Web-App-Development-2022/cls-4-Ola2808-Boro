import { signOut, useSession } from "next-auth/react";
import React from "react";
import { Form, User } from "~/components";

import styles from "./Sidebar.module.css";

interface Props {
  children?: React.ReactNode;
}

export const Sidebar: React.FC<Props> = ({ children }) => {
  const { data } = useSession();
  const handleLogout = () => {
    signOut();
  };

  return (
    <div className={styles.root}>
      <div className={styles.top}>
        <User
          logout={handleLogout}
          email={data?.user?.email || ""}
          image={data?.user?.image || ""}
          name={data?.user?.name || ""}
          loading={!data}
        />
      </div>
      <div className={styles.center}>
        <Form />
      </div>
    </div>
  );
};
export default Sidebar;