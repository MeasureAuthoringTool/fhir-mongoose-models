const { ElementSchema } = require('./Element');
const { GraphCompartmentRuleSchema } = require('./allSchemaHeaders.js');

GraphCompartmentRuleSchema.add(ElementSchema);
GraphCompartmentRuleSchema.remove('id');
GraphCompartmentRuleSchema.add({
  value: String,
});

module.exports.GraphCompartmentRuleSchema = GraphCompartmentRuleSchema;
