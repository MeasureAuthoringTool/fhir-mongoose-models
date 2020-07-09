const { AddressSchema } = require('./allSchemaHeaders.js');
const { AgeSchema } = require('./allSchemaHeaders.js');
const { AnnotationSchema } = require('./allSchemaHeaders.js');
const { AttachmentSchema } = require('./allSchemaHeaders.js');
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
const { TimingSchema } = require('./allSchemaHeaders.js');
const { TriggerDefinitionSchema } = require('./allSchemaHeaders.js');
const { UsageContextSchema } = require('./allSchemaHeaders.js');
const { ExtensionSchema } = require('./allSchemaHeaders.js');

ExtensionSchema.add({
  url: PrimitiveUriSchema,
  valueBase64Binary: PrimitiveBase64BinarySchema,
  valueBoolean: PrimitiveBooleanSchema,
  valueCanonical: PrimitiveCanonicalSchema,
  valueCode: PrimitiveCodeSchema,
  valueDate: PrimitiveDateSchema,
  valueDateTime: PrimitiveDateTimeSchema,
  valueDecimal: PrimitiveDecimalSchema,
  valueId: PrimitiveIdSchema,
  valueInstant: PrimitiveInstantSchema,
  valueInteger: PrimitiveIntegerSchema,
  valueMarkdown: PrimitiveMarkdownSchema,
  valueOid: PrimitiveOidSchema,
  valuePositiveInt: PrimitivePositiveIntSchema,
  valueString: PrimitiveStringSchema,
  valueTime: PrimitiveTimeSchema,
  valueUnsignedInt: PrimitiveUnsignedIntSchema,
  valueUri: PrimitiveUriSchema,
  valueUrl: PrimitiveUrlSchema,
  valueUuid: PrimitiveUuidSchema,
  valueAddress: AddressSchema,
  valueAge: AgeSchema,
  valueAnnotation: AnnotationSchema,
  valueAttachment: AttachmentSchema,
  valueCodeableConcept: CodeableConceptSchema,
  valueCoding: CodingSchema,
  valueContactPoint: ContactPointSchema,
  valueCount: CountSchema,
  valueDistance: DistanceSchema,
  valueDuration: DurationSchema,
  valueHumanName: HumanNameSchema,
  valueIdentifier: IdentifierSchema,
  valueMoney: MoneySchema,
  valuePeriod: PeriodSchema,
  valueQuantity: QuantitySchema,
  valueRange: RangeSchema,
  valueRatio: RatioSchema,
  valueReference: ReferenceSchema,
  valueSampledData: SampledDataSchema,
  valueSignature: SignatureSchema,
  valueTiming: TimingSchema,
  valueContactDetail: ContactDetailSchema,
  valueContributor: ContributorSchema,
  valueDataRequirement: DataRequirementSchema,
  valueExpression: ExpressionSchema,
  valueParameterDefinition: ParameterDefinitionSchema,
  valueRelatedArtifact: RelatedArtifactSchema,
  valueTriggerDefinition: TriggerDefinitionSchema,
  valueUsageContext: UsageContextSchema,
  valueDosage: DosageSchema,
  valueMeta: MetaSchema,
  id: String,
  extension: [ExtensionSchema],
});

module.exports.ExtensionSchema = ExtensionSchema;
