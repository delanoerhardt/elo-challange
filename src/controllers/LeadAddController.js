import LeadAddView from "../routes/LeadAddView";

function LeadAddController() {
  const handleSubmit = (state, event) => {
    console.log(state);
  };

  return <LeadAddView handleSubmit={handleSubmit} />;
}

export default LeadAddController;
