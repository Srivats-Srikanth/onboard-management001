import { useCallback, useMemo, useState } from "react";
import { Button } from "react-bootstrap";
import Navigation from "../../component/Navigation/Navigation";
import PersonDetail from "./PersonDetail/PersonDetail";
import style from "./Setup.module.css";
import { ProgressOrder } from "./SetupConfig";
import UsageType from "./UsageType/UsageType";
import WorkspaceDetail from "./Workspace/WorkspaceDetail";
import GamepadIcon from "@mui/icons-material/Gamepad";

export const Setup = () => {
  const [activeTab, setActiveTab] = useState("welcome");

  const SetupSections: any = useMemo(() => {
    return {
      welcome: {
        mainText: "Welcome! First things first...",
        subText: "You can always change them later.",
        buttonText: "Create Workspace",
      },
      workspace: {
        mainText: `Let's set up a home for all your work`,
        subText: "You can always create another workspace later.",
        buttonText: "Create Workspace",
      },
      usageType: {
        mainText: "Welcome! First things first...",
        subText: "You can always change them later.",
        buttonText: "Create Workspace",
      },
      complete: {
        mainText: "Congratulations, Eren!",
        subText: "You have completed onboarding, you can start using the Eden!",
        buttonText: "Launch Eden",
      },
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTab]);

  const currentSectionDetails = useMemo(() => {
    const currentPage = SetupSections[activeTab];
    return currentPage;
  }, [activeTab, SetupSections]);

  const handleNextButtonClicked = useCallback(() => {
    const index = ProgressOrder.indexOf(activeTab);

    let currentTab = "";
    if (index !== -1 && index < ProgressOrder.length - 1) {
      currentTab = ProgressOrder[index + 1];
    } else {
      currentTab = "completed";
    }

    setActiveTab(currentTab);
  }, [activeTab]);

  const renderCurrentTabComponent = () => {
    switch (activeTab) {
      case "welcome":
        return (
          <PersonDetail
            buttonText={currentSectionDetails?.buttonText}
            handleNextButtonClicked={handleNextButtonClicked}
          />
        );
      case "workspace":
        return (
          <WorkspaceDetail
            buttonText={currentSectionDetails?.buttonText}
            handleNextButtonClicked={handleNextButtonClicked}
          />
        );
      case "usageType":
        return (
          <UsageType
            buttonText={currentSectionDetails?.buttonText}
            handleNextButtonClicked={handleNextButtonClicked}
          />
        );
      case "complete":
        return (
          <Button className="btnColor mt-3 w-100" variant="primary">
            {currentSectionDetails?.buttonText}
          </Button>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div className={`${style.container}`}>
        <h4>
          <GamepadIcon
            color="primary"
            style={{ color: "#664DE5" }}
            fontSize="large"
          />
          <b>Eden</b>
        </h4>
        <Navigation activeTab={activeTab} onNavClick={setActiveTab} />
        <div className={style.marginTop}>
          <h2>{currentSectionDetails.mainText}</h2>
          <p className="alignCenter text-secondary">
            {currentSectionDetails.subText}
          </p>
          <div className={style.maxWidth}>{renderCurrentTabComponent()}</div>
        </div>
      </div>
    </>
  );
};
