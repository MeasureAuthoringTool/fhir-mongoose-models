const mongoose = require('mongoose/browser');
const { AddressSchema } = require('./Address');
const { AgeSchema } = require('./Age');
const { AnnotationSchema } = require('./Annotation');
const { AttachmentSchema } = require('./Attachment');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
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
const { PrimitiveBase64BinarySchema } = require('./PrimitiveBase64Binary');
const { PrimitiveBooleanSchema } = require('./PrimitiveBoolean');
const { PrimitiveCanonicalSchema } = require('./PrimitiveCanonical');
const { PrimitiveCodeSchema } = require('./PrimitiveCode');
const { PrimitiveDateSchema } = require('./PrimitiveDate');
const { PrimitiveDateTimeSchema } = require('./PrimitiveDateTime');
const { PrimitiveDecimalSchema } = require('./PrimitiveDecimal');
const { PrimitiveIdSchema } = require('./PrimitiveId');
const { PrimitiveInstantSchema } = require('./PrimitiveInstant');
const { PrimitiveIntegerSchema } = require('./PrimitiveInteger');
const { PrimitiveMarkdownSchema } = require('./PrimitiveMarkdown');
const { PrimitiveOidSchema } = require('./PrimitiveOid');
const { PrimitivePositiveIntSchema } = require('./PrimitivePositiveInt');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { PrimitiveTimeSchema } = require('./PrimitiveTime');
const { PrimitiveUnsignedIntSchema } = require('./PrimitiveUnsignedInt');
const { PrimitiveUriSchema } = require('./PrimitiveUri');
const { PrimitiveUrlSchema } = require('./PrimitiveUrl');
const { PrimitiveUuidSchema } = require('./PrimitiveUuid');
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

const StructureMapGroupRuleSourceSchema = BackboneElementSchemaFunction({
  context: PrimitiveIdSchema,
  min: PrimitiveIntegerSchema,
  max: PrimitiveStringSchema,
  type: PrimitiveStringSchema,
  defaultValueBase64Binary: PrimitiveBase64BinarySchema,
  defaultValueBoolean: PrimitiveBooleanSchema,
  defaultValueCanonical: PrimitiveCanonicalSchema,
  defaultValueCode: PrimitiveCodeSchema,
  defaultValueDate: PrimitiveDateSchema,
  defaultValueDateTime: PrimitiveDateTimeSchema,
  defaultValueDecimal: PrimitiveDecimalSchema,
  defaultValueId: PrimitiveIdSchema,
  defaultValueInstant: PrimitiveInstantSchema,
  defaultValueInteger: PrimitiveIntegerSchema,
  defaultValueMarkdown: PrimitiveMarkdownSchema,
  defaultValueOid: PrimitiveOidSchema,
  defaultValuePositiveInt: PrimitivePositiveIntSchema,
  defaultValueString: PrimitiveStringSchema,
  defaultValueTime: PrimitiveTimeSchema,
  defaultValueUnsignedInt: PrimitiveUnsignedIntSchema,
  defaultValueUri: PrimitiveUriSchema,
  defaultValueUrl: PrimitiveUrlSchema,
  defaultValueUuid: PrimitiveUuidSchema,
  defaultValueAddress: AddressSchema,
  defaultValueAge: AgeSchema,
  defaultValueAnnotation: AnnotationSchema,
  defaultValueAttachment: AttachmentSchema,
  defaultValueCodeableConcept: CodeableConceptSchema,
  defaultValueCoding: CodingSchema,
  defaultValueContactPoint: ContactPointSchema,
  defaultValueCount: CountSchema,
  defaultValueDistance: DistanceSchema,
  defaultValueDuration: DurationSchema,
  defaultValueHumanName: HumanNameSchema,
  defaultValueIdentifier: IdentifierSchema,
  defaultValueMoney: MoneySchema,
  defaultValuePeriod: PeriodSchema,
  defaultValueQuantity: QuantitySchema,
  defaultValueRange: RangeSchema,
  defaultValueRatio: RatioSchema,
  defaultValueReference: ReferenceSchema,
  defaultValueSampledData: SampledDataSchema,
  defaultValueSignature: SignatureSchema,
  defaultValueTiming: TimingSchema,
  defaultValueContactDetail: ContactDetailSchema,
  defaultValueContributor: ContributorSchema,
  defaultValueDataRequirement: DataRequirementSchema,
  defaultValueExpression: ExpressionSchema,
  defaultValueParameterDefinition: ParameterDefinitionSchema,
  defaultValueRelatedArtifact: RelatedArtifactSchema,
  defaultValueTriggerDefinition: TriggerDefinitionSchema,
  defaultValueUsageContext: UsageContextSchema,
  defaultValueDosage: DosageSchema,
  defaultValueMeta: MetaSchema,
  element: PrimitiveStringSchema,
  listMode: StructureMapSourceListModeSchema,
  variable: PrimitiveIdSchema,
  condition: PrimitiveStringSchema,
  check: PrimitiveStringSchema,
  logMessage: PrimitiveStringSchema,
  typeName: { type: String, default: 'StructureMapGroupRuleSource' },
  _type: { type: String, default: 'FHIR::StructureMapGroupRuleSource' },
});

class StructureMapGroupRuleSource extends mongoose.Document {
  constructor(object) {
    super(object, StructureMapGroupRuleSourceSchema);
    this.typeName = 'StructureMapGroupRuleSource';
    this._type = 'FHIR::StructureMapGroupRuleSource';
  }
}

module.exports.StructureMapGroupRuleSourceSchema = StructureMapGroupRuleSourceSchema;
module.exports.StructureMapGroupRuleSource = StructureMapGroupRuleSource;
