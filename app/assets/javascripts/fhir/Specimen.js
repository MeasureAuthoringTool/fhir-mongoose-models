const mongoose = require('mongoose/browser');
const { AnnotationSchema } = require('./Annotation');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DomainResourceSchema } = require('./DomainResource');
const { DomainResourceSchemaFunction } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { PrimitiveDateTimeSchema } = require('./PrimitiveDateTime');
const { ReferenceSchema } = require('./Reference');
const { SpecimenCollectionSchema } = require('./SpecimenCollection');
const { SpecimenContainerSchema } = require('./SpecimenContainer');
const { SpecimenProcessingSchema } = require('./SpecimenProcessing');
const { SpecimenStatusSchema } = require('./SpecimenStatus');

const SpecimenSchema = DomainResourceSchemaFunction({
  identifier: [IdentifierSchema],
  accessionIdentifier: IdentifierSchema,
  status: SpecimenStatusSchema,
  type: CodeableConceptSchema,
  subject: ReferenceSchema,
  receivedTime: PrimitiveDateTimeSchema,
  parent: [ReferenceSchema],
  request: [ReferenceSchema],
  _collection: SpecimenCollectionSchema,
  processing: [SpecimenProcessingSchema],
  container: [SpecimenContainerSchema],
  condition: [CodeableConceptSchema],
  note: [AnnotationSchema],
  typeName: { type: String, default: 'Specimen' },
  _type: { type: String, default: 'FHIR::Specimen' },
});

class Specimen extends mongoose.Document {
  constructor(object) {
    super(object, SpecimenSchema);
    this.typeName = 'Specimen';
    this._type = 'FHIR::Specimen';
  }
}

module.exports.SpecimenSchema = SpecimenSchema;
module.exports.Specimen = Specimen;
