const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ServiceRequestIntentSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'ServiceRequestIntent' },
});

class ServiceRequestIntent extends mongoose.Document {
  constructor(object) {
    super(object, ServiceRequestIntentSchema);
    this._type = 'FHIR::ServiceRequestIntent';
  }
};


module.exports.ServiceRequestIntentSchema = ServiceRequestIntentSchema;
module.exports.ServiceRequestIntent = ServiceRequestIntent;
