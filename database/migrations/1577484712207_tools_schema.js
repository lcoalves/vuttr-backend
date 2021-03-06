'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ToolsSchema extends Schema {
  up () {
    this.create('tools', (table) => {
      table.increments()
      table.string('title').notNullable()
      table.string('link').notNullable()
      table.string('description').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('tools')
  }
}

module.exports = ToolsSchema
