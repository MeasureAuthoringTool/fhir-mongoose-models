const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const CodeSystemContentModeSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'CodeSystemContentMode' },
});

class CodeSystemContentMode extends mongoose.Document {
  constructor(object) {
    super(object, CodeSystemContentModeSchema);
    this._type = 'FHIR::CodeSystemContentMode';
  }
};


module.exports.CodeSystemContentModeSchema = CodeSystemContentModeSchema;
module.exports.CodeSystemContentMode = CodeSystemContentMode;
