const mongoose = require('mongoose/browser');
const DateTime = require('./basetypes/DateTime');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { PeriodSchema } = require('./Period');
const { ReferenceSchema } = require('./Reference');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const SpecimenProcessingSchema = BackboneElementSchemaFunction({
   description : String,
   procedure : CodeableConceptSchema,
   additive : [ReferenceSchema],
   timeDateTime : DateTime,
   timePeriod : PeriodSchema,
   fhirTitle: { type: String, default: 'SpecimenProcessing' },
});

class SpecimenProcessing extends mongoose.Document {
  constructor(object) {
    super(object, SpecimenProcessingSchema);
    this._type = 'FHIR::SpecimenProcessing';
  }
};


module.exports.SpecimenProcessingSchema = SpecimenProcessingSchema;
module.exports.SpecimenProcessing = SpecimenProcessing;
