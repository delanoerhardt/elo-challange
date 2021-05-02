import "./LeadPanelView.css";
import "../Table.css";

import Outline from "../components/Outline";
import Header from "../components/Header";
import CustomButton from "../components/CustomButton";

function LeadPanelView({ handleAddNewPage, getLeads }) {
  const handleOnClick = (event) => {
    handleAddNewPage(event);
  };

  const getLeadsAsTableElements = () => {
    const leadsObj = getLeads();

    console.log(leadsObj);

    return leadsObj.leads.map((lead, index) => {
      const tableElementsList = [
        <td className="el padded">{lead.info.leadName}</td>,
        <td className="el padded"></td>,
        <td className="el padded"></td>,
      ];

      return (
        <tr
          className={index % 2 === 0 ? "gray-row row" : "white-row row"}
          key={lead.key}
        >
          {tableElementsList[(0 + lead.position) % 3]}
          {tableElementsList[(1 + lead.position) % 3]}
          {tableElementsList[(2 + lead.position) % 3]}
        </tr>
      );
    });
  };

  return (
    <div className="center">
      <Outline>
        <Header>Painel de leads</Header>
        <div className="add-lead-button-upper-div">
          <div className="add-lead-button-lower-div">
            <CustomButton
              type="button"
              color="#2196f3"
              textColor="white"
              border="none"
              value="Novo Lead (+)"
              onClick={handleOnClick}
            />
          </div>
        </div>
        <table className="tab">
          <theade>
            <tr className="tab-header">
              <th className="padded">Cliente em Potencial</th>
              <th className="padded">Dados Confirmados</th>
              <th className="padded">Reunião Agendada</th>
            </tr>
          </theade>
          <tbody>{getLeadsAsTableElements()}</tbody>
        </table>
      </Outline>
    </div>
  );
}

export default LeadPanelView;
