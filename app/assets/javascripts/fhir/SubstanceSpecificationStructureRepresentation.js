const mongoose = require('mongoose/browser');
const { AttachmentSchema } = require('./Attachment');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { PrimitiveStringSchema } = require('./PrimitiveString');

const SubstanceSpecificationStructureRepresentationSchema = BackboneElementSchemaFunction({
  type: CodeableConceptSchema,
  representation: PrimitiveStringSchema,
  attachment: AttachmentSchema,
  typeName: { type: String, default: 'SubstanceSpecificationStructureRepresentation' },
  _type: { type: String, default: 'FHIR::SubstanceSpecificationStructureRepresentation' },
});

class SubstanceSpecificationStructureRepresentation extends mongoose.Document {
  constructor(object) {
    super(object, SubstanceSpecificationStructureRepresentationSchema);
    this.typeName = 'SubstanceSpecificationStructureRepresentation';
    this._type = 'FHIR::SubstanceSpecificationStructureRepresentation';
  }
}

module.exports.SubstanceSpecificationStructureRepresentationSchema = SubstanceSpecificationStructureRepresentationSchema;
module.exports.SubstanceSpecificationStructureRepresentation = SubstanceSpecificationStructureRepresentation;
