const mongoose = require('mongoose/browser');
const { ActionParticipantTypeSchema } = require('./ActionParticipantType');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');

const PlanDefinitionActionParticipantSchema = BackboneElementSchemaFunction({
  type: ActionParticipantTypeSchema,
  role: CodeableConceptSchema,
  typeName: { type: String, default: 'PlanDefinitionActionParticipant' },
  _type: { type: String, default: 'FHIR::PlanDefinitionActionParticipant' },
});

class PlanDefinitionActionParticipant extends mongoose.Document {
  constructor(object) {
    super(object, PlanDefinitionActionParticipantSchema);
    this.typeName = 'PlanDefinitionActionParticipant';
    this._type = 'FHIR::PlanDefinitionActionParticipant';
  }
}

module.exports.PlanDefinitionActionParticipantSchema = PlanDefinitionActionParticipantSchema;
module.exports.PlanDefinitionActionParticipant = PlanDefinitionActionParticipant;
