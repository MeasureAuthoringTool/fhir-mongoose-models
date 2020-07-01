const mongoose = require('mongoose/browser');
const { MetaSchema } = require('./Meta');
const { PrimitiveCodeSchema } = require('./PrimitiveCode');
const { PrimitiveUriSchema } = require('./PrimitiveUri');

const ResourceSchema = new mongoose.Schema({
  id: String,
  meta: MetaSchema,
  implicitRules: PrimitiveUriSchema,
  language: PrimitiveCodeSchema,
  resourceType: String,
  typeName: { type: String, default: 'Resource' },
  _type: { type: String, default: 'FHIR::Resource' },
});

class Resource extends mongoose.Document {
  constructor(object) {
    super(object, ResourceSchema);
    this.typeName = 'Resource';
    this._type = 'FHIR::Resource';
  }
}

function ResourceSchemaFunction(add, options) {
  const extended = new mongoose.Schema({
    meta: MetaSchema,
    implicitRules: PrimitiveUriSchema,
    language: PrimitiveCodeSchema,
    resourceType: String,
    id: {
      type: String,
      default() {
        return this._id ? this._id.toString() : mongoose.Types.ObjectId().toString();
      },
    },
  }, options);

  if (add) {
    extended.add(add);
  }
  return extended;
}

module.exports.ResourceSchemaFunction = ResourceSchemaFunction;
module.exports.ResourceSchema = ResourceSchema;
module.exports.Resource = Resource;
