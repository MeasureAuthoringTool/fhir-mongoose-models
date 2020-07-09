const { ElementSchema } = require('./Element');
const { ActionPrecheckBehaviorSchema } = require('./allSchemaHeaders.js');

ActionPrecheckBehaviorSchema.add(ElementSchema);
ActionPrecheckBehaviorSchema.remove('id');
ActionPrecheckBehaviorSchema.add({
  value: String,
});

module.exports.ActionPrecheckBehaviorSchema = ActionPrecheckBehaviorSchema;
