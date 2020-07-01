const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DataRequirementSchema } = require('./DataRequirement');
const { DurationSchema } = require('./Duration');
const { ExpressionSchema } = require('./Expression');
const { GroupMeasureSchema } = require('./GroupMeasure');
const { PeriodSchema } = require('./Period');
const { PrimitiveBooleanSchema } = require('./PrimitiveBoolean');
const { PrimitiveCanonicalSchema } = require('./PrimitiveCanonical');
const { PrimitiveDateTimeSchema } = require('./PrimitiveDateTime');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { TimingSchema } = require('./Timing');
const { UsageContextSchema } = require('./UsageContext');

const ResearchElementDefinitionCharacteristicSchema = BackboneElementSchemaFunction({
  definitionCodeableConcept: CodeableConceptSchema,
  definitionCanonical: PrimitiveCanonicalSchema,
  definitionExpression: ExpressionSchema,
  definitionDataRequirement: DataRequirementSchema,
  usageContext: [UsageContextSchema],
  exclude: PrimitiveBooleanSchema,
  unitOfMeasure: CodeableConceptSchema,
  studyEffectiveDescription: PrimitiveStringSchema,
  studyEffectiveDateTime: PrimitiveDateTimeSchema,
  studyEffectivePeriod: PeriodSchema,
  studyEffectiveDuration: DurationSchema,
  studyEffectiveTiming: TimingSchema,
  studyEffectiveTimeFromStart: DurationSchema,
  studyEffectiveGroupMeasure: GroupMeasureSchema,
  participantEffectiveDescription: PrimitiveStringSchema,
  participantEffectiveDateTime: PrimitiveDateTimeSchema,
  participantEffectivePeriod: PeriodSchema,
  participantEffectiveDuration: DurationSchema,
  participantEffectiveTiming: TimingSchema,
  participantEffectiveTimeFromStart: DurationSchema,
  participantEffectiveGroupMeasure: GroupMeasureSchema,
  typeName: { type: String, default: 'ResearchElementDefinitionCharacteristic' },
  _type: { type: String, default: 'FHIR::ResearchElementDefinitionCharacteristic' },
});

class ResearchElementDefinitionCharacteristic extends mongoose.Document {
  constructor(object) {
    super(object, ResearchElementDefinitionCharacteristicSchema);
    this.typeName = 'ResearchElementDefinitionCharacteristic';
    this._type = 'FHIR::ResearchElementDefinitionCharacteristic';
  }
}

module.exports.ResearchElementDefinitionCharacteristicSchema = ResearchElementDefinitionCharacteristicSchema;
module.exports.ResearchElementDefinitionCharacteristic = ResearchElementDefinitionCharacteristic;
