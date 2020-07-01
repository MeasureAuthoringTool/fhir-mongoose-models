const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { IdentifierSchema } = require('./Identifier');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { ReferenceSchema } = require('./Reference');
const { SimpleQuantitySchema } = require('./SimpleQuantity');

const SpecimenContainerSchema = BackboneElementSchemaFunction({
  identifier: [IdentifierSchema],
  description: PrimitiveStringSchema,
  type: CodeableConceptSchema,
  capacity: SimpleQuantitySchema,
  specimenQuantity: SimpleQuantitySchema,
  additiveCodeableConcept: CodeableConceptSchema,
  additiveReference: ReferenceSchema,
  typeName: { type: String, default: 'SpecimenContainer' },
  _type: { type: String, default: 'FHIR::SpecimenContainer' },
});

class SpecimenContainer extends mongoose.Document {
  constructor(object) {
    super(object, SpecimenContainerSchema);
    this.typeName = 'SpecimenContainer';
    this._type = 'FHIR::SpecimenContainer';
  }
}

module.exports.SpecimenContainerSchema = SpecimenContainerSchema;
module.exports.SpecimenContainer = SpecimenContainer;
