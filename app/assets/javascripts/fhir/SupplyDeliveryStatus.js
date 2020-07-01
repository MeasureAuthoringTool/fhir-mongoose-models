const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const SupplyDeliveryStatusSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'SupplyDeliveryStatus' },
  _type: { type: String, default: 'FHIR::SupplyDeliveryStatus' },
});

class SupplyDeliveryStatus extends mongoose.Document {
  constructor(object) {
    super(object, SupplyDeliveryStatusSchema);
    this.typeName = 'SupplyDeliveryStatus';
    this._type = 'FHIR::SupplyDeliveryStatus';
  }
}

module.exports.SupplyDeliveryStatusSchema = SupplyDeliveryStatusSchema;
module.exports.SupplyDeliveryStatus = SupplyDeliveryStatus;
