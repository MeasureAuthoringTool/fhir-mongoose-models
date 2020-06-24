const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const EffectEvidenceSynthesisEffectEstimatePrecisionEstimateSchema = BackboneElementSchemaFunction({
   type : CodeableConceptSchema,
   level : Number,
   from : Number,
   to : Number,
   fhirTitle: { type: String, default: 'EffectEvidenceSynthesisEffectEstimatePrecisionEstimate' },
});

class EffectEvidenceSynthesisEffectEstimatePrecisionEstimate extends mongoose.Document {
  constructor(object) {
    super(object, EffectEvidenceSynthesisEffectEstimatePrecisionEstimateSchema);
    this._type = 'FHIR::EffectEvidenceSynthesisEffectEstimatePrecisionEstimate';
  }
};


module.exports.EffectEvidenceSynthesisEffectEstimatePrecisionEstimateSchema = EffectEvidenceSynthesisEffectEstimatePrecisionEstimateSchema;
module.exports.EffectEvidenceSynthesisEffectEstimatePrecisionEstimate = EffectEvidenceSynthesisEffectEstimatePrecisionEstimate;
