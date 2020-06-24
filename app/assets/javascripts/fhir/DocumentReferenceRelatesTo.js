const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { DocumentRelationshipTypeSchema } = require('./DocumentRelationshipType');
const { ReferenceSchema } = require('./Reference');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const DocumentReferenceRelatesToSchema = BackboneElementSchemaFunction({
   code : DocumentRelationshipTypeSchema,
   target : ReferenceSchema,
   fhirTitle: { type: String, default: 'DocumentReferenceRelatesTo' },
});

class DocumentReferenceRelatesTo extends mongoose.Document {
  constructor(object) {
    super(object, DocumentReferenceRelatesToSchema);
    this._type = 'FHIR::DocumentReferenceRelatesTo';
  }
};


module.exports.DocumentReferenceRelatesToSchema = DocumentReferenceRelatesToSchema;
module.exports.DocumentReferenceRelatesTo = DocumentReferenceRelatesTo;
