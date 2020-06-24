const mongoose = require('mongoose/browser');
const { ExtensionSchema } = require('./Extension');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ElementSchema = new Schema({
   id : String,
   extension : [ExtensionSchema],
   fhirTitle: { type: String, default: 'Element' },
});

class Element extends mongoose.Document {
  constructor(object) {
    super(object, ElementSchema);
    this._type = 'FHIR::Element';
  }
};

function  ElementSchemaFunction(add: SchemaDefinition, options: SchemaOptions) {
  const extended = new Schema({

   extension : [ExtensionSchema],
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

module.exports.ElementSchemaFunction = ElementSchemaFunction;
module.exports.ElementSchema = ElementSchema;
module.exports.Element = Element;
