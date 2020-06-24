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

const ExplanationOfBenefitCareTeamSchema = BackboneElementSchemaFunction({
   sequence : Number,
   provider : ReferenceSchema,
   responsible : Boolean,
   role : CodeableConceptSchema,
   qualification : CodeableConceptSchema,
   fhirTitle: { type: String, default: 'ExplanationOfBenefitCareTeam' },
});

class ExplanationOfBenefitCareTeam extends mongoose.Document {
  constructor(object) {
    super(object, ExplanationOfBenefitCareTeamSchema);
    this._type = 'FHIR::ExplanationOfBenefitCareTeam';
  }
};


module.exports.ExplanationOfBenefitCareTeamSchema = ExplanationOfBenefitCareTeamSchema;
module.exports.ExplanationOfBenefitCareTeam = ExplanationOfBenefitCareTeam;
