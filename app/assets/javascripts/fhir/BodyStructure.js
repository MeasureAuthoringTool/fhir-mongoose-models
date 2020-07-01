const mongoose = require('mongoose/browser');
const { AttachmentSchema } = require('./Attachment');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DomainResourceSchema } = require('./DomainResource');
const { DomainResourceSchemaFunction } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { PrimitiveBooleanSchema } = require('./PrimitiveBoolean');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { ReferenceSchema } = require('./Reference');

const BodyStructureSchema = DomainResourceSchemaFunction({
  identifier: [IdentifierSchema],
  active: PrimitiveBooleanSchema,
  morphology: CodeableConceptSchema,
  location: CodeableConceptSchema,
  locationQualifier: [CodeableConceptSchema],
  description: PrimitiveStringSchema,
  image: [AttachmentSchema],
  patient: ReferenceSchema,
  typeName: { type: String, default: 'BodyStructure' },
  _type: { type: String, default: 'FHIR::BodyStructure' },
});

class BodyStructure extends mongoose.Document {
  constructor(object) {
    super(object, BodyStructureSchema);
    this.typeName = 'BodyStructure';
    this._type = 'FHIR::BodyStructure';
  }
}

module.exports.BodyStructureSchema = BodyStructureSchema;
module.exports.BodyStructure = BodyStructure;
