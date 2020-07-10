const { DataRequirementSchema } = require('./allSchemaHeaders.js');
const { ElementSchema } = require('./Element');
const { ExpressionSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateTimeSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { TimingSchema } = require('./allSchemaHeaders.js');
const { TriggerTypeSchema } = require('./allSchemaHeaders.js');
const { TriggerDefinitionSchema } = require('./allSchemaHeaders.js');

TriggerDefinitionSchema.add(ElementSchema);
TriggerDefinitionSchema.remove('id');
TriggerDefinitionSchema.add({
  type: TriggerTypeSchema,
  name: PrimitiveStringSchema,
  timingTiming: TimingSchema,
  timingReference: ReferenceSchema,
  timingDate: PrimitiveDateSchema,
  timingDateTime: PrimitiveDateTimeSchema,
  data: [DataRequirementSchema],
  condition: ExpressionSchema,
});

module.exports.TriggerDefinitionSchema = TriggerDefinitionSchema;
