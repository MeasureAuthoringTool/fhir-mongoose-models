const { ElementSchema } = require('./Element');
const { ActionRequiredBehaviorSchema } = require('./allSchemaHeaders.js');

ActionRequiredBehaviorSchema.add(ElementSchema);
ActionRequiredBehaviorSchema.remove('id');
ActionRequiredBehaviorSchema.add({
  value: String,
});

module.exports.ActionRequiredBehaviorSchema = ActionRequiredBehaviorSchema;
