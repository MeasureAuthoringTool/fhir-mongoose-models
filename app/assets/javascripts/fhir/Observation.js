const { AnnotationSchema } = require('./allSchemaHeaders.js');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./allSchemaHeaders.js');
const { ObservationComponentSchema } = require('./allSchemaHeaders.js');
const { ObservationReferenceRangeSchema } = require('./allSchemaHeaders.js');
const { ObservationStatusSchema } = require('./allSchemaHeaders.js');
const { PeriodSchema } = require('./allSchemaHeaders.js');
const { PrimitiveBooleanSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateTimeSchema } = require('./allSchemaHeaders.js');
const { PrimitiveInstantSchema } = require('./allSchemaHeaders.js');
const { PrimitiveIntegerSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { PrimitiveTimeSchema } = require('./allSchemaHeaders.js');
const { QuantitySchema } = require('./allSchemaHeaders.js');
const { RangeSchema } = require('./allSchemaHeaders.js');
const { RatioSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { SampledDataSchema } = require('./allSchemaHeaders.js');
const { TimingSchema } = require('./allSchemaHeaders.js');
const { ObservationSchema } = require('./allSchemaHeaders.js');

ObservationSchema.add(DomainResourceSchema);
ObservationSchema.remove('id');
ObservationSchema.add({
  identifier: [IdentifierSchema],
  basedOn: [ReferenceSchema],
  partOf: [ReferenceSchema],
  status: ObservationStatusSchema,
  category: [CodeableConceptSchema],
  code: CodeableConceptSchema,
  subject: ReferenceSchema,
  focus: [ReferenceSchema],
  encounter: ReferenceSchema,
  effectiveDateTime: PrimitiveDateTimeSchema,
  effectivePeriod: PeriodSchema,
  effectiveTiming: TimingSchema,
  effectiveInstant: PrimitiveInstantSchema,
  issued: PrimitiveInstantSchema,
  performer: [ReferenceSchema],
  valueQuantity: QuantitySchema,
  valueCodeableConcept: CodeableConceptSchema,
  valueString: PrimitiveStringSchema,
  valueBoolean: PrimitiveBooleanSchema,
  valueInteger: PrimitiveIntegerSchema,
  valueRange: RangeSchema,
  valueRatio: RatioSchema,
  valueSampledData: SampledDataSchema,
  valueTime: PrimitiveTimeSchema,
  valueDateTime: PrimitiveDateTimeSchema,
  valuePeriod: PeriodSchema,
  dataAbsentReason: CodeableConceptSchema,
  interpretation: [CodeableConceptSchema],
  note: [AnnotationSchema],
  bodySite: CodeableConceptSchema,
  method: CodeableConceptSchema,
  specimen: ReferenceSchema,
  device: ReferenceSchema,
  referenceRange: [ObservationReferenceRangeSchema],
  hasMember: [ReferenceSchema],
  derivedFrom: [ReferenceSchema],
  component: [ObservationComponentSchema],
});

module.exports.ObservationSchema = ObservationSchema;
