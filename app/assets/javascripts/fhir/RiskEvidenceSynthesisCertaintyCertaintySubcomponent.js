const mongoose = require('mongoose/browser');
const { AnnotationSchema } = require('./Annotation');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');

const RiskEvidenceSynthesisCertaintyCertaintySubcomponentSchema = BackboneElementSchemaFunction({
  type: CodeableConceptSchema,
  rating: [CodeableConceptSchema],
  note: [AnnotationSchema],
  typeName: { type: String, default: 'RiskEvidenceSynthesisCertaintyCertaintySubcomponent' },
  _type: { type: String, default: 'FHIR::RiskEvidenceSynthesisCertaintyCertaintySubcomponent' },
});

class RiskEvidenceSynthesisCertaintyCertaintySubcomponent extends mongoose.Document {
  constructor(object) {
    super(object, RiskEvidenceSynthesisCertaintyCertaintySubcomponentSchema);
    this.typeName = 'RiskEvidenceSynthesisCertaintyCertaintySubcomponent';
    this._type = 'FHIR::RiskEvidenceSynthesisCertaintyCertaintySubcomponent';
  }
}

module.exports.RiskEvidenceSynthesisCertaintyCertaintySubcomponentSchema = RiskEvidenceSynthesisCertaintyCertaintySubcomponentSchema;
module.exports.RiskEvidenceSynthesisCertaintyCertaintySubcomponent = RiskEvidenceSynthesisCertaintyCertaintySubcomponent;
