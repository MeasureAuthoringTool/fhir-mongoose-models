const mongoose = require('mongoose/browser');
const DateTime = require('./basetypes/DateTime');
const { CodingSchema } = require('./Coding');
const { ElementSchema } = require('./Element');
const { MimeTypeSchema } = require('./MimeType');
const { ReferenceSchema } = require('./Reference');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const SignatureSchema = ElementSchemaFunction({
   type : [CodingSchema],
   when : DateTime,
   who : ReferenceSchema,
   onBehalfOf : ReferenceSchema,
   targetFormat : MimeTypeSchema,
   sigFormat : MimeTypeSchema,
   data : String,
   fhirTitle: { type: String, default: 'Signature' },
});

class Signature extends mongoose.Document {
  constructor(object) {
    super(object, SignatureSchema);
    this._type = 'FHIR::Signature';
  }
};


module.exports.SignatureSchema = SignatureSchema;
module.exports.Signature = Signature;
