const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DurationSchema } = require('./Duration');
const { QuantitySchema } = require('./Quantity');
const { RangeSchema } = require('./Range');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const PlanDefinitionGoalTargetSchema = BackboneElementSchemaFunction({
   measure : CodeableConceptSchema,
   detailQuantity : QuantitySchema,
   detailRange : RangeSchema,
   detailCodeableConcept : CodeableConceptSchema,
   due : DurationSchema,
   fhirTitle: { type: String, default: 'PlanDefinitionGoalTarget' },
});

class PlanDefinitionGoalTarget extends mongoose.Document {
  constructor(object) {
    super(object, PlanDefinitionGoalTargetSchema);
    this._type = 'FHIR::PlanDefinitionGoalTarget';
  }
};


module.exports.PlanDefinitionGoalTargetSchema = PlanDefinitionGoalTargetSchema;
module.exports.PlanDefinitionGoalTarget = PlanDefinitionGoalTarget;
