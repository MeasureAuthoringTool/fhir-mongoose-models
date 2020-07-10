const { ElementSchema } = require('./Element');
const { ActionCardinalityBehaviorSchema } = require('./allSchemaHeaders.js');

ActionCardinalityBehaviorSchema.add(ElementSchema);
ActionCardinalityBehaviorSchema.remove('id');
ActionCardinalityBehaviorSchema.add({
  value: String,
});

module.exports.ActionCardinalityBehaviorSchema = ActionCardinalityBehaviorSchema;
