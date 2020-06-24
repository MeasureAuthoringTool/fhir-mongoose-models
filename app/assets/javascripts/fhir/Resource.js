const mongoose = require('mongoose/browser');
const { MetaSchema } = require('./Meta');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ResourceSchema = new Schema({
   id : String,
   meta : MetaSchema,
   implicitRules : String,
   language : String,
   resourceType : String,
   fhirTitle: { type: String, default: 'Resource' },
});

class Resource extends mongoose.Document {
  constructor(object) {
    super(object, ResourceSchema);
    this._type = 'FHIR::Resource';
  }
};

function  ResourceSchemaFunction(add: SchemaDefinition, options: SchemaOptions) {
  const extended = new Schema({

   meta : MetaSchema,
   implicitRules : String,
   language : String,
   resourceType : String,
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
