const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const EndpointStatusSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'EndpointStatus' },
});

class EndpointStatus extends mongoose.Document {
  constructor(object) {
    super(object, EndpointStatusSchema);
    this._type = 'FHIR::EndpointStatus';
  }
};


module.exports.EndpointStatusSchema = EndpointStatusSchema;
module.exports.EndpointStatus = EndpointStatus;
