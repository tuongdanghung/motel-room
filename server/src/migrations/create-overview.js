'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Overviews', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            code: {
                type: Sequelize.STRING
            },
            area: {
                type: Sequelize.STRING,
                defaultValue: '0'
            },
            type: {
                type: Sequelize.STRING
            },
            target: {
                type: Sequelize.STRING
            },
            created: {
                type: Sequelize.DATE
            },
            expire: {
                type: Sequelize.DATE
            },
            bonus: {
                type: Sequelize.STRING
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('Overviews');
    }
};