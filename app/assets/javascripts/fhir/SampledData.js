const { ElementSchema } = require('./Element');
const { PrimitiveDecimalSchema } = require('./allSchemaHeaders.js');
const { PrimitivePositiveIntSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { SimpleQuantitySchema } = require('./allSchemaHeaders.js');
const { SampledDataSchema } = require('./allSchemaHeaders.js');

SampledDataSchema.add(ElementSchema);
SampledDataSchema.remove('id');
SampledDataSchema.add({
  origin: SimpleQuantitySchema,
  period: PrimitiveDecimalSchema,
  factor: PrimitiveDecimalSchema,
  lowerLimit: PrimitiveDecimalSchema,
  upperLimit: PrimitiveDecimalSchema,
  dimensions: PrimitivePositiveIntSchema,
  data: PrimitiveStringSchema,
});

module.exports.SampledDataSchema = SampledDataSchema;
