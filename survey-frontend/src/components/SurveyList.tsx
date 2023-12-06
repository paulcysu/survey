const SurveyList = ({surveys}) => {
  return (
    <div>{surveys.map(survey => <div key={"survery"+survey.id}>{survey.id}</div>)}</div>
  )
}

export default SurveyList