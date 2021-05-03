function validateLeadForm(textState, checksState) {
  let invalidFieldIds = [];

  if (textState.leadName === "") {
    invalidFieldIds.push("leadName");
  }

  if (textState.leadPhone === "") {
    invalidFieldIds.push("leadPhone");
  }

  if (textState.leadEmail === "") {
    invalidFieldIds.push("leadEmail");
  }

  if (Object.values(checksState).filter((check) => check).length === 0) {
    invalidFieldIds.push("options-table");
  }

  return {
    valid: invalidFieldIds.length === 0,
    invalidFieldIds: invalidFieldIds,
  };
}

module.exports.validateLeadForm = validateLeadForm;
