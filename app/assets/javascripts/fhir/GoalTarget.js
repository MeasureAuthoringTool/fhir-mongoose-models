const mongoose = require('mongoose/browser');
const FHIRDate = require('./basetypes/FHIRDate');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DurationSchema } = require('./Duration');
const { QuantitySchema } = require('./Quantity');
const { RangeSchema } = require('./Range');
const { RatioSchema } = require('./Ratio');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const GoalTargetSchema = BackboneElementSchemaFunction({
   measure : CodeableConceptSchema,
   detailQuantity : QuantitySchema,
   detailRange : RangeSchema,
   detailCodeableConcept : CodeableConceptSchema,
   detailString : String,
   detailBoolean : Boolean,
   detailInteger : Number,
   detailRatio : RatioSchema,
   dueDate : FHIRDate,
   dueDuration : DurationSchema,
   fhirTitle: { type: String, default: 'GoalTarget' },
});

class GoalTarget extends mongoose.Document {
  constructor(object) {
    super(object, GoalTargetSchema);
    this._type = 'FHIR::GoalTarget';
  }
};


module.exports.GoalTargetSchema = GoalTargetSchema;
module.exports.GoalTarget = GoalTarget;
