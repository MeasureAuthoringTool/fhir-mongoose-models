const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { DomainResourceSchema } = require('./DomainResource');
const { GroupCharacteristicSchema } = require('./allSchemaHeaders.js');
const { GroupMemberSchema } = require('./allSchemaHeaders.js');
const { GroupTypeSchema } = require('./allSchemaHeaders.js');
const { IdentifierSchema } = require('./allSchemaHeaders.js');
const { PrimitiveBooleanSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { PrimitiveUnsignedIntSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { GroupSchema } = require('./allSchemaHeaders.js');

GroupSchema.add(DomainResourceSchema);
GroupSchema.remove('id');
GroupSchema.add({
  identifier: [IdentifierSchema],
  active: PrimitiveBooleanSchema,
  type: GroupTypeSchema,
  actual: PrimitiveBooleanSchema,
  code: CodeableConceptSchema,
  name: PrimitiveStringSchema,
  quantity: PrimitiveUnsignedIntSchema,
  managingEntity: ReferenceSchema,
  characteristic: [GroupCharacteristicSchema],
  member: [GroupMemberSchema],
});

module.exports.GroupSchema = GroupSchema;
