const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const SupplyRequestStatusSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'SupplyRequestStatus' },
  _type: { type: String, default: 'FHIR::SupplyRequestStatus' },
});

class SupplyRequestStatus extends mongoose.Document {
  constructor(object) {
    super(object, SupplyRequestStatusSchema);
    this.typeName = 'SupplyRequestStatus';
    this._type = 'FHIR::SupplyRequestStatus';
  }
}

module.exports.SupplyRequestStatusSchema = SupplyRequestStatusSchema;
module.exports.SupplyRequestStatus = SupplyRequestStatus;
