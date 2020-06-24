const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ExposureStateSchema } = require('./ExposureState');
const { ReferenceSchema } = require('./Reference');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const EffectEvidenceSynthesisResultsByExposureSchema = BackboneElementSchemaFunction({
   description : String,
   exposureState : ExposureStateSchema,
   variantState : CodeableConceptSchema,
   riskEvidenceSynthesis : ReferenceSchema,
   fhirTitle: { type: String, default: 'EffectEvidenceSynthesisResultsByExposure' },
});

class EffectEvidenceSynthesisResultsByExposure extends mongoose.Document {
  constructor(object) {
    super(object, EffectEvidenceSynthesisResultsByExposureSchema);
    this._type = 'FHIR::EffectEvidenceSynthesisResultsByExposure';
  }
};


module.exports.EffectEvidenceSynthesisResultsByExposureSchema = EffectEvidenceSynthesisResultsByExposureSchema;
module.exports.EffectEvidenceSynthesisResultsByExposure = EffectEvidenceSynthesisResultsByExposure;
