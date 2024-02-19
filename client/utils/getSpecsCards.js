
export const getSpecsCards = (data) => {
    return [
      { title: "Año de vehículo", text: data.details.year },
      { title: "Tipo de vehículo", text: data.type },
      { title: "Asientos", text: data.details.seats },
      { title: "Puertas", text: data.details.doors },
      { title: "Potencia", text: data.details.power + "cv" },
      { title: "Combustible", text: data.details.fuel },
    ];
  };
  