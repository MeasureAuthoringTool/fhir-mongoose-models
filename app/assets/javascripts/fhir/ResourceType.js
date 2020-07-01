const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const ResourceTypeSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'ResourceType' },
  _type: { type: String, default: 'FHIR::ResourceType' },
});

class ResourceType extends mongoose.Document {
  constructor(object) {
    super(object, ResourceTypeSchema);
    this.typeName = 'ResourceType';
    this._type = 'FHIR::ResourceType';
  }
}

module.exports.ResourceTypeSchema = ResourceTypeSchema;
module.exports.ResourceType = ResourceType;
