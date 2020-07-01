const mongoose = require('mongoose/browser');
const { AnnotationSchema } = require('./Annotation');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { RiskEvidenceSynthesisCertaintyCertaintySubcomponentSchema } = require('./RiskEvidenceSynthesisCertaintyCertaintySubcomponent');

const RiskEvidenceSynthesisCertaintySchema = BackboneElementSchemaFunction({
  rating: [CodeableConceptSchema],
  note: [AnnotationSchema],
  certaintySubcomponent: [RiskEvidenceSynthesisCertaintyCertaintySubcomponentSchema],
  typeName: { type: String, default: 'RiskEvidenceSynthesisCertainty' },
  _type: { type: String, default: 'FHIR::RiskEvidenceSynthesisCertainty' },
});

class RiskEvidenceSynthesisCertainty extends mongoose.Document {
  constructor(object) {
    super(object, RiskEvidenceSynthesisCertaintySchema);
    this.typeName = 'RiskEvidenceSynthesisCertainty';
    this._type = 'FHIR::RiskEvidenceSynthesisCertainty';
  }
}

module.exports.RiskEvidenceSynthesisCertaintySchema = RiskEvidenceSynthesisCertaintySchema;
module.exports.RiskEvidenceSynthesisCertainty = RiskEvidenceSynthesisCertainty;
