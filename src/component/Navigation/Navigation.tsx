import { FC } from "react";
import styles from "./Navigation.module.css";
import { ProgressOrder } from "../../pages/Setup/SetupConfig";

interface INavigationProps {
  // onNavClick : (val:string) => void;
  activeTab: string;
  onNavClick: any;
}
const Navigation: FC<INavigationProps> = ({ activeTab, onNavClick }) => {
  return (
    <div className="d-flex w-25 mt-4 justify-content-around">
      {ProgressOrder.map((tabName, order) => (
        <div
          onClick={() => onNavClick(tabName)}
          className={`${styles.circle} ${
            tabName === activeTab && styles.activeNavColor
          }`}
        >
          <p className={`${styles.textPadding} text-centre`}>{order}</p>
        </div>
      ))}
    </div>
  );
};

export default Navigation;
