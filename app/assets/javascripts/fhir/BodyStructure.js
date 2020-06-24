const mongoose = require('mongoose/browser');
const { AttachmentSchema } = require('./Attachment');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { ReferenceSchema } = require('./Reference');
const { DomainResourceSchemaFunction } = require('./DomainResource');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const BodyStructureSchema = DomainResourceSchemaFunction({
   identifier : [IdentifierSchema],
   active : Boolean,
   morphology : CodeableConceptSchema,
   location : CodeableConceptSchema,
   locationQualifier : [CodeableConceptSchema],
   description : String,
   image : [AttachmentSchema],
   patient : ReferenceSchema,
   fhirTitle: { type: String, default: 'BodyStructure' },
});

class BodyStructure extends mongoose.Document {
  constructor(object) {
    super(object, BodyStructureSchema);
    this._type = 'FHIR::BodyStructure';
  }
};


module.exports.BodyStructureSchema = BodyStructureSchema;
module.exports.BodyStructure = BodyStructure;
