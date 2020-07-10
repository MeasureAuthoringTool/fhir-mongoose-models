const { ElementSchema } = require('./Element');
const { NamingSystemIdentifierTypeSchema } = require('./allSchemaHeaders.js');

NamingSystemIdentifierTypeSchema.add(ElementSchema);
NamingSystemIdentifierTypeSchema.remove('id');
NamingSystemIdentifierTypeSchema.add({
  value: String,
});

module.exports.NamingSystemIdentifierTypeSchema = NamingSystemIdentifierTypeSchema;
