"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Categories", [
      {
        name: "Blind Boxes",
        slug: "blind-boxes",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Sanrio",
        slug: "sanrio",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Pop Mart",
        slug: "pop-mart",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Snacks Japoneses",
        slug: "snacks-japoneses",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Posters",
        slug: "posters",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Accesorios",
        slug: "accesorios",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Categories", null, {});
  },
};