const mongoose = require('mongoose/browser');
const DateTime = require('./basetypes/DateTime');
const FHIRDate = require('./basetypes/FHIRDate');
const { AddressSchema } = require('./Address');
const { AgeSchema } = require('./Age');
const { AnnotationSchema } = require('./Annotation');
const { AttachmentSchema } = require('./Attachment');
const { BackboneElementSchema } = require('./BackboneElement');
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
const { ResourceSchema } = require('./Resource');
const { SampledDataSchema } = require('./SampledData');
const { SignatureSchema } = require('./Signature');
const { TimingSchema } = require('./Timing');
const { TriggerDefinitionSchema } = require('./TriggerDefinition');
const { UsageContextSchema } = require('./UsageContext');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ParametersParameterSchema = BackboneElementSchemaFunction({
   name : String,
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
   resource : ResourceSchema,
   part : [ParametersParameterSchema],
   fhirTitle: { type: String, default: 'ParametersParameter' },
});

class ParametersParameter extends mongoose.Document {
  constructor(object) {
    super(object, ParametersParameterSchema);
    this._type = 'FHIR::ParametersParameter';
  }
};


module.exports.ParametersParameterSchema = ParametersParameterSchema;
module.exports.ParametersParameter = ParametersParameter;
