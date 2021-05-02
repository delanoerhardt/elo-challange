import { useHistory } from "react-router";
import LeadPanelView from "../routes/LeadPanelView";
import {
  getLeadsFromLocalStorage,
  sendLeadsFromLocalStorage as sendLeads,
} from "../services/LeadManager";

function LeadPanelController() {
  const history = useHistory();

  const handleAddNewPage = (event) => {
    history.push("/lead-add");
  };

  const getLeads = () => {
    const leadsObj = getLeadsFromLocalStorage();

    if (leadsObj.leads.length === 0) {
      leadsObj.leads.push({ position: 2, info: { name: "" } });
    }

    return leadsObj;
  };

  const updateLeadPosition = (leadIndex) => {
    const leadsObj = getLeadsFromLocalStorage();

    leadsObj.leads[leadIndex].position++;

    sendLeads(leadsObj);
  };

  return (
    <LeadPanelView
      handleAddNewPage={handleAddNewPage}
      getLeads={getLeads}
      updateLeadPosition={updateLeadPosition}
    />
  );
}

export default LeadPanelController;
