const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { SubstanceAmountSchema } = require('./SubstanceAmount');
const { SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisationSchema } = require('./SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation');
const { SubstancePolymerRepeatRepeatUnitStructuralRepresentationSchema } = require('./SubstancePolymerRepeatRepeatUnitStructuralRepresentation');

const SubstancePolymerRepeatRepeatUnitSchema = BackboneElementSchemaFunction({
  orientationOfPolymerisation: CodeableConceptSchema,
  repeatUnit: PrimitiveStringSchema,
  amount: SubstanceAmountSchema,
  degreeOfPolymerisation: [SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisationSchema],
  structuralRepresentation: [SubstancePolymerRepeatRepeatUnitStructuralRepresentationSchema],
  typeName: { type: String, default: 'SubstancePolymerRepeatRepeatUnit' },
  _type: { type: String, default: 'FHIR::SubstancePolymerRepeatRepeatUnit' },
});

class SubstancePolymerRepeatRepeatUnit extends mongoose.Document {
  constructor(object) {
    super(object, SubstancePolymerRepeatRepeatUnitSchema);
    this.typeName = 'SubstancePolymerRepeatRepeatUnit';
    this._type = 'FHIR::SubstancePolymerRepeatRepeatUnit';
  }
}

module.exports.SubstancePolymerRepeatRepeatUnitSchema = SubstancePolymerRepeatRepeatUnitSchema;
module.exports.SubstancePolymerRepeatRepeatUnit = SubstancePolymerRepeatRepeatUnit;
