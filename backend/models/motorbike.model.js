module.exports = (sequelize, Sequelize) => {
  const Motorbike = sequelize.define("motorbike", {
    brand: {
      type: Sequelize.STRING
    },
    model: {
      type: Sequelize.STRING
    },
  });

  return Motorbike;
};