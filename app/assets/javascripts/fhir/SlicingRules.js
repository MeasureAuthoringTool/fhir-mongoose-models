const { ElementSchema } = require('./Element');
const { SlicingRulesSchema } = require('./allSchemaHeaders.js');

SlicingRulesSchema.add(ElementSchema);
SlicingRulesSchema.remove('id');
SlicingRulesSchema.add({
  value: String,
});

module.exports.SlicingRulesSchema = SlicingRulesSchema;
