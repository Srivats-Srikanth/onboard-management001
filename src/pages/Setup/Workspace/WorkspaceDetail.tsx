import { FC } from "react";
import { Button } from "react-bootstrap";
import { ISetupProps } from "../ISetupProps";

const WorkspaceDetail: FC<ISetupProps> = ({
  buttonText,
  handleNextButtonClicked,
}) => {
  return (
    <>
      <div>
        <label className="w-100 text-start pb-2 fw-bold">Workspace Name</label>
        <input
          className="w-100 mb-2 p-2 rounded-3 custom-border"
          placeholder="Eden"
        />
      </div>
      <div>
        <label className="w-100 text-start pb-2 fw-bold">
          Workspace URL <span>(optional)</span>
        </label>
        <input
          className="w-100 mb-2 p-2 rounded-3 custom-border"
          placeholder="Steve"
        />
      </div>
      <Button
        onClick={handleNextButtonClicked}
        className="btnColor mt-3 w-100"
        variant="primary"
      >
        {buttonText}
      </Button>
    </>
  );
};

export default WorkspaceDetail;
