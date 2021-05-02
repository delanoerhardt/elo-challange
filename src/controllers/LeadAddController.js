import { useHistory } from "react-router";
import LeadAddView from "../routes/LeadAddView";
import {
  getLeadsFromLocalStorage as getLeads,
  sendLeadsFromLocalStorage as sendLeads,
} from "../services/LeadManager";

function LeadAddController() {
  const history = useHistory();

  const handleSubmit = (state, event) => {
    const leadsArray = getLeads();
    leadsArray.leads.push({
      position: 0,
      info: { ...state },
      key: Math.random(),
    });

    console.log(leadsArray);

    sendLeads(leadsArray);

    history.push("/lead-panel");
  };

  return <LeadAddView handleSubmit={handleSubmit} />;
}

export default LeadAddController;
