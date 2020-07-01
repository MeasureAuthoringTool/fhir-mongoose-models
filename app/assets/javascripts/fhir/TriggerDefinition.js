const mongoose = require('mongoose/browser');
const { DataRequirementSchema } = require('./DataRequirement');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');
const { ExpressionSchema } = require('./Expression');
const { PrimitiveDateSchema } = require('./PrimitiveDate');
const { PrimitiveDateTimeSchema } = require('./PrimitiveDateTime');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { ReferenceSchema } = require('./Reference');
const { TimingSchema } = require('./Timing');
const { TriggerTypeSchema } = require('./TriggerType');

const TriggerDefinitionSchema = ElementSchemaFunction({
  type: TriggerTypeSchema,
  name: PrimitiveStringSchema,
  timingTiming: TimingSchema,
  timingReference: ReferenceSchema,
  timingDate: PrimitiveDateSchema,
  timingDateTime: PrimitiveDateTimeSchema,
  data: [DataRequirementSchema],
  condition: ExpressionSchema,
  typeName: { type: String, default: 'TriggerDefinition' },
  _type: { type: String, default: 'FHIR::TriggerDefinition' },
});

class TriggerDefinition extends mongoose.Document {
  constructor(object) {
    super(object, TriggerDefinitionSchema);
    this.typeName = 'TriggerDefinition';
    this._type = 'FHIR::TriggerDefinition';
  }
}

module.exports.TriggerDefinitionSchema = TriggerDefinitionSchema;
module.exports.TriggerDefinition = TriggerDefinition;
