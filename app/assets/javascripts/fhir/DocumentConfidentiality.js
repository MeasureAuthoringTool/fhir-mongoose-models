const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const DocumentConfidentialitySchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'DocumentConfidentiality' },
});

class DocumentConfidentiality extends mongoose.Document {
  constructor(object) {
    super(object, DocumentConfidentialitySchema);
    this._type = 'FHIR::DocumentConfidentiality';
  }
};


module.exports.DocumentConfidentialitySchema = DocumentConfidentialitySchema;
module.exports.DocumentConfidentiality = DocumentConfidentiality;
