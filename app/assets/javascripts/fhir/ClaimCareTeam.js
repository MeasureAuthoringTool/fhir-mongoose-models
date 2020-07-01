const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { PrimitiveBooleanSchema } = require('./PrimitiveBoolean');
const { PrimitivePositiveIntSchema } = require('./PrimitivePositiveInt');
const { ReferenceSchema } = require('./Reference');

const ClaimCareTeamSchema = BackboneElementSchemaFunction({
  sequence: PrimitivePositiveIntSchema,
  provider: ReferenceSchema,
  responsible: PrimitiveBooleanSchema,
  role: CodeableConceptSchema,
  qualification: CodeableConceptSchema,
  typeName: { type: String, default: 'ClaimCareTeam' },
  _type: { type: String, default: 'FHIR::ClaimCareTeam' },
});

class ClaimCareTeam extends mongoose.Document {
  constructor(object) {
    super(object, ClaimCareTeamSchema);
    this.typeName = 'ClaimCareTeam';
    this._type = 'FHIR::ClaimCareTeam';
  }
}

module.exports.ClaimCareTeamSchema = ClaimCareTeamSchema;
module.exports.ClaimCareTeam = ClaimCareTeam;
