const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ExposureStateSchema } = require('./ExposureState');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { ReferenceSchema } = require('./Reference');

const EffectEvidenceSynthesisResultsByExposureSchema = BackboneElementSchemaFunction({
  description: PrimitiveStringSchema,
  exposureState: ExposureStateSchema,
  variantState: CodeableConceptSchema,
  riskEvidenceSynthesis: ReferenceSchema,
  typeName: { type: String, default: 'EffectEvidenceSynthesisResultsByExposure' },
  _type: { type: String, default: 'FHIR::EffectEvidenceSynthesisResultsByExposure' },
});

class EffectEvidenceSynthesisResultsByExposure extends mongoose.Document {
  constructor(object) {
    super(object, EffectEvidenceSynthesisResultsByExposureSchema);
    this.typeName = 'EffectEvidenceSynthesisResultsByExposure';
    this._type = 'FHIR::EffectEvidenceSynthesisResultsByExposure';
  }
}

module.exports.EffectEvidenceSynthesisResultsByExposureSchema = EffectEvidenceSynthesisResultsByExposureSchema;
module.exports.EffectEvidenceSynthesisResultsByExposure = EffectEvidenceSynthesisResultsByExposure;
