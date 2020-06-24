const mongoose = require('mongoose/browser');
const { AnnotationSchema } = require('./Annotation');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { RiskEvidenceSynthesisCertaintyCertaintySubcomponentSchema } = require('./RiskEvidenceSynthesisCertaintyCertaintySubcomponent');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const RiskEvidenceSynthesisCertaintySchema = BackboneElementSchemaFunction({
   rating : [CodeableConceptSchema],
   note : [AnnotationSchema],
   certaintySubcomponent : [RiskEvidenceSynthesisCertaintyCertaintySubcomponentSchema],
   fhirTitle: { type: String, default: 'RiskEvidenceSynthesisCertainty' },
});

class RiskEvidenceSynthesisCertainty extends mongoose.Document {
  constructor(object) {
    super(object, RiskEvidenceSynthesisCertaintySchema);
    this._type = 'FHIR::RiskEvidenceSynthesisCertainty';
  }
};


module.exports.RiskEvidenceSynthesisCertaintySchema = RiskEvidenceSynthesisCertaintySchema;
module.exports.RiskEvidenceSynthesisCertainty = RiskEvidenceSynthesisCertainty;
