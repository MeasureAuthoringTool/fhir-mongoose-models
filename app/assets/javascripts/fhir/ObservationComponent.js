const mongoose = require('mongoose/browser');
const DateTime = require('./basetypes/DateTime');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ObservationReferenceRangeSchema } = require('./ObservationReferenceRange');
const { PeriodSchema } = require('./Period');
const { QuantitySchema } = require('./Quantity');
const { RangeSchema } = require('./Range');
const { RatioSchema } = require('./Ratio');
const { SampledDataSchema } = require('./SampledData');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ObservationComponentSchema = BackboneElementSchemaFunction({
   code : CodeableConceptSchema,
   valueQuantity : QuantitySchema,
   valueCodeableConcept : CodeableConceptSchema,
   valueString : String,
   valueBoolean : Boolean,
   valueInteger : Number,
   valueRange : RangeSchema,
   valueRatio : RatioSchema,
   valueSampledData : SampledDataSchema,
   valueTime : DateTime,
   valueDateTime : DateTime,
   valuePeriod : PeriodSchema,
   dataAbsentReason : CodeableConceptSchema,
   interpretation : [CodeableConceptSchema],
   referenceRange : [ObservationReferenceRangeSchema],
   fhirTitle: { type: String, default: 'ObservationComponent' },
});

class ObservationComponent extends mongoose.Document {
  constructor(object) {
    super(object, ObservationComponentSchema);
    this._type = 'FHIR::ObservationComponent';
  }
};


module.exports.ObservationComponentSchema = ObservationComponentSchema;
module.exports.ObservationComponent = ObservationComponent;
