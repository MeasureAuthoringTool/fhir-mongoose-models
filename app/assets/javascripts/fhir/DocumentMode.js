const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const DocumentModeSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'DocumentMode' },
});

class DocumentMode extends mongoose.Document {
  constructor(object) {
    super(object, DocumentModeSchema);
    this._type = 'FHIR::DocumentMode';
  }
};


module.exports.DocumentModeSchema = DocumentModeSchema;
module.exports.DocumentMode = DocumentMode;
