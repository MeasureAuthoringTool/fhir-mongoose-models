const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { DocumentRelationshipTypeSchema } = require('./DocumentRelationshipType');
const { IdentifierSchema } = require('./Identifier');
const { ReferenceSchema } = require('./Reference');

const CompositionRelatesToSchema = BackboneElementSchemaFunction({
  code: DocumentRelationshipTypeSchema,
  targetIdentifier: IdentifierSchema,
  targetReference: ReferenceSchema,
  typeName: { type: String, default: 'CompositionRelatesTo' },
  _type: { type: String, default: 'FHIR::CompositionRelatesTo' },
});

class CompositionRelatesTo extends mongoose.Document {
  constructor(object) {
    super(object, CompositionRelatesToSchema);
    this.typeName = 'CompositionRelatesTo';
    this._type = 'FHIR::CompositionRelatesTo';
  }
}

module.exports.CompositionRelatesToSchema = CompositionRelatesToSchema;
module.exports.CompositionRelatesTo = CompositionRelatesTo;
