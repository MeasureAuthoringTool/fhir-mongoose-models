const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { PlanDefinitionGoalTargetSchema } = require('./PlanDefinitionGoalTarget');
const { RelatedArtifactSchema } = require('./RelatedArtifact');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const PlanDefinitionGoalSchema = BackboneElementSchemaFunction({
   category : CodeableConceptSchema,
   description : CodeableConceptSchema,
   priority : CodeableConceptSchema,
   start : CodeableConceptSchema,
   addresses : [CodeableConceptSchema],
   documentation : [RelatedArtifactSchema],
   target : [PlanDefinitionGoalTargetSchema],
   fhirTitle: { type: String, default: 'PlanDefinitionGoal' },
});

class PlanDefinitionGoal extends mongoose.Document {
  constructor(object) {
    super(object, PlanDefinitionGoalSchema);
    this._type = 'FHIR::PlanDefinitionGoal';
  }
};


module.exports.PlanDefinitionGoalSchema = PlanDefinitionGoalSchema;
module.exports.PlanDefinitionGoal = PlanDefinitionGoal;
