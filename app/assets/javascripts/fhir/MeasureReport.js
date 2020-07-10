const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./allSchemaHeaders.js');
const { MeasureReportGroupSchema } = require('./allSchemaHeaders.js');
const { MeasureReportStatusSchema } = require('./allSchemaHeaders.js');
const { MeasureReportTypeSchema } = require('./allSchemaHeaders.js');
const { PeriodSchema } = require('./allSchemaHeaders.js');
const { PrimitiveCanonicalSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateTimeSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { MeasureReportSchema } = require('./allSchemaHeaders.js');

MeasureReportSchema.add(DomainResourceSchema);
MeasureReportSchema.remove('id');
MeasureReportSchema.add({
  identifier: [IdentifierSchema],
  status: MeasureReportStatusSchema,
  type: MeasureReportTypeSchema,
  measure: PrimitiveCanonicalSchema,
  subject: ReferenceSchema,
  date: PrimitiveDateTimeSchema,
  reporter: ReferenceSchema,
  period: PeriodSchema,
  improvementNotation: CodeableConceptSchema,
  group: [MeasureReportGroupSchema],
  evaluatedResource: [ReferenceSchema],
});

module.exports.MeasureReportSchema = MeasureReportSchema;
