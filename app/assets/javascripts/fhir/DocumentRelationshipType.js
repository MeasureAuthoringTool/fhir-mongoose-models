const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const DocumentRelationshipTypeSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'DocumentRelationshipType' },
  _type: { type: String, default: 'FHIR::DocumentRelationshipType' },
});

class DocumentRelationshipType extends mongoose.Document {
  constructor(object) {
    super(object, DocumentRelationshipTypeSchema);
    this.typeName = 'DocumentRelationshipType';
    this._type = 'FHIR::DocumentRelationshipType';
  }
}

module.exports.DocumentRelationshipTypeSchema = DocumentRelationshipTypeSchema;
module.exports.DocumentRelationshipType = DocumentRelationshipType;
