const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ResourceVersionPolicySchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'ResourceVersionPolicy' },
});

class ResourceVersionPolicy extends mongoose.Document {
  constructor(object) {
    super(object, ResourceVersionPolicySchema);
    this._type = 'FHIR::ResourceVersionPolicy';
  }
};


module.exports.ResourceVersionPolicySchema = ResourceVersionPolicySchema;
module.exports.ResourceVersionPolicy = ResourceVersionPolicy;
