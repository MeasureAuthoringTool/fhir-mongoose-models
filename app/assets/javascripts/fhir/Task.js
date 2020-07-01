const mongoose = require('mongoose/browser');
const { AnnotationSchema } = require('./Annotation');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DomainResourceSchema } = require('./DomainResource');
const { DomainResourceSchemaFunction } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { PeriodSchema } = require('./Period');
const { PrimitiveCanonicalSchema } = require('./PrimitiveCanonical');
const { PrimitiveDateTimeSchema } = require('./PrimitiveDateTime');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { PrimitiveUriSchema } = require('./PrimitiveUri');
const { ReferenceSchema } = require('./Reference');
const { TaskInputSchema } = require('./TaskInput');
const { TaskIntentSchema } = require('./TaskIntent');
const { TaskOutputSchema } = require('./TaskOutput');
const { TaskPrioritySchema } = require('./TaskPriority');
const { TaskRestrictionSchema } = require('./TaskRestriction');
const { TaskStatusSchema } = require('./TaskStatus');

const TaskSchema = DomainResourceSchemaFunction({
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
  typeName: { type: String, default: 'Task' },
  _type: { type: String, default: 'FHIR::Task' },
});

class Task extends mongoose.Document {
  constructor(object) {
    super(object, TaskSchema);
    this.typeName = 'Task';
    this._type = 'FHIR::Task';
  }
}

module.exports.TaskSchema = TaskSchema;
module.exports.Task = Task;
