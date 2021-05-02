import "./LeadPanelView.css";
import "../Table.css";

import { useState } from "react";
import Outline from "../components/Outline";
import Header from "../components/Header";
import CustomButton from "../components/CustomButton";

function LeadPanelView({ handleAddNewPage, getLeads, updateLeadPosition }) {
  const handleOnClick = (event) => {
    handleAddNewPage(event);
  };

  let draggableElement, draggableTd, nextTd, target;
  let table;
  let lastPosX = 0,
    lastPosY = 0;
  let index;

  const [auxState, setAuxState] = useState({ aux: true });

  const startDrag = (event) => {
    event.preventDefault();

    target = event.target;
    index = parseInt(target.parentNode.getAttribute("data-key"));
    const position = parseInt(target.getAttribute("data-position"));
    if (position === 2) {
      return;
    }

    table = document.getElementById("table");
    draggableElement = document.getElementById("draggable");
    draggableTd = document.getElementById("draggableTableElement");
    lastPosX = event.clientX;
    lastPosY = event.clientY;
    nextTd = target.parentNode.children[(position + 1) % 3];

    // Set visible
    draggableElement.classList.remove("hidden");

    // Add name
    draggableTd.innerHTML = target.innerHTML;
    target.innerHTML = "‎";

    // Set size and position
    const top = target.clientHeight * (index + 1) + index;
    let i = 0,
      left = position;
    for (; i < position; i++) {
      left += parseInt(target.parentNode.children[i].clientWidth);
    }
    draggableElement.setAttribute(
      "style",
      `width:${target.clientWidth}px;maxWidth:${target.clientWidth}px;top:${top}px;left:${left}px`
    );
    draggableElement.style.maxWidth = target.clientWidth + "px";
    draggableElement.style.width = target.clientWidth + "px";
    draggableElement.style.top = top + "px";
    draggableElement.style.left = left + "px";

    // Set size of td
    draggableTd.setAttribute("style", `width:${target.clientWidth}px`);
    draggableTd.style.width = target.clientWidth + "px";

    // Set color
    draggableElement.classList.add(target.parentNode.classList);

    document.addEventListener("mousemove", drag);
    document.addEventListener("mouseup", finishDrag);
  };

  const drag = (event) => {
    event.preventDefault();
    const diffX = event.clientX - lastPosX,
      diffY = event.clientY - lastPosY;

    lastPosX = event.clientX;
    lastPosY = event.clientY;

    draggableElement.style.top =
      parseInt(draggableElement.style.top) + diffY + "px";
    draggableElement.style.left =
      parseInt(draggableElement.style.left) + diffX + "px";
  };

  const finishDrag = (event) => {
    event.preventDefault();

    draggableElement.classList.add("hidden");

    const bounding = table.getBoundingClientRect();

    const top = event.clientY - bounding.y;
    const left = event.clientX - bounding.x;

    if (
      top > nextTd.offsetTop &&
      top <= nextTd.offsetTop + nextTd.clientHeight &&
      left > nextTd.offsetLeft &&
      left <= nextTd.offsetLeft + nextTd.clientWidth
    ) {
      nextTd.innerHTML = draggableTd.innerHTML;
      updateLeadPosition(index);
      setAuxState({ aux: !auxState.aux });
    } else {
      target.innerHTML = draggableTd.innerHTML;
    }

    document.removeEventListener("mousemove", drag);
    document.removeEventListener("mouseup", finishDrag);
  };

  const getLeadsAsTableElements = () => {
    const leadsObj = getLeads();

    return leadsObj.leads.map((lead, index) => {
      const tableElementsList = [
        <td
          className="padded"
          onMouseDown={startDrag}
          data-position={lead.position}
        >
          {lead.info.leadName}
        </td>,
        <td className="padded"></td>,
        <td className="padded"></td>,
      ];

      return (
        <tr
          className={index % 2 === 0 ? "gray-row" : "white-row"}
          key={index}
          data-key={index}
        >
          {tableElementsList[(3 - lead.position) % 3]}
          {tableElementsList[(4 - lead.position) % 3]}
          {tableElementsList[(5 - lead.position) % 3]}
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
        <table className="relative" id="table">
          <thead>
            <tr>
              <th className="padded">Cliente em Potencial</th>
              <th className="padded">Dados Confirmados</th>
              <th className="padded">Reunião Agendada</th>
            </tr>
          </thead>
          <tbody className="absolute hidden" id="draggable">
            <tr>
              <td className="padded" id="draggableTableElement"></td>
            </tr>
          </tbody>
          <tbody data-aux={auxState}>{getLeadsAsTableElements()}</tbody>
        </table>
      </Outline>
    </div>
  );
}

export default LeadPanelView;
