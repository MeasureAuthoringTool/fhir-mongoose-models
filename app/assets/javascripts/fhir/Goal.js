const mongoose = require('mongoose/browser');
const { AnnotationSchema } = require('./Annotation');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DomainResourceSchema } = require('./DomainResource');
const { DomainResourceSchemaFunction } = require('./DomainResource');
const { GoalLifecycleStatusSchema } = require('./GoalLifecycleStatus');
const { GoalTargetSchema } = require('./GoalTarget');
const { IdentifierSchema } = require('./Identifier');
const { PrimitiveDateSchema } = require('./PrimitiveDate');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { ReferenceSchema } = require('./Reference');

const GoalSchema = DomainResourceSchemaFunction({
  identifier: [IdentifierSchema],
  lifecycleStatus: GoalLifecycleStatusSchema,
  achievementStatus: CodeableConceptSchema,
  category: [CodeableConceptSchema],
  priority: CodeableConceptSchema,
  description: CodeableConceptSchema,
  subject: ReferenceSchema,
  startDate: PrimitiveDateSchema,
  startCodeableConcept: CodeableConceptSchema,
  target: [GoalTargetSchema],
  statusDate: PrimitiveDateSchema,
  statusReason: PrimitiveStringSchema,
  expressedBy: ReferenceSchema,
  addresses: [ReferenceSchema],
  note: [AnnotationSchema],
  outcomeCode: [CodeableConceptSchema],
  outcomeReference: [ReferenceSchema],
  typeName: { type: String, default: 'Goal' },
  _type: { type: String, default: 'FHIR::Goal' },
});

class Goal extends mongoose.Document {
  constructor(object) {
    super(object, GoalSchema);
    this.typeName = 'Goal';
    this._type = 'FHIR::Goal';
  }
}

module.exports.GoalSchema = GoalSchema;
module.exports.Goal = Goal;
