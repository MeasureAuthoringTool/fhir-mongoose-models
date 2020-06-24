const mongoose = require('mongoose/browser');
const { AttachmentSchema } = require('./Attachment');
const { ElementSchema } = require('./Element');
const { RelatedArtifactTypeSchema } = require('./RelatedArtifactType');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const RelatedArtifactSchema = ElementSchemaFunction({
   type : RelatedArtifactTypeSchema,
   label : String,
   display : String,
   citation : String,
   url : String,
   document : AttachmentSchema,
   resource : String,
   fhirTitle: { type: String, default: 'RelatedArtifact' },
});

class RelatedArtifact extends mongoose.Document {
  constructor(object) {
    super(object, RelatedArtifactSchema);
    this._type = 'FHIR::RelatedArtifact';
  }
};


module.exports.RelatedArtifactSchema = RelatedArtifactSchema;
module.exports.RelatedArtifact = RelatedArtifact;
