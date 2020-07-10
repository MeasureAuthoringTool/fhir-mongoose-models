const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./allSchemaHeaders.js');
const { PeriodSchema } = require('./allSchemaHeaders.js');
const { PrimitiveBooleanSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { ScheduleSchema } = require('./allSchemaHeaders.js');

ScheduleSchema.add(DomainResourceSchema);
ScheduleSchema.remove('id');
ScheduleSchema.add({
  identifier: [IdentifierSchema],
  active: PrimitiveBooleanSchema,
  serviceCategory: [CodeableConceptSchema],
  serviceType: [CodeableConceptSchema],
  specialty: [CodeableConceptSchema],
  actor: [ReferenceSchema],
  planningHorizon: PeriodSchema,
  comment: PrimitiveStringSchema,
});

module.exports.ScheduleSchema = ScheduleSchema;
