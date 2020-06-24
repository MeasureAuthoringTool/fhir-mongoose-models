const mongoose = require('mongoose/browser');
const { AnnotationSchema } = require('./Annotation');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const RiskEvidenceSynthesisCertaintyCertaintySubcomponentSchema = BackboneElementSchemaFunction({
   type : CodeableConceptSchema,
   rating : [CodeableConceptSchema],
   note : [AnnotationSchema],
   fhirTitle: { type: String, default: 'RiskEvidenceSynthesisCertaintyCertaintySubcomponent' },
});

class RiskEvidenceSynthesisCertaintyCertaintySubcomponent extends mongoose.Document {
  constructor(object) {
    super(object, RiskEvidenceSynthesisCertaintyCertaintySubcomponentSchema);
    this._type = 'FHIR::RiskEvidenceSynthesisCertaintyCertaintySubcomponent';
  }
};


module.exports.RiskEvidenceSynthesisCertaintyCertaintySubcomponentSchema = RiskEvidenceSynthesisCertaintyCertaintySubcomponentSchema;
module.exports.RiskEvidenceSynthesisCertaintyCertaintySubcomponent = RiskEvidenceSynthesisCertaintyCertaintySubcomponent;
