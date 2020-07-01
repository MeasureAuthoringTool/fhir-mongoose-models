const mongoose = require('mongoose/browser');
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
const { TimingSchema } = require('./Timing');
const { TriggerDefinitionSchema } = require('./TriggerDefinition');
const { UsageContextSchema } = require('./UsageContext');

const ExtensionSchema = new mongoose.Schema({
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
  typeName: { type: String, default: 'Extension' },
  _type: { type: String, default: 'FHIR::Extension' },
});

class Extension extends mongoose.Document {
  constructor(object) {
    super(object, ExtensionSchema);
    this.typeName = 'Extension';
    this._type = 'FHIR::Extension';
  }
}

module.exports.ExtensionSchema = ExtensionSchema;
module.exports.Extension = Extension;
