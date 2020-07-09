const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { PeriodSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateTimeSchema } = require('./allSchemaHeaders.js');
const { MarketingStatusSchema } = require('./allSchemaHeaders.js');

MarketingStatusSchema.add(BackboneElementSchema);
MarketingStatusSchema.remove('id');
MarketingStatusSchema.add({
  country: CodeableConceptSchema,
  jurisdiction: CodeableConceptSchema,
  status: CodeableConceptSchema,
  dateRange: PeriodSchema,
  restoreDate: PrimitiveDateTimeSchema,
});

module.exports.MarketingStatusSchema = MarketingStatusSchema;
