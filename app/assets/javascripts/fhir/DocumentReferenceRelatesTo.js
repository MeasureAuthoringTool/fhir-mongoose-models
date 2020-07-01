const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { DocumentRelationshipTypeSchema } = require('./DocumentRelationshipType');
const { ReferenceSchema } = require('./Reference');

const DocumentReferenceRelatesToSchema = BackboneElementSchemaFunction({
  code: DocumentRelationshipTypeSchema,
  target: ReferenceSchema,
  typeName: { type: String, default: 'DocumentReferenceRelatesTo' },
  _type: { type: String, default: 'FHIR::DocumentReferenceRelatesTo' },
});

class DocumentReferenceRelatesTo extends mongoose.Document {
  constructor(object) {
    super(object, DocumentReferenceRelatesToSchema);
    this.typeName = 'DocumentReferenceRelatesTo';
    this._type = 'FHIR::DocumentReferenceRelatesTo';
  }
}

module.exports.DocumentReferenceRelatesToSchema = DocumentReferenceRelatesToSchema;
module.exports.DocumentReferenceRelatesTo = DocumentReferenceRelatesTo;
