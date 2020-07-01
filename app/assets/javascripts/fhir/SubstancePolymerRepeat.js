const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { PrimitiveIntegerSchema } = require('./PrimitiveInteger');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { SubstancePolymerRepeatRepeatUnitSchema } = require('./SubstancePolymerRepeatRepeatUnit');

const SubstancePolymerRepeatSchema = BackboneElementSchemaFunction({
  numberOfUnits: PrimitiveIntegerSchema,
  averageMolecularFormula: PrimitiveStringSchema,
  repeatUnitAmountType: CodeableConceptSchema,
  repeatUnit: [SubstancePolymerRepeatRepeatUnitSchema],
  typeName: { type: String, default: 'SubstancePolymerRepeat' },
  _type: { type: String, default: 'FHIR::SubstancePolymerRepeat' },
});

class SubstancePolymerRepeat extends mongoose.Document {
  constructor(object) {
    super(object, SubstancePolymerRepeatSchema);
    this.typeName = 'SubstancePolymerRepeat';
    this._type = 'FHIR::SubstancePolymerRepeat';
  }
}

module.exports.SubstancePolymerRepeatSchema = SubstancePolymerRepeatSchema;
module.exports.SubstancePolymerRepeat = SubstancePolymerRepeat;
