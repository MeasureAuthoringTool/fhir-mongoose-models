const { DurationSchema } = require('./allSchemaHeaders.js');
const { ElementSchema } = require('./Element');
const { PeriodSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateTimeSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { DataRequirementDateFilterSchema } = require('./allSchemaHeaders.js');

DataRequirementDateFilterSchema.add(ElementSchema);
DataRequirementDateFilterSchema.remove('id');
DataRequirementDateFilterSchema.add({
  path: PrimitiveStringSchema,
  searchParam: PrimitiveStringSchema,
  valueDateTime: PrimitiveDateTimeSchema,
  valuePeriod: PeriodSchema,
  valueDuration: DurationSchema,
});

module.exports.DataRequirementDateFilterSchema = DataRequirementDateFilterSchema;
