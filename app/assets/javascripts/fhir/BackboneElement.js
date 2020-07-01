const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');
const { ExtensionSchema } = require('./Extension');

const BackboneElementSchema = ElementSchemaFunction({
  modifierExtension: [ExtensionSchema],
  typeName: { type: String, default: 'BackboneElement' },
  _type: { type: String, default: 'FHIR::BackboneElement' },
});

class BackboneElement extends mongoose.Document {
  constructor(object) {
    super(object, BackboneElementSchema);
    this.typeName = 'BackboneElement';
    this._type = 'FHIR::BackboneElement';
  }
}

function BackboneElementSchemaFunction(add, options) {
  const extended = new mongoose.Schema({
    modifierExtension: [ExtensionSchema],
  }, options);

  if (add) {
    extended.add(add);
  }
  return extended;
}

module.exports.BackboneElementSchemaFunction = BackboneElementSchemaFunction;
module.exports.BackboneElementSchema = BackboneElementSchema;
module.exports.BackboneElement = BackboneElement;
