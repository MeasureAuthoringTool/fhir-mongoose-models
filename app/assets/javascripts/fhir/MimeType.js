const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const MimeTypeSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'MimeType' },
});

class MimeType extends mongoose.Document {
  constructor(object) {
    super(object, MimeTypeSchema);
    this._type = 'FHIR::MimeType';
  }
};


module.exports.MimeTypeSchema = MimeTypeSchema;
module.exports.MimeType = MimeType;
