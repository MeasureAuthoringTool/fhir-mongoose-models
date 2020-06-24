const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const CommunicationRequestStatusSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'CommunicationRequestStatus' },
});

class CommunicationRequestStatus extends mongoose.Document {
  constructor(object) {
    super(object, CommunicationRequestStatusSchema);
    this._type = 'FHIR::CommunicationRequestStatus';
  }
};


module.exports.CommunicationRequestStatusSchema = CommunicationRequestStatusSchema;
module.exports.CommunicationRequestStatus = CommunicationRequestStatus;
