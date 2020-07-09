const { ElementSchema } = require('./Element');
const { IdentifierUseSchema } = require('./allSchemaHeaders.js');

IdentifierUseSchema.add(ElementSchema);
IdentifierUseSchema.remove('id');
IdentifierUseSchema.add({
  value: String,
});

module.exports.IdentifierUseSchema = IdentifierUseSchema;
