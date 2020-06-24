const mongoose = require('mongoose/browser');
const { ExtensionSchema } = require('./Extension');
const { NarrativeSchema } = require('./Narrative');
const { ResourceSchema } = require('./Resource');
const { ResourceSchemaFunction } = require('./Resource');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const DomainResourceSchema = ResourceSchemaFunction({
   text : NarrativeSchema,
   contained : [ResourceSchema],
   extension : [ExtensionSchema],
   modifierExtension : [ExtensionSchema],
   fhirTitle: { type: String, default: 'DomainResource' },
});

class DomainResource extends mongoose.Document {
  constructor(object) {
    super(object, DomainResourceSchema);
    this._type = 'FHIR::DomainResource';
  }
};

function  DomainResourceSchemaFunction(add: SchemaDefinition, options: SchemaOptions) {
  const extended = new Schema({
   text : NarrativeSchema,
   contained : [ResourceSchema],
   extension : [ExtensionSchema],
   modifierExtension : [ExtensionSchema],
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

module.exports.DomainResourceSchemaFunction = DomainResourceSchemaFunction;
module.exports.DomainResourceSchema = DomainResourceSchema;
module.exports.DomainResource = DomainResource;
