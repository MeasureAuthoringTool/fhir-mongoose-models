const { ActionRelationshipTypeSchema } = require('./allSchemaHeaders.js');
const { BackboneElementSchema } = require('./BackboneElement');
const { DurationSchema } = require('./allSchemaHeaders.js');
const { PrimitiveIdSchema } = require('./allSchemaHeaders.js');
const { RangeSchema } = require('./allSchemaHeaders.js');
const { RequestGroupActionRelatedActionSchema } = require('./allSchemaHeaders.js');

RequestGroupActionRelatedActionSchema.add(BackboneElementSchema);
RequestGroupActionRelatedActionSchema.remove('id');
RequestGroupActionRelatedActionSchema.add({
  actionId: PrimitiveIdSchema,
  relationship: ActionRelationshipTypeSchema,
  offsetDuration: DurationSchema,
  offsetRange: RangeSchema,
});

module.exports.RequestGroupActionRelatedActionSchema = RequestGroupActionRelatedActionSchema;
