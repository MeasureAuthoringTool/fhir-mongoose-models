const mongoose = require('mongoose/browser');
const DateTime = require('./basetypes/DateTime');
const FHIRDate = require('./basetypes/FHIRDate');
const { AddressSchema } = require('./Address');
const { AgeSchema } = require('./Age');
const { AnnotationSchema } = require('./Annotation');
const { AttachmentSchema } = require('./Attachment');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { CodingSchema } = require('./Coding');
const { ContactDetailSchema } = require('./ContactDetail');
const { ContactPointSchema } = require('./ContactPoint');
const { ContributorSchema } = require('./Contributor');
const { CountSchema } = require('./Count');
const { DataRequirementSchema } = require('./DataRequirement');
const { DistanceSchema } = require('./Distance');
const { DosageSchema } = require('./Dosage');
const { DurationSchema } = require('./Duration');
const { ElementSchema } = require('./Element');
const { ExpressionSchema } = require('./Expression');
const { HumanNameSchema } = require('./HumanName');
const { IdentifierSchema } = require('./Identifier');
const { MetaSchema } = require('./Meta');
const { MoneySchema } = require('./Money');
const { ParameterDefinitionSchema } = require('./ParameterDefinition');
const { PeriodSchema } = require('./Period');
const { QuantitySchema } = require('./Quantity');
const { RangeSchema } = require('./Range');
const { RatioSchema } = require('./Ratio');
const { ReferenceSchema } = require('./Reference');
const { RelatedArtifactSchema } = require('./RelatedArtifact');
const { SampledDataSchema } = require('./SampledData');
const { SignatureSchema } = require('./Signature');
const { TimingSchema } = require('./Timing');
const { TriggerDefinitionSchema } = require('./TriggerDefinition');
const { UsageContextSchema } = require('./UsageContext');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ElementDefinitionExampleSchema = ElementSchemaFunction({
   label : String,
   valueBase64Binary : String,
   valueBoolean : Boolean,
   valueCanonical : String,
   valueCode : String,
   valueDate : FHIRDate,
   valueDateTime : DateTime,
   valueDecimal : Number,
   valueId : String,
   valueInstant : DateTime,
   valueInteger : Number,
   valueMarkdown : String,
   valueOid : String,
   valuePositiveInt : Number,
   valueString : String,
   valueTime : DateTime,
   valueUnsignedInt : Number,
   valueUri : String,
   valueUrl : String,
   valueUuid : String,
   valueAddress : AddressSchema,
   valueAge : AgeSchema,
   valueAnnotation : AnnotationSchema,
   valueAttachment : AttachmentSchema,
   valueCodeableConcept : CodeableConceptSchema,
   valueCoding : CodingSchema,
   valueContactPoint : ContactPointSchema,
   valueCount : CountSchema,
   valueDistance : DistanceSchema,
   valueDuration : DurationSchema,
   valueHumanName : HumanNameSchema,
   valueIdentifier : IdentifierSchema,
   valueMoney : MoneySchema,
   valuePeriod : PeriodSchema,
   valueQuantity : QuantitySchema,
   valueRange : RangeSchema,
   valueRatio : RatioSchema,
   valueReference : ReferenceSchema,
   valueSampledData : SampledDataSchema,
   valueSignature : SignatureSchema,
   valueTiming : TimingSchema,
   valueContactDetail : ContactDetailSchema,
   valueContributor : ContributorSchema,
   valueDataRequirement : DataRequirementSchema,
   valueExpression : ExpressionSchema,
   valueParameterDefinition : ParameterDefinitionSchema,
   valueRelatedArtifact : RelatedArtifactSchema,
   valueTriggerDefinition : TriggerDefinitionSchema,
   valueUsageContext : UsageContextSchema,
   valueDosage : DosageSchema,
   valueMeta : MetaSchema,
   fhirTitle: { type: String, default: 'ElementDefinitionExample' },
});

class ElementDefinitionExample extends mongoose.Document {
  constructor(object) {
    super(object, ElementDefinitionExampleSchema);
    this._type = 'FHIR::ElementDefinitionExample';
  }
};


module.exports.ElementDefinitionExampleSchema = ElementDefinitionExampleSchema;
module.exports.ElementDefinitionExample = ElementDefinitionExample;
