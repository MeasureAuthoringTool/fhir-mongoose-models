const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { PrimitiveBooleanSchema } = require('./PrimitiveBoolean');
const { PrimitivePositiveIntSchema } = require('./PrimitivePositiveInt');
const { ReferenceSchema } = require('./Reference');

const ExplanationOfBenefitCareTeamSchema = BackboneElementSchemaFunction({
  sequence: PrimitivePositiveIntSchema,
  provider: ReferenceSchema,
  responsible: PrimitiveBooleanSchema,
  role: CodeableConceptSchema,
  qualification: CodeableConceptSchema,
  typeName: { type: String, default: 'ExplanationOfBenefitCareTeam' },
  _type: { type: String, default: 'FHIR::ExplanationOfBenefitCareTeam' },
});

class ExplanationOfBenefitCareTeam extends mongoose.Document {
  constructor(object) {
    super(object, ExplanationOfBenefitCareTeamSchema);
    this.typeName = 'ExplanationOfBenefitCareTeam';
    this._type = 'FHIR::ExplanationOfBenefitCareTeam';
  }
}

module.exports.ExplanationOfBenefitCareTeamSchema = ExplanationOfBenefitCareTeamSchema;
module.exports.ExplanationOfBenefitCareTeam = ExplanationOfBenefitCareTeam;
