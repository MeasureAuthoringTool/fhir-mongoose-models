const { ElementSchema } = require('./Element');
const { ActionRelationshipTypeSchema } = require('./allSchemaHeaders.js');

ActionRelationshipTypeSchema.add(ElementSchema);
ActionRelationshipTypeSchema.remove('id');
ActionRelationshipTypeSchema.add({
  value: String,
});

module.exports.ActionRelationshipTypeSchema = ActionRelationshipTypeSchema;
