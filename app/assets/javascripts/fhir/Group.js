const mongoose = require('mongoose/browser');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DomainResourceSchema } = require('./DomainResource');
const { DomainResourceSchemaFunction } = require('./DomainResource');
const { GroupCharacteristicSchema } = require('./GroupCharacteristic');
const { GroupMemberSchema } = require('./GroupMember');
const { GroupTypeSchema } = require('./GroupType');
const { IdentifierSchema } = require('./Identifier');
const { PrimitiveBooleanSchema } = require('./PrimitiveBoolean');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { PrimitiveUnsignedIntSchema } = require('./PrimitiveUnsignedInt');
const { ReferenceSchema } = require('./Reference');

const GroupSchema = DomainResourceSchemaFunction({
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
  typeName: { type: String, default: 'Group' },
  _type: { type: String, default: 'FHIR::Group' },
});

class Group extends mongoose.Document {
  constructor(object) {
    super(object, GroupSchema);
    this.typeName = 'Group';
    this._type = 'FHIR::Group';
  }
}

module.exports.GroupSchema = GroupSchema;
module.exports.Group = Group;
