const { ElementSchema } = require('./Element');
const { NameUseSchema } = require('./allSchemaHeaders.js');
const { PeriodSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { HumanNameSchema } = require('./allSchemaHeaders.js');

HumanNameSchema.add(ElementSchema);
HumanNameSchema.remove('id');
HumanNameSchema.add({
  use: NameUseSchema,
  text: PrimitiveStringSchema,
  family: PrimitiveStringSchema,
  given: [PrimitiveStringSchema],
  prefix: [PrimitiveStringSchema],
  suffix: [PrimitiveStringSchema],
  period: PeriodSchema,
});

module.exports.HumanNameSchema = HumanNameSchema;
