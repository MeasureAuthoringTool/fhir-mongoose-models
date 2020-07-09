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
const { ElementDefinitionBaseSchema } = require('./allSchemaHeaders.js');
const { ElementDefinitionBindingSchema } = require('./allSchemaHeaders.js');
const { ElementDefinitionConstraintSchema } = require('./allSchemaHeaders.js');
const { ElementDefinitionExampleSchema } = require('./allSchemaHeaders.js');
const { ElementDefinitionMappingSchema } = require('./allSchemaHeaders.js');
const { ElementDefinitionSlicingSchema } = require('./allSchemaHeaders.js');
const { ElementDefinitionTypeSchema } = require('./allSchemaHeaders.js');
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
const { PropertyRepresentationSchema } = require('./allSchemaHeaders.js');
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
const { ElementDefinitionSchema } = require('./allSchemaHeaders.js');

ElementDefinitionSchema.add(BackboneElementSchema);
ElementDefinitionSchema.remove('id');
ElementDefinitionSchema.add({
  path: PrimitiveStringSchema,
  representation: [PropertyRepresentationSchema],
  sliceName: PrimitiveStringSchema,
  sliceIsConstraining: PrimitiveBooleanSchema,
  label: PrimitiveStringSchema,
  code: [CodingSchema],
  slicing: ElementDefinitionSlicingSchema,
  short: PrimitiveStringSchema,
  definition: PrimitiveMarkdownSchema,
  comment: PrimitiveMarkdownSchema,
  requirements: PrimitiveMarkdownSchema,
  alias: [PrimitiveStringSchema],
  min: PrimitiveUnsignedIntSchema,
  max: PrimitiveStringSchema,
  base: ElementDefinitionBaseSchema,
  contentReference: PrimitiveUriSchema,
  type: [ElementDefinitionTypeSchema],
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
  meaningWhenMissing: PrimitiveMarkdownSchema,
  orderMeaning: PrimitiveStringSchema,
  fixedBase64Binary: PrimitiveBase64BinarySchema,
  fixedBoolean: PrimitiveBooleanSchema,
  fixedCanonical: PrimitiveCanonicalSchema,
  fixedCode: PrimitiveCodeSchema,
  fixedDate: PrimitiveDateSchema,
  fixedDateTime: PrimitiveDateTimeSchema,
  fixedDecimal: PrimitiveDecimalSchema,
  fixedId: PrimitiveIdSchema,
  fixedInstant: PrimitiveInstantSchema,
  fixedInteger: PrimitiveIntegerSchema,
  fixedMarkdown: PrimitiveMarkdownSchema,
  fixedOid: PrimitiveOidSchema,
  fixedPositiveInt: PrimitivePositiveIntSchema,
  fixedString: PrimitiveStringSchema,
  fixedTime: PrimitiveTimeSchema,
  fixedUnsignedInt: PrimitiveUnsignedIntSchema,
  fixedUri: PrimitiveUriSchema,
  fixedUrl: PrimitiveUrlSchema,
  fixedUuid: PrimitiveUuidSchema,
  fixedAddress: AddressSchema,
  fixedAge: AgeSchema,
  fixedAnnotation: AnnotationSchema,
  fixedAttachment: AttachmentSchema,
  fixedCodeableConcept: CodeableConceptSchema,
  fixedCoding: CodingSchema,
  fixedContactPoint: ContactPointSchema,
  fixedCount: CountSchema,
  fixedDistance: DistanceSchema,
  fixedDuration: DurationSchema,
  fixedHumanName: HumanNameSchema,
  fixedIdentifier: IdentifierSchema,
  fixedMoney: MoneySchema,
  fixedPeriod: PeriodSchema,
  fixedQuantity: QuantitySchema,
  fixedRange: RangeSchema,
  fixedRatio: RatioSchema,
  fixedReference: ReferenceSchema,
  fixedSampledData: SampledDataSchema,
  fixedSignature: SignatureSchema,
  fixedTiming: TimingSchema,
  fixedContactDetail: ContactDetailSchema,
  fixedContributor: ContributorSchema,
  fixedDataRequirement: DataRequirementSchema,
  fixedExpression: ExpressionSchema,
  fixedParameterDefinition: ParameterDefinitionSchema,
  fixedRelatedArtifact: RelatedArtifactSchema,
  fixedTriggerDefinition: TriggerDefinitionSchema,
  fixedUsageContext: UsageContextSchema,
  fixedDosage: DosageSchema,
  fixedMeta: MetaSchema,
  patternBase64Binary: PrimitiveBase64BinarySchema,
  patternBoolean: PrimitiveBooleanSchema,
  patternCanonical: PrimitiveCanonicalSchema,
  patternCode: PrimitiveCodeSchema,
  patternDate: PrimitiveDateSchema,
  patternDateTime: PrimitiveDateTimeSchema,
  patternDecimal: PrimitiveDecimalSchema,
  patternId: PrimitiveIdSchema,
  patternInstant: PrimitiveInstantSchema,
  patternInteger: PrimitiveIntegerSchema,
  patternMarkdown: PrimitiveMarkdownSchema,
  patternOid: PrimitiveOidSchema,
  patternPositiveInt: PrimitivePositiveIntSchema,
  patternString: PrimitiveStringSchema,
  patternTime: PrimitiveTimeSchema,
  patternUnsignedInt: PrimitiveUnsignedIntSchema,
  patternUri: PrimitiveUriSchema,
  patternUrl: PrimitiveUrlSchema,
  patternUuid: PrimitiveUuidSchema,
  patternAddress: AddressSchema,
  patternAge: AgeSchema,
  patternAnnotation: AnnotationSchema,
  patternAttachment: AttachmentSchema,
  patternCodeableConcept: CodeableConceptSchema,
  patternCoding: CodingSchema,
  patternContactPoint: ContactPointSchema,
  patternCount: CountSchema,
  patternDistance: DistanceSchema,
  patternDuration: DurationSchema,
  patternHumanName: HumanNameSchema,
  patternIdentifier: IdentifierSchema,
  patternMoney: MoneySchema,
  patternPeriod: PeriodSchema,
  patternQuantity: QuantitySchema,
  patternRange: RangeSchema,
  patternRatio: RatioSchema,
  patternReference: ReferenceSchema,
  patternSampledData: SampledDataSchema,
  patternSignature: SignatureSchema,
  patternTiming: TimingSchema,
  patternContactDetail: ContactDetailSchema,
  patternContributor: ContributorSchema,
  patternDataRequirement: DataRequirementSchema,
  patternExpression: ExpressionSchema,
  patternParameterDefinition: ParameterDefinitionSchema,
  patternRelatedArtifact: RelatedArtifactSchema,
  patternTriggerDefinition: TriggerDefinitionSchema,
  patternUsageContext: UsageContextSchema,
  patternDosage: DosageSchema,
  patternMeta: MetaSchema,
  example: [ElementDefinitionExampleSchema],
  minValueDate: PrimitiveDateSchema,
  minValueDateTime: PrimitiveDateTimeSchema,
  minValueInstant: PrimitiveInstantSchema,
  minValueTime: PrimitiveTimeSchema,
  minValueDecimal: PrimitiveDecimalSchema,
  minValueInteger: PrimitiveIntegerSchema,
  minValuePositiveInt: PrimitivePositiveIntSchema,
  minValueUnsignedInt: PrimitiveUnsignedIntSchema,
  minValueQuantity: QuantitySchema,
  maxValueDate: PrimitiveDateSchema,
  maxValueDateTime: PrimitiveDateTimeSchema,
  maxValueInstant: PrimitiveInstantSchema,
  maxValueTime: PrimitiveTimeSchema,
  maxValueDecimal: PrimitiveDecimalSchema,
  maxValueInteger: PrimitiveIntegerSchema,
  maxValuePositiveInt: PrimitivePositiveIntSchema,
  maxValueUnsignedInt: PrimitiveUnsignedIntSchema,
  maxValueQuantity: QuantitySchema,
  maxLength: PrimitiveIntegerSchema,
  condition: [PrimitiveIdSchema],
  constraint: [ElementDefinitionConstraintSchema],
  mustSupport: PrimitiveBooleanSchema,
  isModifier: PrimitiveBooleanSchema,
  isModifierReason: PrimitiveStringSchema,
  isSummary: PrimitiveBooleanSchema,
  binding: ElementDefinitionBindingSchema,
  mapping: [ElementDefinitionMappingSchema],
});

module.exports.ElementDefinitionSchema = ElementDefinitionSchema;
