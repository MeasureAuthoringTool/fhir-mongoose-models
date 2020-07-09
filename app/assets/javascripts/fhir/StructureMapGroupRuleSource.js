const { AddressSchema } = require('./allSchemaHeaders.js');
const { AgeSchema } = require('./allSchemaHeaders.js');
const { AnnotationSchema } = require('./allSchemaHeaders.js');
const { AttachmentSchema } = require('./allSchemaHeaders.js');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { CodingSchema } = require('./allSchemaHeaders.js');
const { ContactDetailSchema } = require('./allSchemaHeaders.js');
const { ContactPointSchema } = require('./allSchemaHeaders.js');
const { ContributorSchema } = require('./allSchemaHeaders.js');
const { CountSchema } = require('./allSchemaHeaders.js');
const { DataRequirementSchema } = require('./allSchemaHeaders.js');
const { DistanceSchema } = require('./allSchemaHeaders.js');
const { DosageSchema } = require('./allSchemaHeaders.js');
const { DurationSchema } = require('./allSchemaHeaders.js');
const { ExpressionSchema } = require('./allSchemaHeaders.js');
const { HumanNameSchema } = require('./allSchemaHeaders.js');
const { IdentifierSchema } = require('./allSchemaHeaders.js');
const { MetaSchema } = require('./allSchemaHeaders.js');
const { MoneySchema } = require('./allSchemaHeaders.js');
const { ParameterDefinitionSchema } = require('./allSchemaHeaders.js');
const { PeriodSchema } = require('./allSchemaHeaders.js');
const { PrimitiveBase64BinarySchema } = require('./allSchemaHeaders.js');
const { PrimitiveBooleanSchema } = require('./allSchemaHeaders.js');
const { PrimitiveCanonicalSchema } = require('./allSchemaHeaders.js');
const { PrimitiveCodeSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateTimeSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDecimalSchema } = require('./allSchemaHeaders.js');
const { PrimitiveIdSchema } = require('./allSchemaHeaders.js');
const { PrimitiveInstantSchema } = require('./allSchemaHeaders.js');
const { PrimitiveIntegerSchema } = require('./allSchemaHeaders.js');
const { PrimitiveMarkdownSchema } = require('./allSchemaHeaders.js');
const { PrimitiveOidSchema } = require('./allSchemaHeaders.js');
const { PrimitivePositiveIntSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { PrimitiveTimeSchema } = require('./allSchemaHeaders.js');
const { PrimitiveUnsignedIntSchema } = require('./allSchemaHeaders.js');
const { PrimitiveUriSchema } = require('./allSchemaHeaders.js');
const { PrimitiveUrlSchema } = require('./allSchemaHeaders.js');
const { PrimitiveUuidSchema } = require('./allSchemaHeaders.js');
const { QuantitySchema } = require('./allSchemaHeaders.js');
const { RangeSchema } = require('./allSchemaHeaders.js');
const { RatioSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { RelatedArtifactSchema } = require('./allSchemaHeaders.js');
const { SampledDataSchema } = require('./allSchemaHeaders.js');
const { SignatureSchema } = require('./allSchemaHeaders.js');
const { StructureMapSourceListModeSchema } = require('./allSchemaHeaders.js');
const { TimingSchema } = require('./allSchemaHeaders.js');
const { TriggerDefinitionSchema } = require('./allSchemaHeaders.js');
const { UsageContextSchema } = require('./allSchemaHeaders.js');
const { StructureMapGroupRuleSourceSchema } = require('./allSchemaHeaders.js');

StructureMapGroupRuleSourceSchema.add(BackboneElementSchema);
StructureMapGroupRuleSourceSchema.remove('id');
StructureMapGroupRuleSourceSchema.add({
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
});

module.exports.StructureMapGroupRuleSourceSchema = StructureMapGroupRuleSourceSchema;
