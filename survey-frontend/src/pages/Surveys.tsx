import PageComponent from "../components/PageComponent";
import SurveyList from "../components/SurveyList";
import { useStateContext } from "../contexts/ContextProvider";

const Surveys = () => {
  const { surveys } = useStateContext();

  return (
    <PageComponent title="Survey">
      <SurveyList surveys={surveys} />
    </PageComponent>
  );
};

export default Surveys;
