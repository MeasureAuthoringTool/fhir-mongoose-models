const mongoose = require('mongoose/browser');
const { AnnotationSchema } = require('./Annotation');
const { CareTeamParticipantSchema } = require('./CareTeamParticipant');
const { CareTeamStatusSchema } = require('./CareTeamStatus');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ContactPointSchema } = require('./ContactPoint');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { PeriodSchema } = require('./Period');
const { ReferenceSchema } = require('./Reference');
const { DomainResourceSchemaFunction } = require('./DomainResource');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const CareTeamSchema = DomainResourceSchemaFunction({
   identifier : [IdentifierSchema],
   status : CareTeamStatusSchema,
   category : [CodeableConceptSchema],
   name : String,
   subject : ReferenceSchema,
   encounter : ReferenceSchema,
   period : PeriodSchema,
   participant : [CareTeamParticipantSchema],
   reasonCode : [CodeableConceptSchema],
   reasonReference : [ReferenceSchema],
   managingOrganization : [ReferenceSchema],
   telecom : [ContactPointSchema],
   note : [AnnotationSchema],
   fhirTitle: { type: String, default: 'CareTeam' },
});

class CareTeam extends mongoose.Document {
  constructor(object) {
    super(object, CareTeamSchema);
    this._type = 'FHIR::CareTeam';
  }
};


module.exports.CareTeamSchema = CareTeamSchema;
module.exports.CareTeam = CareTeam;
