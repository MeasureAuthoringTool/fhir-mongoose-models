const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const DocumentRelationshipTypeSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'DocumentRelationshipType' },
});

class DocumentRelationshipType extends mongoose.Document {
  constructor(object) {
    super(object, DocumentRelationshipTypeSchema);
    this._type = 'FHIR::DocumentRelationshipType';
  }
};


module.exports.DocumentRelationshipTypeSchema = DocumentRelationshipTypeSchema;
module.exports.DocumentRelationshipType = DocumentRelationshipType;
