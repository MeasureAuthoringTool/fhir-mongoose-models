const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { PeriodSchema } = require('./Period');
const { PrimitiveBooleanSchema } = require('./PrimitiveBoolean');
const { ReferenceSchema } = require('./Reference');

const GroupMemberSchema = BackboneElementSchemaFunction({
  entity: ReferenceSchema,
  period: PeriodSchema,
  inactive: PrimitiveBooleanSchema,
  typeName: { type: String, default: 'GroupMember' },
  _type: { type: String, default: 'FHIR::GroupMember' },
});

class GroupMember extends mongoose.Document {
  constructor(object) {
    super(object, GroupMemberSchema);
    this.typeName = 'GroupMember';
    this._type = 'FHIR::GroupMember';
  }
}

module.exports.GroupMemberSchema = GroupMemberSchema;
module.exports.GroupMember = GroupMember;
