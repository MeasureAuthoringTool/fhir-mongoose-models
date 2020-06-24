const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const StatusSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'Status' },
});

class Status extends mongoose.Document {
  constructor(object) {
    super(object, StatusSchema);
    this._type = 'FHIR::Status';
  }
};


module.exports.StatusSchema = StatusSchema;
module.exports.Status = Status;
