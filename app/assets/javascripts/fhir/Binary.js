const mongoose = require('mongoose/browser');
const { MimeTypeSchema } = require('./MimeType');
const { ReferenceSchema } = require('./Reference');
const { ResourceSchema } = require('./Resource');
const { ResourceSchemaFunction } = require('./Resource');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const BinarySchema = ResourceSchemaFunction({
   contentType : MimeTypeSchema,
   securityContext : ReferenceSchema,
   data : String,
   fhirTitle: { type: String, default: 'Binary' },
});

class Binary extends mongoose.Document {
  constructor(object) {
    super(object, BinarySchema);
    this._type = 'FHIR::Binary';
  }
};


module.exports.BinarySchema = BinarySchema;
module.exports.Binary = Binary;
