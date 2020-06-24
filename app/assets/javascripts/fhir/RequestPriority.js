const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const RequestPrioritySchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'RequestPriority' },
});

class RequestPriority extends mongoose.Document {
  constructor(object) {
    super(object, RequestPrioritySchema);
    this._type = 'FHIR::RequestPriority';
  }
};


module.exports.RequestPrioritySchema = RequestPrioritySchema;
module.exports.RequestPriority = RequestPriority;
