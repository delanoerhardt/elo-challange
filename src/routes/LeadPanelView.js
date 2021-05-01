import "./LeadPanelView.css";
import "../Table.css";

import Outline from "../components/Outline";
import Header from "../components/Header";
import CustomButton from "../components/CustomButton";

function LeadPanelView() {
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
            <div className="el padded">Cliente em Potencial</div>
            <div className="el padded">Dados Confirmados</div>
            <div className="el padded">Reunião Agendada</div>
          </div>
          <div className="row"> </div>
        </div>
        {/* {getLeadsAsTableElements()} */}
      </Outline>
    </div>
  );
}

export default LeadPanelView;
