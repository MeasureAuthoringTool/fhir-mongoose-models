const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { DocumentRelationshipTypeSchema } = require('./DocumentRelationshipType');
const { IdentifierSchema } = require('./Identifier');
const { ReferenceSchema } = require('./Reference');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const CompositionRelatesToSchema = BackboneElementSchemaFunction({
   code : DocumentRelationshipTypeSchema,
   targetIdentifier : IdentifierSchema,
   targetReference : ReferenceSchema,
   fhirTitle: { type: String, default: 'CompositionRelatesTo' },
});

class CompositionRelatesTo extends mongoose.Document {
  constructor(object) {
    super(object, CompositionRelatesToSchema);
    this._type = 'FHIR::CompositionRelatesTo';
  }
};


module.exports.CompositionRelatesToSchema = CompositionRelatesToSchema;
module.exports.CompositionRelatesTo = CompositionRelatesTo;
