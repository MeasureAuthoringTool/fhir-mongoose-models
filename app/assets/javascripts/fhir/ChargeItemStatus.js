const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const ChargeItemStatusSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'ChargeItemStatus' },
  _type: { type: String, default: 'FHIR::ChargeItemStatus' },
});

class ChargeItemStatus extends mongoose.Document {
  constructor(object) {
    super(object, ChargeItemStatusSchema);
    this.typeName = 'ChargeItemStatus';
    this._type = 'FHIR::ChargeItemStatus';
  }
}

module.exports.ChargeItemStatusSchema = ChargeItemStatusSchema;
module.exports.ChargeItemStatus = ChargeItemStatus;
