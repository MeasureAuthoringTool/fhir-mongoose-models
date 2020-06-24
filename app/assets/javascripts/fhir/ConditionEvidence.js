const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ReferenceSchema } = require('./Reference');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ConditionEvidenceSchema = BackboneElementSchemaFunction({
   code : [CodeableConceptSchema],
   detail : [ReferenceSchema],
   fhirTitle: { type: String, default: 'ConditionEvidence' },
});

class ConditionEvidence extends mongoose.Document {
  constructor(object) {
    super(object, ConditionEvidenceSchema);
    this._type = 'FHIR::ConditionEvidence';
  }
};


module.exports.ConditionEvidenceSchema = ConditionEvidenceSchema;
module.exports.ConditionEvidence = ConditionEvidence;
