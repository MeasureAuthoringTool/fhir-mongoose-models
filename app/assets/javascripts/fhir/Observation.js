const mongoose = require('mongoose/browser');
const { AnnotationSchema } = require('./Annotation');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DomainResourceSchema } = require('./DomainResource');
const { DomainResourceSchemaFunction } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { ObservationComponentSchema } = require('./ObservationComponent');
const { ObservationReferenceRangeSchema } = require('./ObservationReferenceRange');
const { ObservationStatusSchema } = require('./ObservationStatus');
const { PeriodSchema } = require('./Period');
const { PrimitiveBooleanSchema } = require('./PrimitiveBoolean');
const { PrimitiveDateTimeSchema } = require('./PrimitiveDateTime');
const { PrimitiveInstantSchema } = require('./PrimitiveInstant');
const { PrimitiveIntegerSchema } = require('./PrimitiveInteger');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { PrimitiveTimeSchema } = require('./PrimitiveTime');
const { QuantitySchema } = require('./Quantity');
const { RangeSchema } = require('./Range');
const { RatioSchema } = require('./Ratio');
const { ReferenceSchema } = require('./Reference');
const { SampledDataSchema } = require('./SampledData');
const { TimingSchema } = require('./Timing');

const ObservationSchema = DomainResourceSchemaFunction({
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
  typeName: { type: String, default: 'Observation' },
  _type: { type: String, default: 'FHIR::Observation' },
});

class Observation extends mongoose.Document {
  constructor(object) {
    super(object, ObservationSchema);
    this.typeName = 'Observation';
    this._type = 'FHIR::Observation';
  }
}

module.exports.ObservationSchema = ObservationSchema;
module.exports.Observation = Observation;
