export const getVariableUnit = (variable) => {
  switch (variable) {
    case "Pressure": {
      return "(PSI)";
    }
    case "Temperature": {
      return `(\u00b0C)`;
    }
    default: {
      return "(-)";
    }
  }
};
