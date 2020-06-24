const mongoose = require('mongoose/browser');
const DateTime = require('./basetypes/DateTime');
const { AnnotationSchema } = require('./Annotation');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { ObservationComponentSchema } = require('./ObservationComponent');
const { ObservationReferenceRangeSchema } = require('./ObservationReferenceRange');
const { ObservationStatusSchema } = require('./ObservationStatus');
const { PeriodSchema } = require('./Period');
const { QuantitySchema } = require('./Quantity');
const { RangeSchema } = require('./Range');
const { RatioSchema } = require('./Ratio');
const { ReferenceSchema } = require('./Reference');
const { SampledDataSchema } = require('./SampledData');
const { TimingSchema } = require('./Timing');
const { DomainResourceSchemaFunction } = require('./DomainResource');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ObservationSchema = DomainResourceSchemaFunction({
   identifier : [IdentifierSchema],
   basedOn : [ReferenceSchema],
   partOf : [ReferenceSchema],
   status : ObservationStatusSchema,
   category : [CodeableConceptSchema],
   code : CodeableConceptSchema,
   subject : ReferenceSchema,
   focus : [ReferenceSchema],
   encounter : ReferenceSchema,
   effectiveDateTime : DateTime,
   effectivePeriod : PeriodSchema,
   effectiveTiming : TimingSchema,
   effectiveInstant : DateTime,
   issued : DateTime,
   performer : [ReferenceSchema],
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
   note : [AnnotationSchema],
   bodySite : CodeableConceptSchema,
   method : CodeableConceptSchema,
   specimen : ReferenceSchema,
   device : ReferenceSchema,
   referenceRange : [ObservationReferenceRangeSchema],
   hasMember : [ReferenceSchema],
   derivedFrom : [ReferenceSchema],
   component : [ObservationComponentSchema],
   fhirTitle: { type: String, default: 'Observation' },
});

class Observation extends mongoose.Document {
  constructor(object) {
    super(object, ObservationSchema);
    this._type = 'FHIR::Observation';
  }
};


module.exports.ObservationSchema = ObservationSchema;
module.exports.Observation = Observation;
