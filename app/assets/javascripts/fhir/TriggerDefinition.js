const mongoose = require('mongoose/browser');
const DateTime = require('./basetypes/DateTime');
const FHIRDate = require('./basetypes/FHIRDate');
const { DataRequirementSchema } = require('./DataRequirement');
const { ElementSchema } = require('./Element');
const { ExpressionSchema } = require('./Expression');
const { ReferenceSchema } = require('./Reference');
const { TimingSchema } = require('./Timing');
const { TriggerTypeSchema } = require('./TriggerType');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const TriggerDefinitionSchema = ElementSchemaFunction({
   type : TriggerTypeSchema,
   name : String,
   timingTiming : TimingSchema,
   timingReference : ReferenceSchema,
   timingDate : FHIRDate,
   timingDateTime : DateTime,
   data : [DataRequirementSchema],
   condition : ExpressionSchema,
   fhirTitle: { type: String, default: 'TriggerDefinition' },
});

class TriggerDefinition extends mongoose.Document {
  constructor(object) {
    super(object, TriggerDefinitionSchema);
    this._type = 'FHIR::TriggerDefinition';
  }
};


module.exports.TriggerDefinitionSchema = TriggerDefinitionSchema;
module.exports.TriggerDefinition = TriggerDefinition;
