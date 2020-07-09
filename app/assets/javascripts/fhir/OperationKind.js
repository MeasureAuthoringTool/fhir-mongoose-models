const { ElementSchema } = require('./Element');
const { OperationKindSchema } = require('./allSchemaHeaders.js');

OperationKindSchema.add(ElementSchema);
OperationKindSchema.remove('id');
OperationKindSchema.add({
  value: String,
});

module.exports.OperationKindSchema = OperationKindSchema;
