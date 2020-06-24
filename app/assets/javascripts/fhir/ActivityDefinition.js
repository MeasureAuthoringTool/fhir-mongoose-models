const mongoose = require('mongoose/browser');
const DateTime = require('./basetypes/DateTime');
const FHIRDate = require('./basetypes/FHIRDate');
const { ActivityDefinitionDynamicValueSchema } = require('./ActivityDefinitionDynamicValue');
const { ActivityDefinitionKindSchema } = require('./ActivityDefinitionKind');
const { ActivityDefinitionParticipantSchema } = require('./ActivityDefinitionParticipant');
const { AgeSchema } = require('./Age');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ContactDetailSchema } = require('./ContactDetail');
const { DomainResourceSchema } = require('./DomainResource');
const { DosageSchema } = require('./Dosage');
const { DurationSchema } = require('./Duration');
const { IdentifierSchema } = require('./Identifier');
const { PeriodSchema } = require('./Period');
const { PublicationStatusSchema } = require('./PublicationStatus');
const { RangeSchema } = require('./Range');
const { ReferenceSchema } = require('./Reference');
const { RelatedArtifactSchema } = require('./RelatedArtifact');
const { RequestIntentSchema } = require('./RequestIntent');
const { RequestPrioritySchema } = require('./RequestPriority');
const { SimpleQuantitySchema } = require('./SimpleQuantity');
const { TimingSchema } = require('./Timing');
const { UsageContextSchema } = require('./UsageContext');
const { DomainResourceSchemaFunction } = require('./DomainResource');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ActivityDefinitionSchema = DomainResourceSchemaFunction({
   url : String,
   identifier : [IdentifierSchema],
   version : String,
   name : String,
   title : String,
   subtitle : String,
   status : PublicationStatusSchema,
   experimental : Boolean,
   subjectCodeableConcept : CodeableConceptSchema,
   subjectReference : ReferenceSchema,
   date : DateTime,
   publisher : String,
   contact : [ContactDetailSchema],
   description : String,
   useContext : [UsageContextSchema],
   jurisdiction : [CodeableConceptSchema],
   purpose : String,
   usage : String,
   copyright : String,
   approvalDate : FHIRDate,
   lastReviewDate : FHIRDate,
   effectivePeriod : PeriodSchema,
   topic : [CodeableConceptSchema],
   author : [ContactDetailSchema],
   editor : [ContactDetailSchema],
   reviewer : [ContactDetailSchema],
   endorser : [ContactDetailSchema],
   relatedArtifact : [RelatedArtifactSchema],
   library : [String],
   kind : ActivityDefinitionKindSchema,
   profile : String,
   code : CodeableConceptSchema,
   intent : RequestIntentSchema,
   priority : RequestPrioritySchema,
   doNotPerform : Boolean,
   timingTiming : TimingSchema,
   timingDateTime : DateTime,
   timingAge : AgeSchema,
   timingPeriod : PeriodSchema,
   timingRange : RangeSchema,
   timingDuration : DurationSchema,
   location : ReferenceSchema,
   participant : [ActivityDefinitionParticipantSchema],
   productReference : ReferenceSchema,
   productCodeableConcept : CodeableConceptSchema,
   quantity : SimpleQuantitySchema,
   dosage : [DosageSchema],
   bodySite : [CodeableConceptSchema],
   specimenRequirement : [ReferenceSchema],
   observationRequirement : [ReferenceSchema],
   observationResultRequirement : [ReferenceSchema],
   transform : String,
   dynamicValue : [ActivityDefinitionDynamicValueSchema],
   fhirTitle: { type: String, default: 'ActivityDefinition' },
});

class ActivityDefinition extends mongoose.Document {
  constructor(object) {
    super(object, ActivityDefinitionSchema);
    this._type = 'FHIR::ActivityDefinition';
  }
};


module.exports.ActivityDefinitionSchema = ActivityDefinitionSchema;
module.exports.ActivityDefinition = ActivityDefinition;
