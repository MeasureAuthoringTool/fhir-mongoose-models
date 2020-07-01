const mongoose = require('mongoose/browser');
const { AttachmentSchema } = require('./Attachment');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { PrimitiveStringSchema } = require('./PrimitiveString');

const SubstancePolymerRepeatRepeatUnitStructuralRepresentationSchema = BackboneElementSchemaFunction({
  type: CodeableConceptSchema,
  representation: PrimitiveStringSchema,
  attachment: AttachmentSchema,
  typeName: { type: String, default: 'SubstancePolymerRepeatRepeatUnitStructuralRepresentation' },
  _type: { type: String, default: 'FHIR::SubstancePolymerRepeatRepeatUnitStructuralRepresentation' },
});

class SubstancePolymerRepeatRepeatUnitStructuralRepresentation extends mongoose.Document {
  constructor(object) {
    super(object, SubstancePolymerRepeatRepeatUnitStructuralRepresentationSchema);
    this.typeName = 'SubstancePolymerRepeatRepeatUnitStructuralRepresentation';
    this._type = 'FHIR::SubstancePolymerRepeatRepeatUnitStructuralRepresentation';
  }
}

module.exports.SubstancePolymerRepeatRepeatUnitStructuralRepresentationSchema = SubstancePolymerRepeatRepeatUnitStructuralRepresentationSchema;
module.exports.SubstancePolymerRepeatRepeatUnitStructuralRepresentation = SubstancePolymerRepeatRepeatUnitStructuralRepresentation;
