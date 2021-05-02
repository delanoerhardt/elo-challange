const getLeadsFromLocalStorage = () => {
  const localLeads = window.localStorage.getItem("localLeads");

  if (localLeads === null) {
    return { leads: [] };
  }

  return JSON.parse(localLeads);
};

const sendLeadsFromLocalStorage = (localLeads) => {
  if (localLeads === null) {
    localLeads = { leads: [] };
  }

  window.localStorage.setItem("localLeads", JSON.stringify(localLeads));
};

module.exports.getLeadsFromLocalStorage = getLeadsFromLocalStorage;
module.exports.sendLeadsFromLocalStorage = sendLeadsFromLocalStorage;
