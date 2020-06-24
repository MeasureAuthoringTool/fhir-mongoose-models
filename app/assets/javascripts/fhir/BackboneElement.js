const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ExtensionSchema } = require('./Extension');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const BackboneElementSchema = ElementSchemaFunction({
   modifierExtension : [ExtensionSchema],
   fhirTitle: { type: String, default: 'BackboneElement' },
});

class BackboneElement extends mongoose.Document {
  constructor(object) {
    super(object, BackboneElementSchema);
    this._type = 'FHIR::BackboneElement';
  }
};

function  BackboneElementSchemaFunction(add: SchemaDefinition, options: SchemaOptions) {
  const extended = new Schema({
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

module.exports.BackboneElementSchemaFunction = BackboneElementSchemaFunction;
module.exports.BackboneElementSchema = BackboneElementSchema;
module.exports.BackboneElement = BackboneElement;
