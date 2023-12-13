import { FC } from "react";
import { Button, Card } from "react-bootstrap";
import PersonIcon from "@mui/icons-material/Person";
import GroupsIcon from "@mui/icons-material/Groups";

const UsageType: FC<any> = ({ buttonText, handleNextButtonClicked }) => {
  return (
    <>
      <div className="d-flex justify-content-evenly">
        <Card style={{ width: "10rem" }}>
          <Card.Body>
            <PersonIcon />
            <Card.Title className="h6 text-start mt-2">For myself</Card.Title>
            <Card.Text>
              <p className="text-start text-secondary mt-2">
                Write better. Think more clearly. Stay organized.
              </p>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "10rem" }}>
          <Card.Body>
            <GroupsIcon className="text-start" />
            <Card.Title className="h6 text-start mt-2">With my team</Card.Title>
            <Card.Text>
              <p className="text-start text-secondary mt-2">
                Wikis, docs, tasks & projects,all in one place.
              </p>
            </Card.Text>
          </Card.Body>
        </Card>
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

export default UsageType;
