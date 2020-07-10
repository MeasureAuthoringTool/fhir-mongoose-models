const { ContactPointSystemSchema } = require('./allSchemaHeaders.js');
const { ContactPointUseSchema } = require('./allSchemaHeaders.js');
const { ElementSchema } = require('./Element');
const { PeriodSchema } = require('./allSchemaHeaders.js');
const { PrimitivePositiveIntSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { ContactPointSchema } = require('./allSchemaHeaders.js');

ContactPointSchema.add(ElementSchema);
ContactPointSchema.remove('id');
ContactPointSchema.add({
  system: ContactPointSystemSchema,
  value: PrimitiveStringSchema,
  use: ContactPointUseSchema,
  rank: PrimitivePositiveIntSchema,
  period: PeriodSchema,
});

module.exports.ContactPointSchema = ContactPointSchema;
