const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ObservationReferenceRangeSchema } = require('./ObservationReferenceRange');
const { PeriodSchema } = require('./Period');
const { PrimitiveBooleanSchema } = require('./PrimitiveBoolean');
const { PrimitiveDateTimeSchema } = require('./PrimitiveDateTime');
const { PrimitiveIntegerSchema } = require('./PrimitiveInteger');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { PrimitiveTimeSchema } = require('./PrimitiveTime');
const { QuantitySchema } = require('./Quantity');
const { RangeSchema } = require('./Range');
const { RatioSchema } = require('./Ratio');
const { SampledDataSchema } = require('./SampledData');

const ObservationComponentSchema = BackboneElementSchemaFunction({
  code: CodeableConceptSchema,
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
  referenceRange: [ObservationReferenceRangeSchema],
  typeName: { type: String, default: 'ObservationComponent' },
  _type: { type: String, default: 'FHIR::ObservationComponent' },
});

class ObservationComponent extends mongoose.Document {
  constructor(object) {
    super(object, ObservationComponentSchema);
    this.typeName = 'ObservationComponent';
    this._type = 'FHIR::ObservationComponent';
  }
}

module.exports.ObservationComponentSchema = ObservationComponentSchema;
module.exports.ObservationComponent = ObservationComponent;
