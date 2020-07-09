const { ElementSchema } = require('./Element');
const { ContactPointSystemSchema } = require('./allSchemaHeaders.js');

ContactPointSystemSchema.add(ElementSchema);
ContactPointSystemSchema.remove('id');
ContactPointSystemSchema.add({
  value: String,
});

module.exports.ContactPointSystemSchema = ContactPointSystemSchema;
