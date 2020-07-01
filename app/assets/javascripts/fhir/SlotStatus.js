const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const SlotStatusSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'SlotStatus' },
  _type: { type: String, default: 'FHIR::SlotStatus' },
});

class SlotStatus extends mongoose.Document {
  constructor(object) {
    super(object, SlotStatusSchema);
    this.typeName = 'SlotStatus';
    this._type = 'FHIR::SlotStatus';
  }
}

module.exports.SlotStatusSchema = SlotStatusSchema;
module.exports.SlotStatus = SlotStatus;
