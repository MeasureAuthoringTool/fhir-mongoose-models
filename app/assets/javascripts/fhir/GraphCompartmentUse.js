const { ElementSchema } = require('./Element');
const { GraphCompartmentUseSchema } = require('./allSchemaHeaders.js');

GraphCompartmentUseSchema.add(ElementSchema);
GraphCompartmentUseSchema.remove('id');
GraphCompartmentUseSchema.add({
  value: String,
});

module.exports.GraphCompartmentUseSchema = GraphCompartmentUseSchema;
