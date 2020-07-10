const { ContactPointSchema } = require('./allSchemaHeaders.js');
const { ElementSchema } = require('./Element');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { ContactDetailSchema } = require('./allSchemaHeaders.js');

ContactDetailSchema.add(ElementSchema);
ContactDetailSchema.remove('id');
ContactDetailSchema.add({
  name: PrimitiveStringSchema,
  telecom: [ContactPointSchema],
});

module.exports.ContactDetailSchema = ContactDetailSchema;
