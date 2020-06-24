const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { IdentifierSchema } = require('./Identifier');
const { ReferenceSchema } = require('./Reference');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ExplanationOfBenefitRelatedSchema = BackboneElementSchemaFunction({
   claim : ReferenceSchema,
   relationship : CodeableConceptSchema,
   reference : IdentifierSchema,
   fhirTitle: { type: String, default: 'ExplanationOfBenefitRelated' },
});

class ExplanationOfBenefitRelated extends mongoose.Document {
  constructor(object) {
    super(object, ExplanationOfBenefitRelatedSchema);
    this._type = 'FHIR::ExplanationOfBenefitRelated';
  }
};


module.exports.ExplanationOfBenefitRelatedSchema = ExplanationOfBenefitRelatedSchema;
module.exports.ExplanationOfBenefitRelated = ExplanationOfBenefitRelated;
