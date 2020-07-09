const { BackboneElementSchema } = require('./BackboneElement');
const { PeriodSchema } = require('./allSchemaHeaders.js');
const { PrimitiveBooleanSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { GroupMemberSchema } = require('./allSchemaHeaders.js');

GroupMemberSchema.add(BackboneElementSchema);
GroupMemberSchema.remove('id');
GroupMemberSchema.add({
  entity: ReferenceSchema,
  period: PeriodSchema,
  inactive: PrimitiveBooleanSchema,
});

module.exports.GroupMemberSchema = GroupMemberSchema;
