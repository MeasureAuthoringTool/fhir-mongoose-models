const { ElementSchema } = require('./Element');
const { ActionGroupingBehaviorSchema } = require('./allSchemaHeaders.js');

ActionGroupingBehaviorSchema.add(ElementSchema);
ActionGroupingBehaviorSchema.remove('id');
ActionGroupingBehaviorSchema.add({
  value: String,
});

module.exports.ActionGroupingBehaviorSchema = ActionGroupingBehaviorSchema;
