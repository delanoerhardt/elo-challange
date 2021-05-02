import "./LeadAddView.css";
import "../Table.css";

import { useState } from "react";
import Outline from "../components/Outline";
import Header from "../components/Header";
import FormSection from "../components/FormSection";
import CustomButton from "../components/CustomButton";

function LeadAddView({ handleSubmit }) {
  const [formState, setFormState] = useState({
    leadName: "",
    leadPhone: "",
    leadEmail: "",
    allChecked: false,
    rpaCheckbox: false,
    digProdCheckbox: false,
    analyticsCheckbox: false,
    bpmCheckbox: false,
  });

  const handleChange = (event) => {
    if (event.target.type === "checkbox") {
      event.persist();
      document.getElementById("options-table").classList.remove("invalid");
    } else {
      event.preventDefault();
      event.target.classList.remove("invalid");
    }

    const newFormState = { ...formState };

    newFormState[event.target.id] =
      event.target.type === "checkbox"
        ? !formState[event.target.id]
        : event.target.value;

    if (event.target.id === "allChecked") {
      newFormState["rpaCheckbox"] = newFormState[
        "digProdCheckbox"
      ] = newFormState["analyticsCheckbox"] = newFormState[
        "bpmCheckbox"
      ] = !formState[event.target.id];
    } else {
      if (
        newFormState["rpaCheckbox"] === true &&
        newFormState["digProdCheckbox"] === true &&
        newFormState["analyticsCheckbox"] === true &&
        newFormState["bpmCheckbox"] === true
      )
        newFormState["allChecked"] = true;
      else newFormState["allChecked"] = false;
    }

    setFormState(newFormState);
  };

  const handleSubmitWrapped = (event) => {
    event.preventDefault();

    let valid = true;

    if (formState.leadName === "") {
      document.getElementById("leadName").classList.add("invalid");
      valid = false;
    }

    if (formState.leadPhone === "") {
      document.getElementById("leadPhone").classList.add("invalid");
      valid = false;
    }

    if (formState.leadEmail === "") {
      document.getElementById("leadEmail").classList.add("invalid");
      valid = false;
    }

    if (
      formState.rpaCheckbox === false &&
      formState.digProdCheckbox === false &&
      formState.analyticsCheckbox === false &&
      formState.bpmCheckbox === false
    ) {
      document.getElementById("options-table").classList.add("invalid");
      valid = false;
    }

    if (!valid) {
      return;
    }

    handleSubmit(formState, event);
  };

  return (
    <div className="center">
      <Outline>
        <Header>Novo lead</Header>
        <form className="add-lead-form" onSubmit={handleSubmitWrapped}>
          <div>
            <FormSection
              id="leadName"
              type="text"
              maxWidth="280px"
              valueOfState={formState.leadName}
              handleChange={handleChange}
            >
              Nome *
            </FormSection>
            <FormSection
              id="leadPhone"
              type="tel"
              maxWidth="280px"
              valueOfState={formState.leadPhone}
              handleChange={handleChange}
            >
              Telefone *
            </FormSection>
            <FormSection
              id="leadEmail"
              type="email"
              maxWidth="280px"
              valueOfState={formState.leadEmail}
              handleChange={handleChange}
            >
              Email *
            </FormSection>
          </div>
          <div style={{ marginTop: "50px" }}>
            <div className="tab" id="options-table">
              <div className="row tab-header">
                <div className="el small">
                  <input
                    type="checkbox"
                    id="allChecked"
                    onChange={handleChange}
                    checked={formState.allChecked}
                  ></input>
                </div>
                <div className="el long"></div>
              </div>
              <div className="row gray-row">
                <div className="el small">
                  <input
                    type="checkbox"
                    id="rpaCheckbox"
                    onChange={handleChange}
                    checked={formState.rpaCheckbox}
                  ></input>
                </div>
                <div className="el long">RPA</div>
              </div>
              <div className="row white-row">
                <div className="el small">
                  <input
                    type="checkbox"
                    id="digProdCheckbox"
                    onChange={handleChange}
                    checked={formState.digProdCheckbox}
                  ></input>
                </div>
                <div className="el long">Produto Digital</div>
              </div>
              <div className="row gray-row">
                <div className="el small">
                  <input
                    type="checkbox"
                    id="analyticsCheckbox"
                    onChange={handleChange}
                    checked={formState.analyticsCheckbox}
                  ></input>
                </div>
                <div className="el long">Analytics</div>
              </div>
              <div className="row white-row">
                <div className="el small">
                  <input
                    type="checkbox"
                    id="bpmCheckbox"
                    onChange={handleChange}
                    checked={formState.bpmCheckbox}
                  ></input>
                </div>
                <div className="el long">BPM</div>
              </div>
              <div className="row gray-row">
                <div className="el small">
                  <div style={{ color: "#e6e6e6" }}>.</div>
                </div>
                <div className="el long"></div>
              </div>
            </div>
            <div style={{ marginTop: "20px" }}>
              <CustomButton
                type="submit"
                color="#2196f3"
                textColor="white"
                border="none"
                value="Salvar"
              />
            </div>
          </div>
        </form>
      </Outline>
    </div>
  );
}

export default LeadAddView;
