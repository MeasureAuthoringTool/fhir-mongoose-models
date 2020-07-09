const { ContactDetailSchema } = require('./allSchemaHeaders.js');
const { ContributorTypeSchema } = require('./allSchemaHeaders.js');
const { ElementSchema } = require('./Element');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { ContributorSchema } = require('./allSchemaHeaders.js');

ContributorSchema.add(ElementSchema);
ContributorSchema.remove('id');
ContributorSchema.add({
  type: ContributorTypeSchema,
  name: PrimitiveStringSchema,
  contact: [ContactDetailSchema],
});

module.exports.ContributorSchema = ContributorSchema;
