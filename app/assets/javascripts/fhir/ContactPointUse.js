const { ElementSchema } = require('./Element');
const { ContactPointUseSchema } = require('./allSchemaHeaders.js');

ContactPointUseSchema.add(ElementSchema);
ContactPointUseSchema.remove('id');
ContactPointUseSchema.add({
  value: String,
});

module.exports.ContactPointUseSchema = ContactPointUseSchema;
