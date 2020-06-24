const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { IdentifierSchema } = require('./Identifier');
const { ReferenceSchema } = require('./Reference');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const DocumentManifestRelatedSchema = BackboneElementSchemaFunction({
   identifier : IdentifierSchema,
   ref : ReferenceSchema,
   fhirTitle: { type: String, default: 'DocumentManifestRelated' },
});

class DocumentManifestRelated extends mongoose.Document {
  constructor(object) {
    super(object, DocumentManifestRelatedSchema);
    this._type = 'FHIR::DocumentManifestRelated';
  }
};


module.exports.DocumentManifestRelatedSchema = DocumentManifestRelatedSchema;
module.exports.DocumentManifestRelated = DocumentManifestRelated;
