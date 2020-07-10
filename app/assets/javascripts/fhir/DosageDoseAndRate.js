const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { ElementSchema } = require('./Element');
const { RangeSchema } = require('./allSchemaHeaders.js');
const { RatioSchema } = require('./allSchemaHeaders.js');
const { SimpleQuantitySchema } = require('./allSchemaHeaders.js');
const { DosageDoseAndRateSchema } = require('./allSchemaHeaders.js');

DosageDoseAndRateSchema.add(ElementSchema);
DosageDoseAndRateSchema.remove('id');
DosageDoseAndRateSchema.add({
  type: CodeableConceptSchema,
  doseRange: RangeSchema,
  doseSimpleQuantity: SimpleQuantitySchema,
  rateRatio: RatioSchema,
  rateRange: RangeSchema,
  rateSimpleQuantity: SimpleQuantitySchema,
});

module.exports.DosageDoseAndRateSchema = DosageDoseAndRateSchema;
