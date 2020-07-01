const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const ResourceVersionPolicySchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'ResourceVersionPolicy' },
  _type: { type: String, default: 'FHIR::ResourceVersionPolicy' },
});

class ResourceVersionPolicy extends mongoose.Document {
  constructor(object) {
    super(object, ResourceVersionPolicySchema);
    this.typeName = 'ResourceVersionPolicy';
    this._type = 'FHIR::ResourceVersionPolicy';
  }
}

module.exports.ResourceVersionPolicySchema = ResourceVersionPolicySchema;
module.exports.ResourceVersionPolicy = ResourceVersionPolicy;
