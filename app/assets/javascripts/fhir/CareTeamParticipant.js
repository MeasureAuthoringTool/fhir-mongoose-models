const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { PeriodSchema } = require('./Period');
const { ReferenceSchema } = require('./Reference');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const CareTeamParticipantSchema = BackboneElementSchemaFunction({
   role : [CodeableConceptSchema],
   member : ReferenceSchema,
   onBehalfOf : ReferenceSchema,
   period : PeriodSchema,
   fhirTitle: { type: String, default: 'CareTeamParticipant' },
});

class CareTeamParticipant extends mongoose.Document {
  constructor(object) {
    super(object, CareTeamParticipantSchema);
    this._type = 'FHIR::CareTeamParticipant';
  }
};


module.exports.CareTeamParticipantSchema = CareTeamParticipantSchema;
module.exports.CareTeamParticipant = CareTeamParticipant;
