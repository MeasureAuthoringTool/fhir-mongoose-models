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
const { ReferenceSchema } = require('./Reference');
const { TimingSchema } = require('./Timing');
const { TriggerDefinitionSchema } = require('./TriggerDefinition');
const { UsageContextSchema } = require('./UsageContext');

const EvidenceVariableCharacteristicSchema = BackboneElementSchemaFunction({
  description: PrimitiveStringSchema,
  definitionReference: ReferenceSchema,
  definitionCanonical: PrimitiveCanonicalSchema,
  definitionCodeableConcept: CodeableConceptSchema,
  definitionExpression: ExpressionSchema,
  definitionDataRequirement: DataRequirementSchema,
  definitionTriggerDefinition: TriggerDefinitionSchema,
  usageContext: [UsageContextSchema],
  exclude: PrimitiveBooleanSchema,
  participantEffectiveDateTime: PrimitiveDateTimeSchema,
  participantEffectivePeriod: PeriodSchema,
  participantEffectiveDuration: DurationSchema,
  participantEffectiveTiming: TimingSchema,
  timeFromStart: DurationSchema,
  groupMeasure: GroupMeasureSchema,
  typeName: { type: String, default: 'EvidenceVariableCharacteristic' },
  _type: { type: String, default: 'FHIR::EvidenceVariableCharacteristic' },
});

class EvidenceVariableCharacteristic extends mongoose.Document {
  constructor(object) {
    super(object, EvidenceVariableCharacteristicSchema);
    this.typeName = 'EvidenceVariableCharacteristic';
    this._type = 'FHIR::EvidenceVariableCharacteristic';
  }
}

module.exports.EvidenceVariableCharacteristicSchema = EvidenceVariableCharacteristicSchema;
module.exports.EvidenceVariableCharacteristic = EvidenceVariableCharacteristic;
