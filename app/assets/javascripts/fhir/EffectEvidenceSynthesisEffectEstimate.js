const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { EffectEvidenceSynthesisEffectEstimatePrecisionEstimateSchema } = require('./EffectEvidenceSynthesisEffectEstimatePrecisionEstimate');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const EffectEvidenceSynthesisEffectEstimateSchema = BackboneElementSchemaFunction({
   description : String,
   type : CodeableConceptSchema,
   variantState : CodeableConceptSchema,
   value : Number,
   unitOfMeasure : CodeableConceptSchema,
   precisionEstimate : [EffectEvidenceSynthesisEffectEstimatePrecisionEstimateSchema],
   fhirTitle: { type: String, default: 'EffectEvidenceSynthesisEffectEstimate' },
});

class EffectEvidenceSynthesisEffectEstimate extends mongoose.Document {
  constructor(object) {
    super(object, EffectEvidenceSynthesisEffectEstimateSchema);
    this._type = 'FHIR::EffectEvidenceSynthesisEffectEstimate';
  }
};


module.exports.EffectEvidenceSynthesisEffectEstimateSchema = EffectEvidenceSynthesisEffectEstimateSchema;
module.exports.EffectEvidenceSynthesisEffectEstimate = EffectEvidenceSynthesisEffectEstimate;
