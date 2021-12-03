'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Categories', [
      {
        name: 'Terror',
        description: 'pelicula terror',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name: 'Ciencia Ficcion',
        description: 'pelicula ciencia ficcion',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name: 'Suspenso',
        description: 'pelicula suspenso',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name: 'Alternativo',
        description: 'pelicula alternativo',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name: 'Comedia',
        description: 'pelicula de comedia',
        createdAt: new Date,
        updatedAt: new Date
      }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
