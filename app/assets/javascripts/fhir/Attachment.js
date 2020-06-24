const mongoose = require('mongoose/browser');
const DateTime = require('./basetypes/DateTime');
const { ElementSchema } = require('./Element');
const { MimeTypeSchema } = require('./MimeType');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const AttachmentSchema = ElementSchemaFunction({
   contentType : MimeTypeSchema,
   language : String,
   data : String,
   url : String,
   size : Number,
   hash : String,
   title : String,
   creation : DateTime,
   fhirTitle: { type: String, default: 'Attachment' },
});

class Attachment extends mongoose.Document {
  constructor(object) {
    super(object, AttachmentSchema);
    this._type = 'FHIR::Attachment';
  }
};


module.exports.AttachmentSchema = AttachmentSchema;
module.exports.Attachment = Attachment;
