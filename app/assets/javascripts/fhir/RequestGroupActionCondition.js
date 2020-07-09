const { ActionConditionKindSchema } = require('./allSchemaHeaders.js');
const { BackboneElementSchema } = require('./BackboneElement');
const { ExpressionSchema } = require('./allSchemaHeaders.js');
const { RequestGroupActionConditionSchema } = require('./allSchemaHeaders.js');

RequestGroupActionConditionSchema.add(BackboneElementSchema);
RequestGroupActionConditionSchema.remove('id');
RequestGroupActionConditionSchema.add({
  kind: ActionConditionKindSchema,
  expression: ExpressionSchema,
});

module.exports.RequestGroupActionConditionSchema = RequestGroupActionConditionSchema;
