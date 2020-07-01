const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const GroupMeasureSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'GroupMeasure' },
  _type: { type: String, default: 'FHIR::GroupMeasure' },
});

class GroupMeasure extends mongoose.Document {
  constructor(object) {
    super(object, GroupMeasureSchema);
    this.typeName = 'GroupMeasure';
    this._type = 'FHIR::GroupMeasure';
  }
}

module.exports.GroupMeasureSchema = GroupMeasureSchema;
module.exports.GroupMeasure = GroupMeasure;
