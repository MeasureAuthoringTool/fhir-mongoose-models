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

const BiologicallyDerivedProductProcessingSchema = BackboneElementSchemaFunction({
   description : String,
   procedure : CodeableConceptSchema,
   additive : ReferenceSchema,
   timeDateTime : DateTime,
   timePeriod : PeriodSchema,
   fhirTitle: { type: String, default: 'BiologicallyDerivedProductProcessing' },
});

class BiologicallyDerivedProductProcessing extends mongoose.Document {
  constructor(object) {
    super(object, BiologicallyDerivedProductProcessingSchema);
    this._type = 'FHIR::BiologicallyDerivedProductProcessing';
  }
};


module.exports.BiologicallyDerivedProductProcessingSchema = BiologicallyDerivedProductProcessingSchema;
module.exports.BiologicallyDerivedProductProcessing = BiologicallyDerivedProductProcessing;
