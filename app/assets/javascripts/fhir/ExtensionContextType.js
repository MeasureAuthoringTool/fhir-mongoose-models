const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ExtensionContextTypeSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'ExtensionContextType' },
});

class ExtensionContextType extends mongoose.Document {
  constructor(object) {
    super(object, ExtensionContextTypeSchema);
    this._type = 'FHIR::ExtensionContextType';
  }
};


module.exports.ExtensionContextTypeSchema = ExtensionContextTypeSchema;
module.exports.ExtensionContextType = ExtensionContextType;
