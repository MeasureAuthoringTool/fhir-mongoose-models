const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const RequestStatusSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'RequestStatus' },
});

class RequestStatus extends mongoose.Document {
  constructor(object) {
    super(object, RequestStatusSchema);
    this._type = 'FHIR::RequestStatus';
  }
};


module.exports.RequestStatusSchema = RequestStatusSchema;
module.exports.RequestStatus = RequestStatus;
