const mongoose = require('mongoose/browser');
const { AnnotationSchema } = require('./Annotation');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');

const EffectEvidenceSynthesisCertaintyCertaintySubcomponentSchema = BackboneElementSchemaFunction({
  type: CodeableConceptSchema,
  rating: [CodeableConceptSchema],
  note: [AnnotationSchema],
  typeName: { type: String, default: 'EffectEvidenceSynthesisCertaintyCertaintySubcomponent' },
  _type: { type: String, default: 'FHIR::EffectEvidenceSynthesisCertaintyCertaintySubcomponent' },
});

class EffectEvidenceSynthesisCertaintyCertaintySubcomponent extends mongoose.Document {
  constructor(object) {
    super(object, EffectEvidenceSynthesisCertaintyCertaintySubcomponentSchema);
    this.typeName = 'EffectEvidenceSynthesisCertaintyCertaintySubcomponent';
    this._type = 'FHIR::EffectEvidenceSynthesisCertaintyCertaintySubcomponent';
  }
}

module.exports.EffectEvidenceSynthesisCertaintyCertaintySubcomponentSchema = EffectEvidenceSynthesisCertaintyCertaintySubcomponentSchema;
module.exports.EffectEvidenceSynthesisCertaintyCertaintySubcomponent = EffectEvidenceSynthesisCertaintyCertaintySubcomponent;
