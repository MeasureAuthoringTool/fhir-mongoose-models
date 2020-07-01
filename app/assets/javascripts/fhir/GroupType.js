const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const GroupTypeSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'GroupType' },
  _type: { type: String, default: 'FHIR::GroupType' },
});

class GroupType extends mongoose.Document {
  constructor(object) {
    super(object, GroupTypeSchema);
    this.typeName = 'GroupType';
    this._type = 'FHIR::GroupType';
  }
}

module.exports.GroupTypeSchema = GroupTypeSchema;
module.exports.GroupType = GroupType;
