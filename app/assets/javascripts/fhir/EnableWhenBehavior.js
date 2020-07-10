const { ElementSchema } = require('./Element');
const { EnableWhenBehaviorSchema } = require('./allSchemaHeaders.js');

EnableWhenBehaviorSchema.add(ElementSchema);
EnableWhenBehaviorSchema.remove('id');
EnableWhenBehaviorSchema.add({
  value: String,
});

module.exports.EnableWhenBehaviorSchema = EnableWhenBehaviorSchema;
