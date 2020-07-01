const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { PlanDefinitionGoalTargetSchema } = require('./PlanDefinitionGoalTarget');
const { RelatedArtifactSchema } = require('./RelatedArtifact');

const PlanDefinitionGoalSchema = BackboneElementSchemaFunction({
  category: CodeableConceptSchema,
  description: CodeableConceptSchema,
  priority: CodeableConceptSchema,
  start: CodeableConceptSchema,
  addresses: [CodeableConceptSchema],
  documentation: [RelatedArtifactSchema],
  target: [PlanDefinitionGoalTargetSchema],
  typeName: { type: String, default: 'PlanDefinitionGoal' },
  _type: { type: String, default: 'FHIR::PlanDefinitionGoal' },
});

class PlanDefinitionGoal extends mongoose.Document {
  constructor(object) {
    super(object, PlanDefinitionGoalSchema);
    this.typeName = 'PlanDefinitionGoal';
    this._type = 'FHIR::PlanDefinitionGoal';
  }
}

module.exports.PlanDefinitionGoalSchema = PlanDefinitionGoalSchema;
module.exports.PlanDefinitionGoal = PlanDefinitionGoal;
