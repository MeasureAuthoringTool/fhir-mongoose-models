const mongoose = require('mongoose/browser');
const { AnnotationSchema } = require('./Annotation');
const { CareTeamParticipantSchema } = require('./CareTeamParticipant');
const { CareTeamStatusSchema } = require('./CareTeamStatus');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ContactPointSchema } = require('./ContactPoint');
const { DomainResourceSchema } = require('./DomainResource');
const { DomainResourceSchemaFunction } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { PeriodSchema } = require('./Period');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { ReferenceSchema } = require('./Reference');

const CareTeamSchema = DomainResourceSchemaFunction({
  identifier: [IdentifierSchema],
  status: CareTeamStatusSchema,
  category: [CodeableConceptSchema],
  name: PrimitiveStringSchema,
  subject: ReferenceSchema,
  encounter: ReferenceSchema,
  period: PeriodSchema,
  participant: [CareTeamParticipantSchema],
  reasonCode: [CodeableConceptSchema],
  reasonReference: [ReferenceSchema],
  managingOrganization: [ReferenceSchema],
  telecom: [ContactPointSchema],
  note: [AnnotationSchema],
  typeName: { type: String, default: 'CareTeam' },
  _type: { type: String, default: 'FHIR::CareTeam' },
});

class CareTeam extends mongoose.Document {
  constructor(object) {
    super(object, CareTeamSchema);
    this.typeName = 'CareTeam';
    this._type = 'FHIR::CareTeam';
  }
}

module.exports.CareTeamSchema = CareTeamSchema;
module.exports.CareTeam = CareTeam;
