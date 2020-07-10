const { ElementSchema } = require('./Element');
const { NameUseSchema } = require('./allSchemaHeaders.js');

NameUseSchema.add(ElementSchema);
NameUseSchema.remove('id');
NameUseSchema.add({
  value: String,
});

module.exports.NameUseSchema = NameUseSchema;
