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

const EffectEvidenceSynthesisCertaintyCertaintySubcomponentSchema = BackboneElementSchemaFunction({
   type : CodeableConceptSchema,
   rating : [CodeableConceptSchema],
   note : [AnnotationSchema],
   fhirTitle: { type: String, default: 'EffectEvidenceSynthesisCertaintyCertaintySubcomponent' },
});

class EffectEvidenceSynthesisCertaintyCertaintySubcomponent extends mongoose.Document {
  constructor(object) {
    super(object, EffectEvidenceSynthesisCertaintyCertaintySubcomponentSchema);
    this._type = 'FHIR::EffectEvidenceSynthesisCertaintyCertaintySubcomponent';
  }
};


module.exports.EffectEvidenceSynthesisCertaintyCertaintySubcomponentSchema = EffectEvidenceSynthesisCertaintyCertaintySubcomponentSchema;
module.exports.EffectEvidenceSynthesisCertaintyCertaintySubcomponent = EffectEvidenceSynthesisCertaintyCertaintySubcomponent;
