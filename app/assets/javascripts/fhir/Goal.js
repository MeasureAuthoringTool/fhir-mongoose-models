const { AnnotationSchema } = require('./allSchemaHeaders.js');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { DomainResourceSchema } = require('./DomainResource');
const { GoalLifecycleStatusSchema } = require('./allSchemaHeaders.js');
const { GoalTargetSchema } = require('./allSchemaHeaders.js');
const { IdentifierSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { GoalSchema } = require('./allSchemaHeaders.js');

GoalSchema.add(DomainResourceSchema);
GoalSchema.remove('id');
GoalSchema.add({
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
});

module.exports.GoalSchema = GoalSchema;
