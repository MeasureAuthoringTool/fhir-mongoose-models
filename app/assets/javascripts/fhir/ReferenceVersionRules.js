const { ElementSchema } = require('./Element');
const { ReferenceVersionRulesSchema } = require('./allSchemaHeaders.js');

ReferenceVersionRulesSchema.add(ElementSchema);
ReferenceVersionRulesSchema.remove('id');
ReferenceVersionRulesSchema.add({
  value: String,
});

module.exports.ReferenceVersionRulesSchema = ReferenceVersionRulesSchema;
