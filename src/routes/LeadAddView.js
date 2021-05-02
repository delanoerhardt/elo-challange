import "./LeadAddView.css";
import "../Table.css";

import { useState } from "react";
import Outline from "../components/Outline";
import Header from "../components/Header";
import FormSection from "../components/FormSection";
import CustomButton from "../components/CustomButton";

function LeadAddView({ handleSubmit, goBack }) {
  const [formState, setFormState] = useState({
    leadName: "",
    leadPhone: "",
    leadEmail: "",
  });

  const [checksState, setChecksState] = useState({
    rpaCheckbox: false,
    digProdCheckbox: false,
    analyticsCheckbox: false,
    bpmCheckbox: false,
  });

  const [allChecked, setAllChecked] = useState(false);

  const [formDisabled, setFormDisabled] = useState(false);

  const handleChange = (event) => {
    event.preventDefault();
    event.target.classList.remove("invalid");

    const newFormState = { ...formState };

    newFormState[event.target.id] = event.target.value;

    setFormState(newFormState);
  };

  const handleChangeChecks = (event) => {
    event.persist();
    document.getElementById("options-table").classList.remove("invalid");

    const newChecksState = { ...checksState };

    newChecksState[event.target.id] = !checksState[event.target.id];

    if (event.target.id === "allChecked") {
      Object.keys(checksState).forEach(
        (key) => (newChecksState[key] = !allChecked)
      );

      setAllChecked(!allChecked);
    } else if (
      Object.values(newChecksState).filter((check) => !check).length === 0
    )
      setAllChecked(true);
    else setAllChecked(false);

    setChecksState(newChecksState);
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

    if (Object.values(checksState).filter((check) => check).length === 0) {
      document.getElementById("options-table").classList.add("invalid");
      valid = false;
    }

    if (!valid) {
      return;
    }

    document.getElementById("confirm-form").classList.remove("hidden");

    setFormDisabled(true);

    handleSubmit(formState, checksState, event);
  };

  return (
    <div className="center">
      <Outline>
        <Header>Novo lead</Header>
        <div className="hidden center" id="confirm-form">
          <Outline className="confirm-bg-div">
            <p className="padded">Lead {formState.leadName} adicionado!</p>
            <CustomButton
              type="button"
              color="#2196f3"
              textColor="white"
              border="none"
              value="Confirmar"
              onClick={goBack}
            />
          </Outline>
        </div>
        <form className="add-lead-form" onSubmit={handleSubmitWrapped}>
          <div>
            <FormSection
              id="leadName"
              type="text"
              maxWidth="280px"
              readOnly={formDisabled}
              valueOfState={formState.leadName}
              handleChange={handleChange}
            >
              Nome *
            </FormSection>
            <FormSection
              id="leadPhone"
              type="tel"
              maxWidth="280px"
              readOnly={formDisabled}
              valueOfState={formState.leadPhone}
              handleChange={handleChange}
            >
              Telefone *
            </FormSection>
            <FormSection
              id="leadEmail"
              type="email"
              maxWidth="280px"
              readOnly={formDisabled}
              valueOfState={formState.leadEmail}
              handleChange={handleChange}
            >
              Email *
            </FormSection>
          </div>
          <div>
            <div className="table-title">Oportunidades *</div>
            <table id="options-table">
              <thead>
                <tr>
                  <th>
                    <input
                      type="checkbox"
                      id="allChecked"
                      onChange={handleChangeChecks}
                      readOnly={formDisabled}
                      checked={allChecked}
                    ></input>
                  </th>
                  <th className="long"></th>
                </tr>
              </thead>
              <tbody>
                <tr className="gray-row">
                  <td>
                    <input
                      type="checkbox"
                      id="rpaCheckbox"
                      onChange={handleChangeChecks}
                      readOnly={formDisabled}
                      checked={checksState.rpaCheckbox}
                    ></input>
                  </td>
                  <td>
                    <label className="long" htmlFor="rpaCheckbox">
                      RPA
                    </label>
                  </td>
                </tr>
                <tr className="white-row">
                  <td>
                    <input
                      type="checkbox"
                      id="digProdCheckbox"
                      onChange={handleChangeChecks}
                      readOnly={formDisabled}
                      checked={checksState.digProdCheckbox}
                    ></input>
                  </td>
                  <td>
                    <label className="long" htmlFor="digProdCheckbox">
                      Produto Digital
                    </label>
                  </td>
                </tr>
                <tr className="gray-row">
                  <td>
                    <input
                      type="checkbox"
                      id="analyticsCheckbox"
                      onChange={handleChangeChecks}
                      readOnly={formDisabled}
                      checked={checksState.analyticsCheckbox}
                    ></input>
                  </td>
                  <td>
                    <label className="long" htmlFor="analyticsCheckbox">
                      Analytics
                    </label>
                  </td>
                </tr>
                <tr className="white-row">
                  <td>
                    <input
                      type="checkbox"
                      id="bpmCheckbox"
                      onChange={handleChangeChecks}
                      readOnly={formDisabled}
                      checked={checksState.bpmCheckbox}
                    ></input>
                  </td>
                  <td>
                    <label className="long" htmlFor="bpmCheckbox">
                      BPM
                    </label>
                  </td>
                </tr>
                <tr className="gray-row">
                  <td>
                    <div style={{ color: "#e6e6e6" }}>.</div>
                  </td>
                  <td></td>
                </tr>
              </tbody>
            </table>
            <div style={{ marginTop: "20px" }}>
              <CustomButton
                type="submit"
                color="#2196f3"
                textColor="white"
                readOnly={formDisabled}
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
