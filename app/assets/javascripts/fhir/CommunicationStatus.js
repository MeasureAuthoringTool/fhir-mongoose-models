const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const CommunicationStatusSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'CommunicationStatus' },
});

class CommunicationStatus extends mongoose.Document {
  constructor(object) {
    super(object, CommunicationStatusSchema);
    this._type = 'FHIR::CommunicationStatus';
  }
};


module.exports.CommunicationStatusSchema = CommunicationStatusSchema;
module.exports.CommunicationStatus = CommunicationStatus;
