const mongoose = require('mongoose/browser');
const { ActivityParticipantTypeSchema } = require('./ActivityParticipantType');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ActivityDefinitionParticipantSchema = BackboneElementSchemaFunction({
   type : ActivityParticipantTypeSchema,
   role : CodeableConceptSchema,
   fhirTitle: { type: String, default: 'ActivityDefinitionParticipant' },
});

class ActivityDefinitionParticipant extends mongoose.Document {
  constructor(object) {
    super(object, ActivityDefinitionParticipantSchema);
    this._type = 'FHIR::ActivityDefinitionParticipant';
  }
};


module.exports.ActivityDefinitionParticipantSchema = ActivityDefinitionParticipantSchema;
module.exports.ActivityDefinitionParticipant = ActivityDefinitionParticipant;
