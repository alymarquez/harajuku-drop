"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Products", [

      {
        name: "Blind Box Labubu Popmart",
        description: "Caja sorpresa con figura coleccionable Labubu de Popmart.",
        price: 28000,
        image: "https://images.unsplash.com/photo-1608889175119-6b8c417c7c0d",
        stock: 20,
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        name: "Blind Box Dimoo Space Travel",
        description: "Figura coleccionable Dimoo de la serie Space Travel.",
        price: 29000,
        image: "https://images.unsplash.com/photo-1596464716127-f2a82984de30",
        stock: 15,
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        name: "Peluche Hello Kitty",
        description: "Peluche original de Hello Kitty.",
        price: 35000,
        image: "https://images.unsplash.com/photo-1585155770447-2f66e2a397b5",
        stock: 10,
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        name: "Llavero Kuromi",
        description: "Llavero de Kuromi para mochilas o llaves.",
        price: 9000,
        image: "https://images.unsplash.com/photo-1629196914168-6b3d1f5e723a",
        stock: 40,
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        name: "Figura Skullpanda Popmart",
        description: "Figura coleccionable estilo designer toy.",
        price: 32000,
        image: "https://images.unsplash.com/photo-1618336753974-aae8e04506aa",
        stock: 18,
        categoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        name: "Figura Molly Designer Toy",
        description: "Figura coleccionable estilo art toy.",
        price: 34000,
        image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088",
        stock: 12,
        categoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        name: "Pocky sabor frutilla",
        description: "Snack japonés de palitos con cobertura sabor frutilla.",
        price: 4500,
        image: "https://images.unsplash.com/photo-1617196035154-1e7c6d51c5d4",
        stock: 50,
        categoryId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        name: "Mochi japonés sabor matcha",
        description: "Dulce japonés tradicional relleno sabor matcha.",
        price: 6500,
        image: "https://images.unsplash.com/photo-1604908176997-4310c7b0dbb6",
        stock: 35,
        categoryId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        name: "Poster Kuromi",
        description: "Poster decorativo de Kuromi.",
        price: 12000,
        image: "https://images.unsplash.com/photo-1517817748493-49ec54a32465",
        stock: 30,
        categoryId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        name: "Poster Harajuku Street",
        description: "Poster inspirado en la moda callejera de Harajuku.",
        price: 14000,
        image: "https://images.unsplash.com/photo-1520975922323-1c8c5d3c0b4b",
        stock: 20,
        categoryId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        name: "Collar corazón estilo Y2K",
        description: "Collar con dije de corazón estilo Y2K.",
        price: 8500,
        image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f",
        stock: 60,
        categoryId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        name: "Hebillas para el pelo color pastel",
        description: "Set de 6 hebillas para el pelo.",
        price: 7000,
        image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80",
        stock: 70,
        categoryId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      }

    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Products", null, {});
  }
};