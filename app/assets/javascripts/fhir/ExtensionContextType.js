const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const ExtensionContextTypeSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'ExtensionContextType' },
  _type: { type: String, default: 'FHIR::ExtensionContextType' },
});

class ExtensionContextType extends mongoose.Document {
  constructor(object) {
    super(object, ExtensionContextTypeSchema);
    this.typeName = 'ExtensionContextType';
    this._type = 'FHIR::ExtensionContextType';
  }
}

module.exports.ExtensionContextTypeSchema = ExtensionContextTypeSchema;
module.exports.ExtensionContextType = ExtensionContextType;
