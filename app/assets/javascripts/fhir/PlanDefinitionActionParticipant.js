const mongoose = require('mongoose/browser');
const { ActionParticipantTypeSchema } = require('./ActionParticipantType');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const PlanDefinitionActionParticipantSchema = BackboneElementSchemaFunction({
   type : ActionParticipantTypeSchema,
   role : CodeableConceptSchema,
   fhirTitle: { type: String, default: 'PlanDefinitionActionParticipant' },
});

class PlanDefinitionActionParticipant extends mongoose.Document {
  constructor(object) {
    super(object, PlanDefinitionActionParticipantSchema);
    this._type = 'FHIR::PlanDefinitionActionParticipant';
  }
};


module.exports.PlanDefinitionActionParticipantSchema = PlanDefinitionActionParticipantSchema;
module.exports.PlanDefinitionActionParticipant = PlanDefinitionActionParticipant;
