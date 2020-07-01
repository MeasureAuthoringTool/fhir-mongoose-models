const mongoose = require('mongoose/browser');
const { ActivityParticipantTypeSchema } = require('./ActivityParticipantType');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');

const ActivityDefinitionParticipantSchema = BackboneElementSchemaFunction({
  type: ActivityParticipantTypeSchema,
  role: CodeableConceptSchema,
  typeName: { type: String, default: 'ActivityDefinitionParticipant' },
  _type: { type: String, default: 'FHIR::ActivityDefinitionParticipant' },
});

class ActivityDefinitionParticipant extends mongoose.Document {
  constructor(object) {
    super(object, ActivityDefinitionParticipantSchema);
    this.typeName = 'ActivityDefinitionParticipant';
    this._type = 'FHIR::ActivityDefinitionParticipant';
  }
}

module.exports.ActivityDefinitionParticipantSchema = ActivityDefinitionParticipantSchema;
module.exports.ActivityDefinitionParticipant = ActivityDefinitionParticipant;
