const { AnnotationSchema } = require('./allSchemaHeaders.js');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { DeviceUseStatementStatusSchema } = require('./allSchemaHeaders.js');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./allSchemaHeaders.js');
const { PeriodSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateTimeSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { TimingSchema } = require('./allSchemaHeaders.js');
const { DeviceUseStatementSchema } = require('./allSchemaHeaders.js');

DeviceUseStatementSchema.add(DomainResourceSchema);
DeviceUseStatementSchema.remove('id');
DeviceUseStatementSchema.add({
  identifier: [IdentifierSchema],
  basedOn: [ReferenceSchema],
  status: DeviceUseStatementStatusSchema,
  subject: ReferenceSchema,
  derivedFrom: [ReferenceSchema],
  timingTiming: TimingSchema,
  timingPeriod: PeriodSchema,
  timingDateTime: PrimitiveDateTimeSchema,
  recordedOn: PrimitiveDateTimeSchema,
  source: ReferenceSchema,
  device: ReferenceSchema,
  reasonCode: [CodeableConceptSchema],
  reasonReference: [ReferenceSchema],
  bodySite: CodeableConceptSchema,
  note: [AnnotationSchema],
});

module.exports.DeviceUseStatementSchema = DeviceUseStatementSchema;
