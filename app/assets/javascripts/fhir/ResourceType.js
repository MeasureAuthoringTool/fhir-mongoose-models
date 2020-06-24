const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ResourceTypeSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'ResourceType' },
});

class ResourceType extends mongoose.Document {
  constructor(object) {
    super(object, ResourceTypeSchema);
    this._type = 'FHIR::ResourceType';
  }
};


module.exports.ResourceTypeSchema = ResourceTypeSchema;
module.exports.ResourceType = ResourceType;
