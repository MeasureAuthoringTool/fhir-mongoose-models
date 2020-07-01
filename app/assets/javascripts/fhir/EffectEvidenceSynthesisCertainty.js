const mongoose = require('mongoose/browser');
const { AnnotationSchema } = require('./Annotation');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { EffectEvidenceSynthesisCertaintyCertaintySubcomponentSchema } = require('./EffectEvidenceSynthesisCertaintyCertaintySubcomponent');

const EffectEvidenceSynthesisCertaintySchema = BackboneElementSchemaFunction({
  rating: [CodeableConceptSchema],
  note: [AnnotationSchema],
  certaintySubcomponent: [EffectEvidenceSynthesisCertaintyCertaintySubcomponentSchema],
  typeName: { type: String, default: 'EffectEvidenceSynthesisCertainty' },
  _type: { type: String, default: 'FHIR::EffectEvidenceSynthesisCertainty' },
});

class EffectEvidenceSynthesisCertainty extends mongoose.Document {
  constructor(object) {
    super(object, EffectEvidenceSynthesisCertaintySchema);
    this.typeName = 'EffectEvidenceSynthesisCertainty';
    this._type = 'FHIR::EffectEvidenceSynthesisCertainty';
  }
}

module.exports.EffectEvidenceSynthesisCertaintySchema = EffectEvidenceSynthesisCertaintySchema;
module.exports.EffectEvidenceSynthesisCertainty = EffectEvidenceSynthesisCertainty;
