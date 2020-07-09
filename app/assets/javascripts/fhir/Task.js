const { AnnotationSchema } = require('./allSchemaHeaders.js');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./allSchemaHeaders.js');
const { PeriodSchema } = require('./allSchemaHeaders.js');
const { PrimitiveCanonicalSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateTimeSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { PrimitiveUriSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { TaskInputSchema } = require('./allSchemaHeaders.js');
const { TaskIntentSchema } = require('./allSchemaHeaders.js');
const { TaskOutputSchema } = require('./allSchemaHeaders.js');
const { TaskPrioritySchema } = require('./allSchemaHeaders.js');
const { TaskRestrictionSchema } = require('./allSchemaHeaders.js');
const { TaskStatusSchema } = require('./allSchemaHeaders.js');
const { TaskSchema } = require('./allSchemaHeaders.js');

TaskSchema.add(DomainResourceSchema);
TaskSchema.remove('id');
TaskSchema.add({
  identifier: [IdentifierSchema],
  instantiatesCanonical: PrimitiveCanonicalSchema,
  instantiatesUri: PrimitiveUriSchema,
  basedOn: [ReferenceSchema],
  groupIdentifier: IdentifierSchema,
  partOf: [ReferenceSchema],
  status: TaskStatusSchema,
  statusReason: CodeableConceptSchema,
  businessStatus: CodeableConceptSchema,
  intent: TaskIntentSchema,
  priority: TaskPrioritySchema,
  code: CodeableConceptSchema,
  description: PrimitiveStringSchema,
  focus: ReferenceSchema,
  for: ReferenceSchema,
  encounter: ReferenceSchema,
  executionPeriod: PeriodSchema,
  authoredOn: PrimitiveDateTimeSchema,
  lastModified: PrimitiveDateTimeSchema,
  requester: ReferenceSchema,
  performerType: [CodeableConceptSchema],
  owner: ReferenceSchema,
  location: ReferenceSchema,
  reasonCode: CodeableConceptSchema,
  reasonReference: ReferenceSchema,
  insurance: [ReferenceSchema],
  note: [AnnotationSchema],
  relevantHistory: [ReferenceSchema],
  restriction: TaskRestrictionSchema,
  input: [TaskInputSchema],
  output: [TaskOutputSchema],
});

module.exports.TaskSchema = TaskSchema;
