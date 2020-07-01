const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const DeviceUseStatementStatusSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'DeviceUseStatementStatus' },
  _type: { type: String, default: 'FHIR::DeviceUseStatementStatus' },
});

class DeviceUseStatementStatus extends mongoose.Document {
  constructor(object) {
    super(object, DeviceUseStatementStatusSchema);
    this.typeName = 'DeviceUseStatementStatus';
    this._type = 'FHIR::DeviceUseStatementStatus';
  }
}

module.exports.DeviceUseStatementStatusSchema = DeviceUseStatementStatusSchema;
module.exports.DeviceUseStatementStatus = DeviceUseStatementStatus;
