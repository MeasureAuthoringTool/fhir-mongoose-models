const mongoose = require('mongoose/browser');
const DateTime = require('./basetypes/DateTime');
const { AnnotationSchema } = require('./Annotation');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { PeriodSchema } = require('./Period');
const { ReferenceSchema } = require('./Reference');
const { TaskInputSchema } = require('./TaskInput');
const { TaskIntentSchema } = require('./TaskIntent');
const { TaskOutputSchema } = require('./TaskOutput');
const { TaskPrioritySchema } = require('./TaskPriority');
const { TaskRestrictionSchema } = require('./TaskRestriction');
const { TaskStatusSchema } = require('./TaskStatus');
const { DomainResourceSchemaFunction } = require('./DomainResource');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const TaskSchema = DomainResourceSchemaFunction({
   identifier : [IdentifierSchema],
   instantiatesCanonical : String,
   instantiatesUri : String,
   basedOn : [ReferenceSchema],
   groupIdentifier : IdentifierSchema,
   partOf : [ReferenceSchema],
   status : TaskStatusSchema,
   statusReason : CodeableConceptSchema,
   businessStatus : CodeableConceptSchema,
   intent : TaskIntentSchema,
   priority : TaskPrioritySchema,
   code : CodeableConceptSchema,
   description : String,
   focus : ReferenceSchema,
   for : ReferenceSchema,
   encounter : ReferenceSchema,
   executionPeriod : PeriodSchema,
   authoredOn : DateTime,
   lastModified : DateTime,
   requester : ReferenceSchema,
   performerType : [CodeableConceptSchema],
   owner : ReferenceSchema,
   location : ReferenceSchema,
   reasonCode : CodeableConceptSchema,
   reasonReference : ReferenceSchema,
   insurance : [ReferenceSchema],
   note : [AnnotationSchema],
   relevantHistory : [ReferenceSchema],
   restriction : TaskRestrictionSchema,
   input : [TaskInputSchema],
   output : [TaskOutputSchema],
   fhirTitle: { type: String, default: 'Task' },
});

class Task extends mongoose.Document {
  constructor(object) {
    super(object, TaskSchema);
    this._type = 'FHIR::Task';
  }
};


module.exports.TaskSchema = TaskSchema;
module.exports.Task = Task;
