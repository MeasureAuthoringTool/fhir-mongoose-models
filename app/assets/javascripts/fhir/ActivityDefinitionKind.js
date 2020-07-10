const { ElementSchema } = require('./Element');
const { ActivityDefinitionKindSchema } = require('./allSchemaHeaders.js');

ActivityDefinitionKindSchema.add(ElementSchema);
ActivityDefinitionKindSchema.remove('id');
ActivityDefinitionKindSchema.add({
  value: String,
});

module.exports.ActivityDefinitionKindSchema = ActivityDefinitionKindSchema;
