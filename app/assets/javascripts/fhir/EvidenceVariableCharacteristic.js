const mongoose = require('mongoose/browser');
const DateTime = require('./basetypes/DateTime');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DataRequirementSchema } = require('./DataRequirement');
const { DurationSchema } = require('./Duration');
const { ExpressionSchema } = require('./Expression');
const { GroupMeasureSchema } = require('./GroupMeasure');
const { PeriodSchema } = require('./Period');
const { ReferenceSchema } = require('./Reference');
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

const EvidenceVariableCharacteristicSchema = BackboneElementSchemaFunction({
   description : String,
   definitionReference : ReferenceSchema,
   definitionCanonical : String,
   definitionCodeableConcept : CodeableConceptSchema,
   definitionExpression : ExpressionSchema,
   definitionDataRequirement : DataRequirementSchema,
   definitionTriggerDefinition : TriggerDefinitionSchema,
   usageContext : [UsageContextSchema],
   exclude : Boolean,
   participantEffectiveDateTime : DateTime,
   participantEffectivePeriod : PeriodSchema,
   participantEffectiveDuration : DurationSchema,
   participantEffectiveTiming : TimingSchema,
   timeFromStart : DurationSchema,
   groupMeasure : GroupMeasureSchema,
   fhirTitle: { type: String, default: 'EvidenceVariableCharacteristic' },
});

class EvidenceVariableCharacteristic extends mongoose.Document {
  constructor(object) {
    super(object, EvidenceVariableCharacteristicSchema);
    this._type = 'FHIR::EvidenceVariableCharacteristic';
  }
};


module.exports.EvidenceVariableCharacteristicSchema = EvidenceVariableCharacteristicSchema;
module.exports.EvidenceVariableCharacteristic = EvidenceVariableCharacteristic;
