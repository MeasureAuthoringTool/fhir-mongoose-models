const mongoose = require('mongoose/browser');
const FHIRDate = require('./basetypes/FHIRDate');
const { AnnotationSchema } = require('./Annotation');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DomainResourceSchema } = require('./DomainResource');
const { GoalLifecycleStatusSchema } = require('./GoalLifecycleStatus');
const { GoalTargetSchema } = require('./GoalTarget');
const { IdentifierSchema } = require('./Identifier');
const { ReferenceSchema } = require('./Reference');
const { DomainResourceSchemaFunction } = require('./DomainResource');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const GoalSchema = DomainResourceSchemaFunction({
   identifier : [IdentifierSchema],
   lifecycleStatus : GoalLifecycleStatusSchema,
   achievementStatus : CodeableConceptSchema,
   category : [CodeableConceptSchema],
   priority : CodeableConceptSchema,
   description : CodeableConceptSchema,
   subject : ReferenceSchema,
   startDate : FHIRDate,
   startCodeableConcept : CodeableConceptSchema,
   target : [GoalTargetSchema],
   statusDate : FHIRDate,
   statusReason : String,
   expressedBy : ReferenceSchema,
   addresses : [ReferenceSchema],
   note : [AnnotationSchema],
   outcomeCode : [CodeableConceptSchema],
   outcomeReference : [ReferenceSchema],
   fhirTitle: { type: String, default: 'Goal' },
});

class Goal extends mongoose.Document {
  constructor(object) {
    super(object, GoalSchema);
    this._type = 'FHIR::Goal';
  }
};


module.exports.GoalSchema = GoalSchema;
module.exports.Goal = Goal;
