import { useHistory } from "react-router";
import LeadAddView from "../routes/LeadAddView";
import {
  getLeadsFromLocalStorage as getLeads,
  sendLeadsFromLocalStorage as sendLeads,
} from "../services/LeadManager";

function LeadAddController() {
  const history = useHistory();

  const handleSubmit = (textState, checksState, event) => {
    const leadsArray = getLeads();

    leadsArray.leads.push({
      position: 0,
      info: { ...textState, ...checksState },
    });

    sendLeads(leadsArray);
  };

  const goBack = () => {
    history.push("/lead-panel");
  };

  return <LeadAddView handleSubmit={handleSubmit} goBack={goBack} />;
}

export default LeadAddController;
