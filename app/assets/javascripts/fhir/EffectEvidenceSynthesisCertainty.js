const mongoose = require('mongoose/browser');
const { AnnotationSchema } = require('./Annotation');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { EffectEvidenceSynthesisCertaintyCertaintySubcomponentSchema } = require('./EffectEvidenceSynthesisCertaintyCertaintySubcomponent');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const EffectEvidenceSynthesisCertaintySchema = BackboneElementSchemaFunction({
   rating : [CodeableConceptSchema],
   note : [AnnotationSchema],
   certaintySubcomponent : [EffectEvidenceSynthesisCertaintyCertaintySubcomponentSchema],
   fhirTitle: { type: String, default: 'EffectEvidenceSynthesisCertainty' },
});

class EffectEvidenceSynthesisCertainty extends mongoose.Document {
  constructor(object) {
    super(object, EffectEvidenceSynthesisCertaintySchema);
    this._type = 'FHIR::EffectEvidenceSynthesisCertainty';
  }
};


module.exports.EffectEvidenceSynthesisCertaintySchema = EffectEvidenceSynthesisCertaintySchema;
module.exports.EffectEvidenceSynthesisCertainty = EffectEvidenceSynthesisCertainty;
