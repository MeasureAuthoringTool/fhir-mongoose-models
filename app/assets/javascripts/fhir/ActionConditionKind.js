const { ElementSchema } = require('./Element');
const { ActionConditionKindSchema } = require('./allSchemaHeaders.js');

ActionConditionKindSchema.add(ElementSchema);
ActionConditionKindSchema.remove('id');
ActionConditionKindSchema.add({
  value: String,
});

module.exports.ActionConditionKindSchema = ActionConditionKindSchema;
