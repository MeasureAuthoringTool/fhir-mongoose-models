const mongoose = require('mongoose/browser');
const DateTime = require('./basetypes/DateTime');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DurationSchema } = require('./Duration');
const { PeriodSchema } = require('./Period');
const { ReferenceSchema } = require('./Reference');
const { SimpleQuantitySchema } = require('./SimpleQuantity');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const SpecimenCollectionSchema = BackboneElementSchemaFunction({
   collector : ReferenceSchema,
   collectedDateTime : DateTime,
   collectedPeriod : PeriodSchema,
   duration : DurationSchema,
   quantity : SimpleQuantitySchema,
   method : CodeableConceptSchema,
   bodySite : CodeableConceptSchema,
   fastingStatusCodeableConcept : CodeableConceptSchema,
   fastingStatusDuration : DurationSchema,
   fhirTitle: { type: String, default: 'SpecimenCollection' },
});

class SpecimenCollection extends mongoose.Document {
  constructor(object) {
    super(object, SpecimenCollectionSchema);
    this._type = 'FHIR::SpecimenCollection';
  }
};


module.exports.SpecimenCollectionSchema = SpecimenCollectionSchema;
module.exports.SpecimenCollection = SpecimenCollection;
