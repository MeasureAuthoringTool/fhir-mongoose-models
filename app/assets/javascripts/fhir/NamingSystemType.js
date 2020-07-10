const { ElementSchema } = require('./Element');
const { NamingSystemTypeSchema } = require('./allSchemaHeaders.js');

NamingSystemTypeSchema.add(ElementSchema);
NamingSystemTypeSchema.remove('id');
NamingSystemTypeSchema.add({
  value: String,
});

module.exports.NamingSystemTypeSchema = NamingSystemTypeSchema;
