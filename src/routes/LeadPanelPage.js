import "./LeadPanelPage.css";

import Outline from "../components/Outline";
import Header from "../components/Header";
import CustomButton from "../components/CustomButton";

function LeadPanelPage() {
  const handleOnClick = (event) => {
    console.log(event);
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
        <div className="tab">
          <div className="row tab-header">
            <div className="el">Cliente em Potencial</div>
            <div className="el">Dados Confirmados</div>
            <div className="el">Reunião Agendada</div>
          </div>
          <div className="row"> </div>
        </div>
        {/* {getLeadsAsTableElements()} */}
      </Outline>
    </div>
  );
}

export default LeadPanelPage;
