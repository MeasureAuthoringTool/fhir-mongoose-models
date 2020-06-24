const mongoose = require('mongoose/browser');
const DateTime = require('./basetypes/DateTime');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DataRequirementSchema } = require('./DataRequirement');
const { DurationSchema } = require('./Duration');
const { ExpressionSchema } = require('./Expression');
const { GroupMeasureSchema } = require('./GroupMeasure');
const { PeriodSchema } = require('./Period');
const { TimingSchema } = require('./Timing');
const { UsageContextSchema } = require('./UsageContext');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ResearchElementDefinitionCharacteristicSchema = BackboneElementSchemaFunction({
   definitionCodeableConcept : CodeableConceptSchema,
   definitionCanonical : String,
   definitionExpression : ExpressionSchema,
   definitionDataRequirement : DataRequirementSchema,
   usageContext : [UsageContextSchema],
   exclude : Boolean,
   unitOfMeasure : CodeableConceptSchema,
   studyEffectiveDescription : String,
   studyEffectiveDateTime : DateTime,
   studyEffectivePeriod : PeriodSchema,
   studyEffectiveDuration : DurationSchema,
   studyEffectiveTiming : TimingSchema,
   studyEffectiveTimeFromStart : DurationSchema,
   studyEffectiveGroupMeasure : GroupMeasureSchema,
   participantEffectiveDescription : String,
   participantEffectiveDateTime : DateTime,
   participantEffectivePeriod : PeriodSchema,
   participantEffectiveDuration : DurationSchema,
   participantEffectiveTiming : TimingSchema,
   participantEffectiveTimeFromStart : DurationSchema,
   participantEffectiveGroupMeasure : GroupMeasureSchema,
   fhirTitle: { type: String, default: 'ResearchElementDefinitionCharacteristic' },
});

class ResearchElementDefinitionCharacteristic extends mongoose.Document {
  constructor(object) {
    super(object, ResearchElementDefinitionCharacteristicSchema);
    this._type = 'FHIR::ResearchElementDefinitionCharacteristic';
  }
};


module.exports.ResearchElementDefinitionCharacteristicSchema = ResearchElementDefinitionCharacteristicSchema;
module.exports.ResearchElementDefinitionCharacteristic = ResearchElementDefinitionCharacteristic;
