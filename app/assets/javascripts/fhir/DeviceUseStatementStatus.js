const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const DeviceUseStatementStatusSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'DeviceUseStatementStatus' },
});

class DeviceUseStatementStatus extends mongoose.Document {
  constructor(object) {
    super(object, DeviceUseStatementStatusSchema);
    this._type = 'FHIR::DeviceUseStatementStatus';
  }
};


module.exports.DeviceUseStatementStatusSchema = DeviceUseStatementStatusSchema;
module.exports.DeviceUseStatementStatus = DeviceUseStatementStatus;
