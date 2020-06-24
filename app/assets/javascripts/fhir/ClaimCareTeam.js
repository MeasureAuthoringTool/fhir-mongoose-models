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

const ClaimCareTeamSchema = BackboneElementSchemaFunction({
   sequence : Number,
   provider : ReferenceSchema,
   responsible : Boolean,
   role : CodeableConceptSchema,
   qualification : CodeableConceptSchema,
   fhirTitle: { type: String, default: 'ClaimCareTeam' },
});

class ClaimCareTeam extends mongoose.Document {
  constructor(object) {
    super(object, ClaimCareTeamSchema);
    this._type = 'FHIR::ClaimCareTeam';
  }
};


module.exports.ClaimCareTeamSchema = ClaimCareTeamSchema;
module.exports.ClaimCareTeam = ClaimCareTeam;
