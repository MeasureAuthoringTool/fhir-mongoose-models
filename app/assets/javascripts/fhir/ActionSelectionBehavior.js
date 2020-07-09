const { ElementSchema } = require('./Element');
const { ActionSelectionBehaviorSchema } = require('./allSchemaHeaders.js');

ActionSelectionBehaviorSchema.add(ElementSchema);
ActionSelectionBehaviorSchema.remove('id');
ActionSelectionBehaviorSchema.add({
  value: String,
});

module.exports.ActionSelectionBehaviorSchema = ActionSelectionBehaviorSchema;
