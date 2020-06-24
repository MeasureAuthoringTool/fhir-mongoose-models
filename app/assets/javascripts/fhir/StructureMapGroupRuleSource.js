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
const { SampledDataSchema } = require('./SampledData');
const { SignatureSchema } = require('./Signature');
const { StructureMapSourceListModeSchema } = require('./StructureMapSourceListMode');
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

const StructureMapGroupRuleSourceSchema = BackboneElementSchemaFunction({
   context : String,
   min : Number,
   max : String,
   type : String,
   defaultValueBase64Binary : String,
   defaultValueBoolean : Boolean,
   defaultValueCanonical : String,
   defaultValueCode : String,
   defaultValueDate : FHIRDate,
   defaultValueDateTime : DateTime,
   defaultValueDecimal : Number,
   defaultValueId : String,
   defaultValueInstant : DateTime,
   defaultValueInteger : Number,
   defaultValueMarkdown : String,
   defaultValueOid : String,
   defaultValuePositiveInt : Number,
   defaultValueString : String,
   defaultValueTime : DateTime,
   defaultValueUnsignedInt : Number,
   defaultValueUri : String,
   defaultValueUrl : String,
   defaultValueUuid : String,
   defaultValueAddress : AddressSchema,
   defaultValueAge : AgeSchema,
   defaultValueAnnotation : AnnotationSchema,
   defaultValueAttachment : AttachmentSchema,
   defaultValueCodeableConcept : CodeableConceptSchema,
   defaultValueCoding : CodingSchema,
   defaultValueContactPoint : ContactPointSchema,
   defaultValueCount : CountSchema,
   defaultValueDistance : DistanceSchema,
   defaultValueDuration : DurationSchema,
   defaultValueHumanName : HumanNameSchema,
   defaultValueIdentifier : IdentifierSchema,
   defaultValueMoney : MoneySchema,
   defaultValuePeriod : PeriodSchema,
   defaultValueQuantity : QuantitySchema,
   defaultValueRange : RangeSchema,
   defaultValueRatio : RatioSchema,
   defaultValueReference : ReferenceSchema,
   defaultValueSampledData : SampledDataSchema,
   defaultValueSignature : SignatureSchema,
   defaultValueTiming : TimingSchema,
   defaultValueContactDetail : ContactDetailSchema,
   defaultValueContributor : ContributorSchema,
   defaultValueDataRequirement : DataRequirementSchema,
   defaultValueExpression : ExpressionSchema,
   defaultValueParameterDefinition : ParameterDefinitionSchema,
   defaultValueRelatedArtifact : RelatedArtifactSchema,
   defaultValueTriggerDefinition : TriggerDefinitionSchema,
   defaultValueUsageContext : UsageContextSchema,
   defaultValueDosage : DosageSchema,
   defaultValueMeta : MetaSchema,
   element : String,
   listMode : StructureMapSourceListModeSchema,
   variable : String,
   condition : String,
   check : String,
   logMessage : String,
   fhirTitle: { type: String, default: 'StructureMapGroupRuleSource' },
});

class StructureMapGroupRuleSource extends mongoose.Document {
  constructor(object) {
    super(object, StructureMapGroupRuleSourceSchema);
    this._type = 'FHIR::StructureMapGroupRuleSource';
  }
};


module.exports.StructureMapGroupRuleSourceSchema = StructureMapGroupRuleSourceSchema;
module.exports.StructureMapGroupRuleSource = StructureMapGroupRuleSource;
