const mongoose = require('mongoose/browser');
const { ExtensionSchema } = require('./Extension');

const ElementSchema = new mongoose.Schema({
  id: String,
  extension: [ExtensionSchema],
  typeName: { type: String, default: 'Element' },
  _type: { type: String, default: 'FHIR::Element' },
});

class Element extends mongoose.Document {
  constructor(object) {
    super(object, ElementSchema);
    this.typeName = 'Element';
    this._type = 'FHIR::Element';
  }
}

function ElementSchemaFunction(add, options) {
  const extended = new mongoose.Schema({
    extension: [ExtensionSchema],
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
