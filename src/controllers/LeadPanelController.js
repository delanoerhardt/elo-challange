import { useHistory } from "react-router";
import LeadPanelView from "../routes/LeadPanelView";
import { getLeadsFromLocalStorage } from "../services/LeadManager";

function LeadPanelController() {
  const history = useHistory();

  const handleAddNewPage = (event) => {
    history.push("/lead-add");
  };

  const getLeads = () => getLeadsFromLocalStorage();

  return (
    <LeadPanelView handleAddNewPage={handleAddNewPage} getLeads={getLeads} />
  );
}

export default LeadPanelController;
